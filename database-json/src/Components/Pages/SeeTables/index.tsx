import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import { SqlContext } from "../../../context/SqlContext";

// Define the structure for the row data
interface ResultRow {
  [key: string]: any;
}

// Define the structure for the table names mapping
interface TableNamesMapping {
  [hash: string]: string[];
}

const SeeTables: React.FC = () => {
  const { fetchUserHashes, runQuery, results, userHashes } =
    useContext(SqlContext);
  const [tableNames, setTableNames] = useState<TableNamesMapping>({});
  const [selectedTable, setSelectedTable] = useState<string>("");
  const [fetched, setFetched] = useState<boolean>(false);

  useEffect(() => {
    if (fetchUserHashes && !fetched) {
      fetchUserHashes();
      setFetched(true);
    }
  }, [fetchUserHashes, fetched]);

  useEffect(() => {
    const fetchTables = async () => {
      const tablesMap: TableNamesMapping = {};

      for (const hash of userHashes || []) {
        if (runQuery) {
          const queryResults = await runQuery("SHOW TABLES", "", hash);
          console.log("Query results:", queryResults);
          if (queryResults) {
            queryResults.forEach((row: ResultRow) => console.log("Row:", row));
            tablesMap[hash] = queryResults.map(
              (row: ResultRow) => row.tableName
            );
          }
        }
      }

      setTableNames(tablesMap);
    };

    if (userHashes && userHashes.length > 0 && !fetched) {
      fetchTables();
    }
  }, [userHashes, runQuery, results, fetched]);

  const handleTableSelection = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedTable(event.target.value);
  };

  const handleConfirm = async () => {
    const [hash, tableName] = selectedTable.split("-");
    if (runQuery && tableName && hash) {
      await runQuery(`SELECT * FROM ${tableName}`, "", hash);
    }
  };

  const renderTable = () => {
    if (results && results.length > 0) {
      const columns = Object.keys(results[0]);
      return (
        <Table striped bordered hover>
          <thead>
            <tr>
              {columns.map((col, index) => (
                <th key={index}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {results.map((row: ResultRow, rowIndex: number) => (
              <tr key={rowIndex}>
                {columns.map((col, colIndex) => (
                  <td key={colIndex}>{row[col]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      );
    }
    return null;
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form.Select
            aria-label="Select table"
            onChange={handleTableSelection}
          >
            <option value="">Select a table</option>
            {Object.entries(tableNames).map(([hash, tables]) =>
              tables.map((table, index) => (
                <option key={`${hash}-${index}`} value={`${hash}-${table}`}>
                  {table}
                </option>
              ))
            )}
          </Form.Select>
        </Col>
        <Col>
          <Button onClick={handleConfirm}>Confirm</Button>
        </Col>
      </Row>
      <Row>
        <Col>{renderTable()}</Col>
      </Row>
    </Container>
  );
};

export default SeeTables;
