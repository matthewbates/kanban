import React from "react";

export default function AddTask({ newTask, setNewTask, postNewTask }) {
  return (
    <form onSubmit={postNewTask}>
      <input
        onChange={(e) => setNewTask(e.target.value)}
        type="text"
        value={newTask}
      />
      <button type="submit">Add</button>
    </form>
  );
}
