import React, { useContext } from "react";
import { SqlContext } from "../../../context/SqlContext";

const SeeTables: React.FC = () => {
  const { results } = useContext(SqlContext);

  return <div>{/* Render your tables here using the results */}</div>;
};

export default SeeTables;
