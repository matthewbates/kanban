import { Droppable } from "react-beautiful-dnd";

import { ColumnContainer, ColumnTitle, ColumnItems } from "./ColumnElements";

import Task from "../Task";

export default function Column({ column, tasks }) {
  console.log(column.id);
  return (
    <ColumnContainer>
      <ColumnTitle status={column.status}>{column.title}</ColumnTitle>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <ColumnItems ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task, index) => (
              <Task key={task.id} index={index} task={task} />
            ))}
            {provided.placeholder}
          </ColumnItems>
        )}
      </Droppable>
    </ColumnContainer>
  );
}
