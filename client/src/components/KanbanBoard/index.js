import { useState } from "react";

import { DragDropContext } from "react-beautiful-dnd";

import Column from "../Column";

import data from "../../utils/data";

export default function KanbanBoard() {
  const [initialData, setInitialData] = useState(data);

  const { columnOrder, columns } = initialData;

  return (
    <DragDropContext>
      {columnOrder.map((columnId) => {
        // targets the key in columns ("column-1") which contains an object
        const column = columns[columnId];
        // targets the key in tasks ("task-1", "task-2", etc.) which contains an object
        const tasks = column.taskIds.map((taskId) => initialData.tasks[taskId]);
        console.log(columnId);

        return <Column key={columnId} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
}
