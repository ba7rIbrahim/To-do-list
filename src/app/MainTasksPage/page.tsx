'use client'
// HOOKS
import { useState } from 'react'
import { useTasksStore, Task } from '@/store/TasksStore'
// COMPONENTS
import Navbar from './_components/Navbar'
import Breadcrumb from './_components/Breadcrumb'
import TasksCall from './_components/TasksCall'
import Alert from './_components/Alert'
import TaskClassification from './_components/TaskClassification'
import TasksActions from './_components/TasksActions'

export default function MainTasksPage() {
  const { tasks } = useTasksStore();
  const [editID, setEditID] = useState<string>('')
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);

  return (
    <div>
      <Navbar />
      <div className='container mb-20'>
        <Breadcrumb />
        <TasksActions editID={editID} />
        <TaskClassification setFilteredTasks={setFilteredTasks}/>
        <TasksCall filteredTasks={filteredTasks} setEditID={setEditID} />
      </div>
      <Alert />
    </div>
  )
}
