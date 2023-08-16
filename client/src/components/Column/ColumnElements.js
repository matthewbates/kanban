import styled from "styled-components";

export const ColumnContainer = styled.div`
  margin: 0.75em;
  width: 300px;
  border: 1px solid gray;
  border-radius: 0.5em;
  height: 100%;
  padding: 0.5em;
`;

export const ColumnTitle = styled.div`
  font-family: "Raleway";
  border-bottom: 2px solid ${({ status }) => status};
`;

export const ColumnItems = styled.div`
  font-family: "Open Sans";
  padding: 0.5em;
`;
