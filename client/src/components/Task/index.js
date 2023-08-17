import { Draggable } from "react-beautiful-dnd";

import { TaskContainer } from "./TaskElements";

export default function Task({ task, index }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <TaskContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {task.content}
        </TaskContainer>
      )}
    </Draggable>
  );
}
