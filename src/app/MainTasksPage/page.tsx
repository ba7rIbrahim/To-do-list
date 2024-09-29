'use client'
// HOOKS
import { useState } from 'react'
import { useTasksStore, Task } from '@/store/TasksStore'
// COMPONENTS
import Navbar from './_components/Navbar'
import Breadcrumb from './_components/Breadcrumb'
import Alert from './_components/Alert'
import TaskClassification from './_components/TaskClassification'
import TasksCall from './_components/TasksCall'

export default function MainTasksPage() {
  const { tasks } = useTasksStore();
  const [editID, setEditID] = useState<string>('')
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);

  return (
    <div>
      <Navbar />
      <div className='container mb-20'>
        <Breadcrumb />
        <TaskClassification setFilteredTasks={setFilteredTasks} />
        <div className='mt-10 flex '>
          <TasksCall editID={editID} filteredTasks={filteredTasks} setEditID={setEditID} />
        </div>
      </div>
      <Alert />
    </div>
  )
}
