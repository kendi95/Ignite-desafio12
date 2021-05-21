import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty

    if (!newTaskTitle) {
      return;
    }

    const task: Task = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }

    setTasks((oldTasks: Task[]) => [...oldTasks, task]);
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    setTasks((oldTasks: Task[]) => {
      const taskIndex = oldTasks.findIndex(findedTask => findedTask.id === id);

      if (taskIndex < 0) {
        return oldTasks;
      }

      oldTasks[taskIndex].done = !oldTasks[taskIndex].done;

      return [...oldTasks];
    });
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks(oldTasks => {
      const filteredTasks = oldTasks.filter(findedTask => findedTask.id !== id);
      return [...filteredTasks];
    });
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}