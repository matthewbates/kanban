import styled from "styled-components";

export const ColumnContainer = styled.div`
  margin: 0.75em;
  width: 100%;
  max-width: 300px;
  height: 100%;
  padding: 0.5em;

  @media screen and (min-width: 48);
`;

export const ColumnTitle = styled.div`
  font-family: "Raleway";
  border-bottom: 2px solid ${({ status }) => status};
  padding: 0.5em;
`;

export const ColumnItems = styled.div`
  font-family: "Open Sans";
  padding: 0.5em;
`;
