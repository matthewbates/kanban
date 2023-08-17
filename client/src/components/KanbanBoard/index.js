import { useState, useEffect } from "react";

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
    )
      return;
    const start = initialData.columns[source.droppableId];
    const finish = initialData.columns[destination.droppableId];

    if (start === finish) {
      // creates a new taskIds array
      const newTaskIds = Array.from(start.taskIds);
      // move the taskId from its old index to its new index in the array
      // start at source.index, delete 1
      newTaskIds.splice(source.index, 1);
      // start at destination.index, delete 0, insert draggableId
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      setInitialData({
        ...initialData,
        columns: {
          ...initialData.columns,
          [newColumn.id]: newColumn,
        },
      });
      return;
    }

    // moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };
    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };
    setInitialData({
      ...initialData,
      columns: {
        ...initialData.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    });
  };

  useEffect(() => {
    // Save the initialData to localStorage
    console.log("Saving data to localStorage");
    localStorage.setItem("kanbanData", JSON.stringify(initialData));
  }, [initialData]);

  useEffect(() => {
    // Load the initialData from localStorage
    console.log("Loading data from localStorage");
    const savedData = localStorage.getItem("kanbanData");
    if (savedData) {
      setInitialData(JSON.parse(savedData));
    }
  }, []);

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
