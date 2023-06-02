import styled from "styled-components";
import { taskStatus } from "../../utils/data";

export const ColumnContainer = styled.div`
  margin: 8px;
  border-radius: 10px;
  width: 300px;
  font-family: "Arial";
  border: 1px solid #f1f2f2;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: ${({ hasTasks }) => (hasTasks ? "auto" : "300px")};
`;

export const ColumnTitle = styled.div`
  display: flex;
  padding: 8px;
  border-bottom: 2px solid ${({ status }) => status};
  font-size: 14px;
`;

export const ColumnItems = styled.div`
  padding: 8px;
  transition: 0.3s;
  flex-grow: 1;
  background: ${({ isDraggingOver }) => (isDraggingOver ? "skyblue" : "white")};
`;
