import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Web3 from "web3";
import styled from "styled-components";
import { LoginContainer, StyledButton, Title } from "./styles";
import { SqlContext } from "../../../context/SqlContext";

const LoginPage: React.FC = () => {
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const navigate = useNavigate();
  const context = useContext(SqlContext);

  useEffect(() => {
    if (!window.ethereum) {
      // Open MetaMask download page in a new popup window
      window.open(
        "https://metamask.io/download.html",
        "MetaMask",
        "width=500,height=600,left=200,top=200"
      );
    } else {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
    }
  }, []);

  const connectWallet = async () => {
    if (web3 && context.setMetamaskAccount) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        context.setMetamaskAccount(accounts[0]);

        navigate("/run-query");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <LoginContainer>
      <Title>Login with MetaMask</Title>
      <StyledButton onClick={connectWallet}>Connect to MetaMask</StyledButton>
    </LoginContainer>
  );
};

export default LoginPage;

declare global {
  interface Window {
    ethereum: any;
  }
}
