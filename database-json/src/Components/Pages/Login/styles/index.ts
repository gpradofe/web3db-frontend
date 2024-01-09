import { styled } from "styled-components";

export const StyledButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: #45a049;
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.3);
  }
`;
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f2f5; // Light gray background
  color: #333; // Dark text color
  font-family: "Arial", sans-serif; // Modern font
  text-align: center;
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 2.5rem; // Larger title font
  margin-bottom: 1.5rem;
  color: #1c1e21; // Slightly darker text for contrast
`;
