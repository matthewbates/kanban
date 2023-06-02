import React, { useState, useEffect } from "react";

import { DragDropContext } from "react-beautiful-dnd";
import axios from "axios";

import { Container } from "./KanbanBoardElements";

import Column from "../Column";

import { taskStatus } from "../../utils/data";

export default function KanbanBoard() {
  const [columns, setColumns] = useState(taskStatus);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:8001/tasks");
        if (response.status === 200) {
          console.log(response);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchTasks();
  }, []);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    // "new", "inProgress", "completed", "onHold", "cancelled"
    const sourceColumnId = source.droppableId;
    const destinationColumnId = destination.droppableId;

    console.log(sourceColumnId, destinationColumnId);

    // finds the indices of the source/destination columns
    const sourceColumnIndex = columns.findIndex(
      (column) => column.id === sourceColumnId
    );
    const destinationColumnIndex = columns.findIndex(
      (column) => column.id === destinationColumnId
    );

    console.log(sourceColumnIndex, destinationColumnIndex);

    const sourceColumn = columns[sourceColumnIndex];
    const destinationColumn = columns[destinationColumnIndex];

    // if the source/destination columns are the same...
    if (sourceColumn === destinationColumn) {
      const newItems = [...sourceColumn.items];
      // ...move the task within the same column using splice
      const [removed] = newItems.splice(source.index, 1);
      newItems.splice(destination.index, 0, removed);

      const newColumns = [...columns];
      newColumns[sourceColumnIndex] = {
        ...sourceColumn,
        items: newItems,
      };

      setColumns(newColumns);
    } else {
      // ...if the source and destination columns are different
      const newSourceItems = sourceColumn.items.filter(
        (_, index) => index !== source.index
      );
      // ...move the task to the new column
      const newDestinationItems = [...destinationColumn.items];
      newDestinationItems.splice(
        destination.index,
        0,
        sourceColumn.items[source.index]
      );

      const newColumns = [...columns];
      newColumns[sourceColumnIndex] = {
        ...sourceColumn,
        items: newSourceItems,
      };
      newColumns[destinationColumnIndex] = {
        ...destinationColumn,
        items: newDestinationItems,
      };

      setColumns(newColumns);
    }
  };

  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        {columns.map(({ id, name, status, items }, index) => (
          <Column
            key={id}
            droppableId={id}
            name={name}
            status={status}
            items={items}
            setColumns={setColumns}
          />
        ))}
      </DragDropContext>
    </Container>
  );
}
