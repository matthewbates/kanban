import styled from "styled-components";

export const AddBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
  border-radius: 10px;
  background: #ffffff;
  border: 1px solid lightgray;
  padding: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    border: 1px solid darkgray;
  }
`;
