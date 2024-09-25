'use client'
import { Task, useTasksStore } from '@/store/TasksStore'
import React from 'react'

type TaskClassificationType = {
  setFilteredTasks: (tasks: Task[]) => void
}
export default function TaskClassification({ setFilteredTasks }: TaskClassificationType) {
  const { tasks, completedTasks, uncompletedTasks } = useTasksStore();

  const showAllTasks = () => {
    setFilteredTasks(tasks);
  }
  const showCompletedTask = () => {
    setFilteredTasks(completedTasks())
  }
  const showUncompletedTask = () => {
    setFilteredTasks(uncompletedTasks());
  }

  return (
    <div className='w-full text-center px-5 mt-10 mb-3'>
      <ul className="menu menu-vertical lg:menu-horizontal flex-row rounded-box w-full md:w-2/3 justify-center bg-[#f2f2f2!important] ">
        <li><button onClick={showAllTasks} className='font-semibold text-primary'>All</button></li>
        <li><button onClick={showCompletedTask} className='font-semibold text-primary'>Completed</button></li>
        <li><button onClick={showUncompletedTask} className='font-semibold text-primary'>Uncompleted</button></li>
      </ul>
    </div>
  )
}
