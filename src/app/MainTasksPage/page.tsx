'use client'
// COMPONENTS
import Navbar from './_components/Navbar'
import Breadcrumb from './_components/Breadcrumb'
import AddTask from './_components/TasksActions'
import TasksCall from './_components/TasksCall'
import { useState } from 'react'
import Alert from './_components/Alert'

export default function MainTasksPage() {
  const [editID, setEditID] = useState<string>('')
  return (
    <div>
      <Navbar />
      <div className='container mb-20'>
        <Breadcrumb />
        <AddTask editID={editID} />
        <TasksCall setEditID={setEditID}/>
      </div>
      <Alert />
    </div>
  )
}
