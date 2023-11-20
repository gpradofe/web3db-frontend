import React, { createContext, useState, ReactNode } from "react";

type SqlState = {
  query: string;
  results: any;
  runQuery: (query: string, database: string, hash: string) => void;
  message: string | null;
  hash: string | null;
  setHash: (hash: string | null) => void;
  error: string | null;
};

const initialContext: Partial<SqlState> = {
  query: "",
  results: null,
  runQuery: () => {},
  message: null,
  hash: null,
  setHash: () => {},
  error: null,
};

export const SqlContext = createContext<Partial<SqlState>>(initialContext);

interface SqlProviderProps {
  children: ReactNode;
}

export const SqlProvider: React.FC<SqlProviderProps> = ({ children }) => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<any>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [hash, setHash] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const runQuery = async (
    sqlQuery: string,
    database: string,
    queryHash: string
  ) => {
    setQuery(sqlQuery);

    const requestBody = {
      query: sqlQuery,
      hash: queryHash,
    };

    try {
      const response = await fetch(
        "https://localhost:5009/api/Query/SendQuery",
        {
          method: "POST",
          body: JSON.stringify(requestBody),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      // Update state with response data
      setResults(data.Data);
      setMessage(data.Message);
      setHash(data.Hash);
      setError(data.Error);
    } catch (err) {
      console.error("Error running query:", err);

      // Check if 'err' is an instance of Error and set the error message
      if (err instanceof Error) {
        setError(err.message);
      } else {
        // If it's not an Error, you can handle it differently or set a generic error message
        setError("An unknown error occurred");
      }
    }
  };

  return (
    <SqlContext.Provider
      value={{ query, results, runQuery, message, hash, setHash, error }} // Include setHash here
    >
      {children}
    </SqlContext.Provider>
  );
};
