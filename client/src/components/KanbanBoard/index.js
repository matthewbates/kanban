import { useState } from "react";

import { DragDropContext } from "react-beautiful-dnd";

import Column from "../Column";

import data from "../../utils/data";

export default function KanbanBoard() {
  const [initialData, setInitialData] = useState(data);

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;
    // case where the user dropped the task where it started
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }
    const column = initialData.columns[source.droppableId];
    // creates a new taskIds array
    const newTaskIds = Array.from(column.taskIds);
    // move the taskId from its old index to its new index in the array
    // "from this index, we want to remove one item"
    newTaskIds.splice(source.index, 1);
    // remove nothing and insert draggableId
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };
    const newState = {
      ...initialData,
      columns: {
        ...initialData.columns,
        [newColumn.id]: newColumn,
      },
    };
    setInitialData(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {initialData.columnOrder.map((columnId) => {
        // targets the VALUE of columns KEY
        const column = initialData.columns[columnId];
        // targets the VALUE of initialData.tasks KEY
        const tasks = column.taskIds?.map(
          (taskId) => initialData.tasks[taskId]
        );

        return <Column key={columnId} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
}
