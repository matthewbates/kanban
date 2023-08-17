import { Droppable } from "react-beautiful-dnd";
import { FaPlus } from "react-icons/fa";

import {
  ColumnContainer,
  ColumnTitle,
  ColumnBtn,
  ColumnBtnSpan,
  ColumnItems,
} from "./ColumnElements";

import Task from "../Task";

export default function Column({ column, tasks }) {
  console.log(column.taskIds.length);
  return (
    <ColumnContainer>
      <ColumnTitle status={column.status}>
        {column.title} ({column.taskIds.length})
      </ColumnTitle>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <ColumnItems ref={provided.innerRef} {...provided.droppableProps}>
            <ColumnBtn>
              <ColumnBtnSpan>
                <FaPlus />
                Add Item
              </ColumnBtnSpan>
            </ColumnBtn>
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
