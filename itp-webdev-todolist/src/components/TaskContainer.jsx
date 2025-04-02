import React, { useState, useEffect } from "react";
import "../styles/TaskContainerStyle.css";
import Header from "./Header.jsx";

function TaskContainer() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const addTask = () => {
    const newTask = { id: Date.now(), title: "", content: "" };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
  };

  const clearTask = () => {
    setTasks([]);
    localStorage.removeItem("tasks");
  };

  const updateTask = (id, field, value) => {
    setTasks((prevTasks) =>
      prevTasks.map(task =>
        task.id === id ? { ...task, [field]: value } : task
      )
    );
  };

  return (
    <>
      <Header command={clearTask} />
      <div className="task-container">
        <button className="add-item" onClick={addTask}>ADD ITEM</button>
        <div className="tasks" id="tasks">
          {tasks.map((task) => (
            <div key={task.id} className="task-item">
              <input
                type="text"
                placeholder="Title"
                value={task.title}
                onChange={(e) => updateTask(task.id, "title", e.target.value)}
              />
              <textarea
                placeholder="Content"
                value={task.content}
                onChange={(e) => updateTask(task.id, "content", e.target.value)}
              />
              <button onClick={() => removeTask(task.id)}>REMOVE</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TaskContainer;
