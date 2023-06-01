// this component represents a column that can hold a <Task />
import { Droppable } from "react-beautiful-dnd";

import {
  ColumnContainer,
  ColumnTitle,
  ColumnItems,
  AddBtn,
} from "./ColumnElements";

import Tasks from "../Tasks";

export default function Column({ droppableId, column }) {
  console.log(column);
  return (
    <ColumnContainer>
      <ColumnTitle status={column.status}>
        {column.name} ({column.items.length})
      </ColumnTitle>
      <Droppable droppableId={droppableId}>
        {(provided) => (
          <ColumnItems ref={provided.innerRef} {...provided.droppableProps}>
            <AddBtn>➕ Add Item</AddBtn>
            {column.items.map((item, index) => {
              return (
                <Tasks
                  key={item.id}
                  draggableId={item.id}
                  index={index}
                  item={item}
                />
              );
            })}
            {provided.placeholder}
          </ColumnItems>
        )}
      </Droppable>
    </ColumnContainer>
  );
}
