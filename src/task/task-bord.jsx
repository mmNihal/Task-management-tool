import { useState } from "react";

import AddTaskModal from "./addTaskModal";
import NoTaskHere from "./noTaskHere";
import Search from "./search";
import TaskAction from "./task-action";
import TaskList from "./taskList";

export default function TaskBrod() {
  // Default task data
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      "Connect an existing API to a third-party database using secure methods and .",
    tags: ["web", "api", "dev"],
    priority: "high",
    isFavorite: true,
  };

  // Use array destructuring for useState
  const [tasks, setTasks] = useState([defaultTask]); // Store as an array
  const [addTaskModal, setAddTaskModal] = useState(false);
  const [editTheModal, seteditTheModal] = useState(null);

  function handleOnTask(newtask, isAdd) {
    console.log("aisdhlsdlfk", newtask);
    if (isAdd) {
      setTasks([...tasks, newtask]);
    } else {
      setTasks(
        tasks.map((e) => {
          if (e.id === newtask.id) {
            return newtask;
          }
          return e;
        })
      );
    }
    setAddTaskModal(false);
  }

  function handelOnClose() {
    seteditTheModal(null);
    setAddTaskModal(false);
  }

  function handelOnEdit(task) {
    seteditTheModal(task);
    setAddTaskModal(true);
  }
  function handelDelate(taskId) {
    console.log("nihal");
    const taskAfterDelate = tasks.filter((task) => task.id !== taskId);
    setTasks(taskAfterDelate);
  }
  function handelOnDelateAll() {
    console.log("nihal");

    tasks.length = 0;

    setTasks([...tasks]);
  }

  function handelOnFev(taskId) {
    const setTaskIndex = tasks.findIndex((task) => task.id === taskId);
    const newTask = [...tasks];
    newTask[setTaskIndex].isFavorite = !newTask[setTaskIndex].isFavorite;
    setTasks(newTask);
  }

  function handelSearch(s) {
    console.log(s);

    const filter = tasks.filter((task) =>
      task.title.toLowerCase().includes(s.toLowerCase())
    );
    setTasks([...filter]);
  }
  return (
    <>
      <section className="mb-20" id="tasks">
        {addTaskModal && (
          <AddTaskModal
            onSave={handleOnTask}
            taskToUpdate={editTheModal}
            closeModal={handelOnClose}
          />
        )}
        <div className="container">
          <Search onSearch={handelSearch} />
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction
              onClickTask={() => setAddTaskModal(true)}
              onDelateClick={handelOnDelateAll}
            />
            {tasks.length > 0 ? (
              <TaskList
                tasks={tasks}
                onEdit={handelOnEdit}
                onDelate={handelDelate}
                fav={handelOnFev}
              />
            ) : (
              <NoTaskHere />
            )}{" "}
            {/* Pass the array */}
          </div>
        </div>
      </section>
    </>
  );
}
