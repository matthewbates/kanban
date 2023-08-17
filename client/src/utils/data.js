const data = {
  tasks: {
    // taskId
    "task-1": { id: "task-1", content: "This is task 1" },
    "task-2": { id: "task-2", content: "This is task 2" },
    "task-3": { id: "task-3", content: "This is task 3" },
    "task-4": { id: "task-4", content: "This is task 4" },
  },
  columns: {
    // columnId
    "column-1": {
      id: "column-1",
      title: "New",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
      status: "purple",
    },
    "column-2": {
      id: "column-2",
      title: "In Progress",
      taskIds: [],
      status: "blue",
    },
    "column-3": {
      id: "column-3",
      title: "Completed",
      taskIds: [],
      status: "green",
    },
    "column-4": {
      id: "column-4",
      title: "On Hold",
      taskIds: [],
      status: "yellow",
    },
    "column-5": {
      id: "column-5",
      title: "Cancelled",
      taskIds: [],
      status: "red",
    },
  },
  // facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3", "column-4", "column-5"],
};

export default data;
