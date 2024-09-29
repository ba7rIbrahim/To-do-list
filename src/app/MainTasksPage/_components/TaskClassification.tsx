'use client'
import { Task, useTasksStore } from '@/store/TasksStore'
import React, { useEffect } from 'react'

type TaskClassificationType = {
  setFilteredTasks: (tasks: Task[]) => void
}
export default function TaskClassification({ setFilteredTasks }: TaskClassificationType) {
  const { tasks, completedTasks, uncompletedTasks } = useTasksStore();
  
  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks])
  
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
    <div className='w-full text-center mt-10 mb-3 lg:text-center'>
      <ul className="menu menu-vertical lg:menu-horizontal flex-row rounded-box w-full md:w-2/3 justify-center bg-[#f2f2f2!important] ">
        <li><button onClick={showAllTasks} className='font-semibold text-primary'>All</button></li>
        <li><button onClick={showCompletedTask} className='font-semibold text-primary'>Completed</button></li>
        <li><button onClick={showUncompletedTask} className='font-semibold text-primary'>Uncompleted</button></li>
      </ul>
    </div>
  )
}
