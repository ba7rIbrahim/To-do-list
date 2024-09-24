'use client'
// HOOks
import React from 'react'
// State Management
import { useTasksStore } from '@/store/TasksStore'
import { useDialogInfoStore } from '@/store/ShowDialogStore';
import { useThemeStore } from '@/store/Theme';
import { useShowAlertStore, useTitleAlertStore } from '@/store/Alert';
// Icons
import { FaPenToSquare } from "react-icons/fa6"
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import { FaRegTrashAlt } from 'react-icons/fa';
// import DeletedModal from './DeletedModal';


type EditStateType = {
  setEditID: (id: string) => void
}
export default function TasksCall({ setEditID }: EditStateType) {
  const { tasks, checkTask, removeTask } = useTasksStore();
  const { setOpenEditDialog } = useDialogInfoStore()
  const { theme } = useThemeStore();
  const { showAlert } = useShowAlertStore();
  const { alertTitle } = useTitleAlertStore();

  const showAlertBtn = async (t: string) => {
    alertTitle(t)
    await new Promise(resolve => setTimeout(resolve, 100))
    showAlert(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    showAlert(false);
  }

  return (
    <div className='container mt-10 mb-10 overflow-y-auto text-center md:w-2/3 max-h-[400px]'>
      <div className={`${theme === 'dark' ? 'bg-[#f3f4f6]' : 'bg-gray-100/30'} flex flex-col justify-center items-start rounded-md h-full shadow-lg`}>
        {
          tasks.length > 0 && (
            <div className='bg-primary flex justify-between items-center w-full rounded-t-lg px-6 text-xl text-white py-3'>
              <h1>Tasks</h1>
              <h1>Actions</h1>
            </div>
          )
        }
        {
          tasks.map((task) => {
            return (
              <div key={task?.taskID} className={`${theme === 'dark' ? 'border-gray-200' : 'border-gray-100'} ${task?.completed ? 'bg-gray-300' : ''} bg-gray-100 gap-2 px-6 py-3 text-left w-full border-b last:border-b-0 flex justify-between items-start`}>
                <div className='w-3/4'>
                  <h1 className={`${task?.completed ? 'line-through' : ''} font-semibold text-lg text-primary`}>{task?.taskName}</h1>
                  <p className={`${task?.completed ? 'line-through' : ''} text-sm text-gray-500 w-2/3`}>{task?.taskDescription}</p>
                </div>
                <div className='flex gap-3 w-1/4 justify-end'>
                  <div className={`tooltip flex items-center justify-center`} data-tip="completed">
                    <button
                      onClick={() => {
                        checkTask(task?.taskID)
                        showAlertBtn('Mission accomplished')
                      }}
                    >{task?.completed ? <FaCircleCheck className='text-green-500 w-[20px] h-[30px]' /> : <FaRegCircleCheck className='text-green-500 w-[20px] h-[30px]' />}
                    </button>
                  </div>
                  <div className="tooltip h-[30px]" data-tip="edit">
                    <button
                      onClick={() => {
                        setOpenEditDialog(true)
                        setEditID(task.taskID)
                      }}
                      className='h-full'
                    ><FaPenToSquare className=" text-blue-600 hover:text-blue-500 h-full rounded-full text-xl" />
                    </button>
                  </div>
                  <div className="tooltip" data-tip="remove">
                    <div>
                      <label htmlFor={`modal_${task?.taskID}`} className="cursor-pointer">
                        <FaRegTrashAlt className=" text-red-500 hover:text-red-400 h-[30px] rounded-full text-xl" />
                      </label>
                      {/* Put this part before </body> tag */}
                      <input type="checkbox" id={`modal_${task?.taskID}`} className="modal-toggle" />
                      <div className="modal" role="dialog">
                        <div className="modal-box">
                          <h3 className="text-lg font-bold">Are you sure ?</h3>
                          <p className="py-4">Do you really want to delete the task!</p>
                          <div className='flex justify-end mt-4 gap-3'>
                            <label htmlFor={`modal_${task.taskID}`} className="cursor-pointer inline-flex justify-center w-full px-4 py-2 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:w-auto sm:text-sm transition-all duration-300 ease-in-out transform hover:scale-105">
                              Cancel
                            </label>
                            <button
                              type="submit"
                              className={`inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-500 rounded-md shadow-sm hover:from-bg-hover hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 sm:ml-3 sm:w-auto sm:text-sm transition-all duration-300 ease-in-out`}
                              onClick={async () => {
                                removeTask(task?.taskID)
                                showAlertBtn('The task has been deleted')
                              }}
                            >Delete</button>
                          </div>
                        </div>
                        <label className="modal-backdrop" htmlFor={`modal_${task.taskID}`}>Close</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}