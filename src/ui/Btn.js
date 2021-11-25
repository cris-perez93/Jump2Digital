import styled from "styled-components";

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 48px;
  background: ${(props) => (props.primary ? "#000000" : "#3C4257")};
  box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.12), 0px 2px 5px rgba(0, 0, 0, 0.12),
    0px 1px 1px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  color: ${(props) => (props.primary ? "white" : "#8792A2")};
  border: none;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  font-size: 20px;
  margin-top: 30px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: black;
    cursor: pointer;
  }

  @media (max-width: 520px) {
    margin-top: 32px;
  }
`;
