import styled from "styled-components";

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.75em;
  width: 100%;
  max-width: 300px;
  height: 100%;
  padding: 0.5em;
  border: 1px solid lightgray;
  border-radius: 0.5em;

  @media screen and (min-width: 48);
`;

export const ColumnTitle = styled.div`
  font-family: "Raleway";
  border-bottom: 2px solid ${({ status }) => status};
  padding: 0.5em;
`;

export const ColumnBtn = styled.button`
  font-family: "Open Sans";
  display: flex;
  width: 100%;
  margin-bottom: 0.5em;
  border-radius: 0.5em;
  background: #ffffff;
  border: 1px solid lightgray;
  padding: 0.75em;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  cursor: pointer;
  color: #3a8def;
`;

export const ColumnBtnSpan = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

export const ColumnItems = styled.div`
  padding: 0.5em;
  min-height: 100px;
`;
