import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledButton, LoginContainer, Title, ButtonContainer } from "./styles"; // Import the new styles

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNormalRoute = () => {
    navigate("/run-query");
  };

  const handleMetaMaskRoute = () => {
    window.location.href = "https://metamask.web3db.org";
  };

  return (
    <LoginContainer>
      <Title>Welcome to Web3DB</Title>
      <ButtonContainer>
        <StyledButton onClick={handleNormalRoute}>
          Proceed Normally
        </StyledButton>
        <StyledButton onClick={handleMetaMaskRoute}>
          Connect to MetaMask
        </StyledButton>
      </ButtonContainer>
    </LoginContainer>
  );
};

export default LandingPage;
