// this component represents a single, draggable task
import { Draggable } from "react-beautiful-dnd";

import { TaskContainer } from "./TaskElements";

export default function Tasks({ draggableId, item, index }) {
  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided) => (
        <TaskContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {item.name}
        </TaskContainer>
      )}
    </Draggable>
  );
}
