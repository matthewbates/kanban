// this component represents a column that can hold a <Task />
import { useState } from "react";

import { Droppable } from "react-beautiful-dnd";
import axios from "axios";

import { ColumnContainer, ColumnTitle, ColumnItems } from "./ColumnElements";

import Tasks from "../Tasks";
import AddTask from "../AddTask";

export default function Column({
  droppableId,
  name,
  status,
  items,
  setColumns,
}) {
  const [newTask, setNewTask] = useState("");

  const postNewTask = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8001/tasks`, {
        name: newTask,
      });
      if (response.status === 201) {
        const { taskId, name } = response.data.task[0];
        const newTask = {
          id: taskId,
          name: name,
        };
        // prevColumns callback receives the previous columns state
        setColumns((prevColumns) => {
          // make a shallow copy of the previous columns state
          const updatedColumns = [...prevColumns];
          // find the index of the column where the task should be added
          const columnIndex = updatedColumns.findIndex(
            (column) => column.id === droppableId
          );
          updatedColumns[columnIndex] = {
            // once we have the index of the column, update its items array by creating a new array with the existing items using the spread operator
            ...updatedColumns[columnIndex],
            items: [...updatedColumns[columnIndex].items, newTask],
          };
          return updatedColumns;
        });
        setNewTask("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ColumnContainer>
      <ColumnTitle status={status}>
        {name} ({items.length})
      </ColumnTitle>
      <Droppable droppableId={droppableId}>
        {(provided, snapshot) => (
          <ColumnItems
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            <AddTask
              newTask={newTask}
              setNewTask={setNewTask}
              postNewTask={postNewTask}
            />
            {items.map((item, index) => (
              <Tasks
                key={item.id}
                draggableId={item.id}
                index={index}
                item={item}
              />
            ))}
            {provided.placeholder}
          </ColumnItems>
        )}
      </Droppable>
    </ColumnContainer>
  );
}
