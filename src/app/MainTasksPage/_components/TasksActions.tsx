'use client'
import React from 'react'
import { Plus } from 'lucide-react'
import { useDialogInfoStore } from '@/store/ShowDialogStore';
import AddNewTask from './AddNewTask';
import EditTask from './EditTask';

type AddTaskType =  {
  editID: string
}
export default function TasksActions({ editID }: AddTaskType) {
  const { setIsOpen } = useDialogInfoStore();
  const openDialog = () => setIsOpen(true)
  return (
    <div className='mt-10 text-center container'>
      <div className="flex items-center justify-center">
        <button
          onClick={openDialog}
          className="w-full md:w-2/3 px-6 py-3 text-white font-semibold bg-gradient-to-r from-primary to-teal-300 rounded-lg hover:from-bg-hover hover:to-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center space-x-2 shadow-lg"
        >
          <Plus className="w-5 h-5" />
          <span>Add New Task</span>
        </button>
      <AddNewTask />
      <EditTask editID={editID}/>

      </div>
    </div>
  )
}
