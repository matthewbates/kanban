export const tasks = [
  {
    id: "task-1",
    name: "Map out component hierarchy and create new React application",
  },
  {
    id: "task-2",
    name: "Install the necessary dependencies",
  },
  {
    id: "task-3",
    name: "Create a data file to store initial data",
  },
  {
    id: "task-4",
    name: "Figure out the logic to map through the data and pass relevant information to child components",
  },
  {
    id: "task-5",
    name: "Implement the logic in the Droppable and Draggable components to display data",
  },
  {
    id: "task-6",
    name: "Figure out How to utilize the onDragEnd function",
  },
  {
    id: "task-7",
    name: "Style the components to a necessary degree",
  },
  {
    id: "task-8",
    name: "Create a a backend folder and implement a Node.js & Express backend",
  },
  {
    id: "task-9",
    name: "Create a POST route to persist a new item on the frontend",
  },
  {
    id: "task-10",
    name: "Create an 'Add Item' Button and connect/implement the logic from the backend to persist a new item",
  },
  {
    id: "task-11",
    name: "Debug issue with React.StrictMode",
  },
  {
    id: "task-12",
    name: "Fix Github issues",
  },
];

// export const columns = {
//   "column-1": {
//     id: "column-1",
//     title: "To do",
//     items: ["task-1", "task-2", "task-3", "task-4"],
//   },
// };

export const taskStatus = {
  new: {
    name: "New",
    status: "purple",
    items: tasks,
  },
  inProgress: {
    name: "In Progress",
    status: "blue",
    items: [],
  },
  completed: {
    name: "Completed",
    status: "green",
    items: [],
  },
  onHold: {
    name: "On Hold",
    status: "yellow",
    items: [],
  },
  cancelled: {
    name: "Cancelled",
    status: "red",
    items: [],
  },
};
