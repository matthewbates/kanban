import styled from "styled-components";
import { taskStatus } from "../../utils/data";

export const ColumnContainer = styled.div`
  margin: 8px;
  border-radius: 10px;
  width: 300px;
  font-family: "Arial";
`;

export const ColumnTitle = styled.div`
  display: flex;
  padding: 8px;
  border-bottom: 2px solid ${({ status }) => status};
`;

export const ColumnItems = styled.div`
  padding: 8px;
  transition: 0.3s;
`;

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
