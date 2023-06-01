import React, { useState } from "react";

import { DragDropContext } from "react-beautiful-dnd";

import { Container } from "./KanbanBoardElements";

import Column from "../Column";

import { taskStatus } from "../../utils/data";

export default function KanbanBoard() {
  const [columns, setColumns] = useState(taskStatus);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    console.log(source, destination);

    // checks if the item was dropped within the same droppable container
    if (source.droppableId !== destination.droppableId) {
      // retrieves the source and destination columns from the columns state
      const sourceColumn = columns[source.droppableId];
      const destinationColumn = columns[destination.droppableId];
      // creates copies of the source and destination "items" arrays
      const sourceItems = [...sourceColumn.items];
      const destinationItems = [...destinationColumn.items];
      // removes the dragged items from the source array and inserts it at the appropriate index of the destination array
      const [removed] = sourceItems.splice(source.index, 1);
      destinationItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destinationColumn,
          items: destinationItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <Column key={columnId} droppableId={columnId} column={column} />
          );
        })}
      </DragDropContext>
    </Container>
  );
}
