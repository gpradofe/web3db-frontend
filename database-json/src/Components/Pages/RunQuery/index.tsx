import React, { useContext, useState } from "react";
import { Dropdown, Row, Col, Table, Form } from "react-bootstrap";
import AceEditor from "react-ace";
import "brace/mode/sql";
import "brace/theme/tomorrow_night_eighties";
import "brace/ext/language_tools";
import "brace/ext/searchbox";
import { SqlContext } from "../../../context/SqlContext";
import { QueryContainer, StyledButton, StyledDropdown } from "./styles";
import ace from "ace-builds/src-noconflict/ace";
interface ResultRow {
  [key: string]: any;
}

const RunQuery: React.FC = () => {
  const langTools = ace.require("ace/ext/language_tools");

  const {
    runQuery,
    results,
    message,
    hash: contextHash,
    setHash,
  } = useContext(SqlContext);
  const [selectedDB, setSelectedDB] = useState<string>("Select Database");
  const [inputQuery, setInputQuery] = useState<string>("");
  const [inputHash, setInputHash] = useState<string>(contextHash || "");

  const handleInputChange = (newValue: string) => {
    const transformedValue = capitalizeSQLKeywords(newValue);
    setInputQuery(transformedValue);
  };

  const handleHashChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputHash(event.target.value);
  };

  const handleRunQuery = () => {
    const hash = inputHash || "dummy_ipfs_hash";
    // Check if runQuery is defined
    if (runQuery) {
      runQuery(inputQuery, selectedDB, hash);
    } else {
      console.error("runQuery function is undefined");
      // Handle the error as needed
    }
  };
  React.useEffect(() => {
    if (contextHash) {
      setInputHash(contextHash);
    }
  }, [contextHash]);
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
    } else if (message) {
      return <p>{message}</p>;
    }
    return null;
  };

  const sqlKeywords = [
    "ADD",
    "ALL",
    "ALTER",
    "AND",
    "ANY",
    "AS",
    "ASC",
    "BACKUP",
    "BETWEEN",
    "BY",
    "CASE",
    "CHECK",
    "COLUMN",
    "CONSTRAINT",
    "CREATE",
    "DATABASE",
    "DEFAULT",
    "DELETE",
    "DESC",
    "DISTINCT",
    "DROP",
    "ELSE",
    "END",
    "EXISTS",
    "FOREIGN",
    "FROM",
    "FULL",
    "GROUP",
    "HAVING",
    "IN",
    "INDEX",
    "INNER",
    "INSERT",
    "INTERSECT",
    "INTO",
    "IS",
    "JOIN",
    "KEY",
    "LEFT",
    "LIKE",
    "LIMIT",
    "NOT",
    "NULL",
    "OR",
    "ORDER",
    "OUTER",
    "PRIMARY",
    "RIGHT",
    "ROWNUM",
    "SELECT",
    "SET",
    "TABLE",
    "THEN",
    "TOP",
    "TRUNCATE",
    "UNION",
    "UPDATE",
    "VALUES",
    "VIEW",
    "WHERE",
  ];
  const sqlCompleter = {
    getCompletions: (
      _editor: any,
      _session: any,
      _pos: any,
      prefix: any,
      callback: any
    ) => {
      callback(
        null,
        sqlKeywords.map((word) => ({
          caption: word,
          value: word,
          meta: "SQL",
        }))
      );
    },
  };
  langTools.addCompleter(sqlCompleter);

  const capitalizeSQLKeywords = (input: string) => {
    const words = input.split(" ");
    return words
      .map((word) => {
        if (sqlKeywords.includes(word.toUpperCase())) {
          return word.toUpperCase();
        }
        return word;
      })
      .join(" ");
  };

  // Inside your RunQuery component

  return (
    <QueryContainer>
      <Row className="mb-4">
        <Col xs={12}>
          <AceEditor
            mode="sql"
            theme="tomorrow_night_eighties"
            value={inputQuery}
            onChange={handleInputChange}
            name="SQL_EDITOR"
            editorProps={{ $blockScrolling: true }}
            width="100%"
            height="250px"
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
              showLineNumbers: true,
              tabSize: 4,
            }}
          />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col xs={12}>
          <Form.Control
            type="text"
            placeholder="Enter hash or leave empty for default"
            value={inputHash}
            onChange={handleHashChange}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <StyledButton variant="secondary" onClick={handleRunQuery}>
            Run Query
          </StyledButton>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>{renderTable()}</Col>
      </Row>
    </QueryContainer>
  );
};

export default RunQuery;
