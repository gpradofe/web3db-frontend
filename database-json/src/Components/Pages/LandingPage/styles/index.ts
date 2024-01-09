import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px; // Spacing between buttons
`;

export const StyledButton = styled.button`
  background-color: #4caf50; // Default background color
  color: white;
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.3);
  }

  // Different color for the second button
  &:last-child {
    background-color: #008cba; // A different color for contrast
    &:hover {
      background-color: #007b9a; // Slightly darker on hover
    }
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f2f5;
  color: #333;
  font-family: "Arial", sans-serif;
  text-align: center;
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #1c1e21;
`;
