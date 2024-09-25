'use client'
// COMPONENTS
import Navbar from './_components/Navbar'
import Breadcrumb from './_components/Breadcrumb'
import AddTask from './_components/TasksActions'
import TasksCall from './_components/TasksCall'
import { useState } from 'react'
import Alert from './_components/Alert'
import TaskClassification from './_components/TaskClassification'
import { useTasksStore } from '@/store/TasksStore'
import { Task } from '@/store/TasksStore'
export default function MainTasksPage() {
  const { tasks } = useTasksStore();
  const [editID, setEditID] = useState<string>('')
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);
  return (
    <div>
      <Navbar />
      <div className='container mb-20'>
        <Breadcrumb />
        <AddTask editID={editID} />
        <TaskClassification setFilteredTasks={setFilteredTasks}/>
        <TasksCall filteredTasks={filteredTasks} setEditID={setEditID} />
      </div>
      <Alert />
    </div>
  )
}
