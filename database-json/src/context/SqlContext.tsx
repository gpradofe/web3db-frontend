import React, {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useCallback,
} from "react";
import Web3 from "web3";
import { Contract } from "web3-eth-contract";

const contractABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "newHash",
        type: "string",
      },
    ],
    name: "addHash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getHashes",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "newHash",
        type: "string",
      },
    ],
    name: "updateHash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const contractAddress = "0x5a438cf312b23856566eE224796644Fb59759FDA";

type SqlState = {
  query: string;
  results: any;
  runQuery: (query: string, database: string, hash: string) => Promise<any[]>; // Update the type here
  message: string | null;
  hash: string | null;
  setHash: (hash: string | null) => void;
  error: string | null;
  metamaskAccount: string | null;
  setMetamaskAccount: (account: string | null) => void;
  isUserLoggedIn: () => boolean;
  fetchUserHashes: () => void;
  updateBlockchainHash: (newHash: string) => void;
  userHashes: string[];
  setUserHashes: (hashes: string[]) => void;
};
const initialContext: Partial<SqlState> = {
  query: "",
  results: null,
  runQuery: () => Promise.resolve([]),
  message: null,
  hash: null,
  setHash: () => {},
  error: null,
  metamaskAccount: null,
  setMetamaskAccount: () => {},
  isUserLoggedIn: () => false,
  fetchUserHashes: () => {},
  updateBlockchainHash: () => {},
  userHashes: [],
  setUserHashes: () => {},
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
  const [metamaskAccount, setMetamaskAccount] = useState<string | null>(null);
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [contract, setContract] = useState<Contract<any> | null>(null);
  const [userHashes, setUserHashes] = useState<string[]>([]);

  const runQuery = async (
    sqlQuery: string,
    database: string,
    queryHash: string
  ): Promise<any[]> => {
    setQuery(sqlQuery);

    const requestBody = {
      query: sqlQuery,
      hash: queryHash,
      userAddress: metamaskAccount,
    };

    try {
      const response = await fetch(
        "http://api.web3db.org/api/Query/SendQuery",
        {
          method: "POST",
          body: JSON.stringify(requestBody),
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();

      setResults(data.Data);
      setMessage(data.Message);
      setHash(data.Hash);
      setError(data.Error);

      if (
        sqlQuery.startsWith("CREATE") &&
        data.Hash &&
        data.Hash !== queryHash
      ) {
        await updateBlockchainHash(data.Hash);
      } else if (
        !sqlQuery.startsWith("SELECT" || "SHOW TABLES") &&
        data.Hash &&
        data.Hash !== queryHash
      ) {
        const indexToUpdate = await findHashIndex(queryHash);
        if (indexToUpdate >= 0) {
          await updateBlockchainHashAtIndex(data.Hash, indexToUpdate);
        }
      }

      await fetchUserHashes();
      console.log(data);
      return data.Data;
    } catch (err) {
      console.error("Error running query:", err);
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
      return []; // Return an empty array in case of error
    }
  };

  const findHashIndex = async (hashToFind: string): Promise<number> => {
    if (contract && metamaskAccount) {
      try {
        // Call the smart contract and assert the return type to be an array of strings
        const hashes: string[] = (await contract.methods
          .getHashes(metamaskAccount)
          .call()) as string[];
        return hashes.findIndex((hash) => hash === hashToFind);
      } catch (error) {
        console.error("Error finding hash index:", error);
        return -1;
      }
    }
    return -1;
  };
  const updateBlockchainHashAtIndex = async (
    newHash: string,
    index: number
  ) => {
    if (contract && metamaskAccount) {
      try {
        const updateTx = await contract.methods
          .updateHash(index, newHash)
          .send({ from: metamaskAccount });
        console.log("Updated hash at index", index, updateTx);
      } catch (error) {
        console.error("Error updating hash at index:", error);
      }
    }
  };
  const isUserLoggedIn = () => metamaskAccount != null;
  useEffect(() => {
    if (window.ethereum && metamaskAccount) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);

      const contractInstance = new web3Instance.eth.Contract(
        contractABI as any,
        contractAddress
      );
      setContract(contractInstance);
    }
  }, [metamaskAccount]);
  const fetchUserHashes = useCallback(async () => {
    console.log("Fetching user hashes...");

    if (contract && metamaskAccount) {
      try {
        const hashes: string[] = (await contract.methods
          .getHashes(metamaskAccount)
          .call()) as string[];
        setUserHashes(hashes);
      } catch (error) {
        console.error("Error fetching hashes:", error);
      }
    }
  }, [contract, metamaskAccount]);

  const updateBlockchainHash = async (newHash: string) => {
    if (contract && metamaskAccount) {
      try {
        const updateTx = await contract.methods
          .addHash(newHash)
          .send({ from: metamaskAccount });
        console.log("Transaction successful", updateTx);
      } catch (error) {
        console.error("Error updating blockchain hash:", error);
      }
    }
  };
  return (
    <SqlContext.Provider
      value={{
        query,
        results,
        runQuery,
        message,
        hash,
        setHash,
        error,
        metamaskAccount,
        setMetamaskAccount,
        isUserLoggedIn,
        fetchUserHashes,
        updateBlockchainHash,
        userHashes,
        setUserHashes,
      }}
    >
      {children}
    </SqlContext.Provider>
  );
};
