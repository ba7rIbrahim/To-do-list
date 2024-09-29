'use client'
// HOOks
import React from 'react'
// State Management
import { Task, useTasksStore } from '@/store/TasksStore'
import { useDialogInfoStore } from '@/store/ShowDialogStore';
import { useShowAlertStore, useTitleAlertStore } from '@/store/Alert';
// Icons
import { BsThreeDotsVertical } from "react-icons/bs";
// COMPONENTS
import TasksActions from './TasksActions';
import DeleteDialog from './DeleteDialog';

type EditStateType = {
  editID: string
  setEditID: (id: string) => void
  filteredTasks: Task[];
}
export default function TasksCall({ editID, setEditID, filteredTasks }: EditStateType) {
  const { checkTask } = useTasksStore();
  const { setOpenEditDialog } = useDialogInfoStore()
  const { showAlert } = useShowAlertStore();
  const { alertTitle } = useTitleAlertStore();

  const showAlertBtn = async (t: string) => {
    alertTitle(t)
    await new Promise(resolve => setTimeout(resolve, 100))
    showAlert(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    showAlert(false);
  }

  const handleShowTask = () => {
    console.log('handle show task')
  }

  return (
    <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 w-full md:w-auto'>
      <TasksActions editID={editID} />
      {
        filteredTasks?.map((task) => {
          return (
            <div key={task.taskID} onClick={handleShowTask} className={`${task?.completed ? 'bg-gray-300' : 'bg-gray-100'} card shadow min-h-[116px]`}>
              <div className="card-body p-3 w-full h-full">
                <label htmlFor={`DialogInfo_${task?.taskID}`} className='flex-1 h-full cursor-pointer'>
                  <h2 className={`${task?.completed ? 'line-through' : ''} card-title truncate`}>{task.taskName}</h2>
                  <p className={`${task?.completed ? 'line-through' : ''} truncate`}>{task.taskDescription}</p>
                </label>
                <div className="card-actions justify-end ">
                  <div className="dropdown dropdown-end text-right">
                    <div tabIndex={0} role="button" className="font-bold text-xl text-slate-600 rounded-full focus:bg-slate-200 hover:scale-110 px-1 py-0 flex items-center justify-center w-6 h-6"><BsThreeDotsVertical /></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-24 p-2 shadow">
                      <li><button onClick={() => {
                        checkTask(task?.taskID)
                        showAlertBtn('Mission accomplished')
                      }}>{task?.completed ? 'UnFinish' : 'Finish'}</button></li>
                      <li><button onClick={() => {
                        setOpenEditDialog(true)
                        setEditID(task?.taskID)
                      }}>Edit</button></li>
                      <li>
                        <label htmlFor={`modal_${task?.taskID}`} className="cursor-pointer">
                          Delete
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Task Information Dialog */}
              {/* The button to open modal */}


              {/* Put this part before </body> tag */}
              <input type="checkbox" id={`DialogInfo_${task?.taskID}`} className="modal-toggle" />
              <div className="modal" role="dialog">
                <div className="modal-box">
                  <div className='flex gap-3 mb-3'>
                    <span className='font-semibold text-base-400'>Task Name: </span>
                    <h3 className="text-lg font-bold">{task?.taskName}</h3>
                  </div>
                  <div className='flex gap-3'>
                    <span className='font-semibold text-base-400'>Task Dscrp: </span>
                    <p className="">{task?.taskDescription}</p>
                  </div>
                </div>
                <label className="modal-backdrop" htmlFor={`DialogInfo_${task?.taskID}`}>Close</label>
              </div>
              {/* Delete Dialog */}
              <DeleteDialog taskID={task?.taskID} showAlertBtn={() => showAlertBtn('The task has been deleted')} />
            </div>
          )
        })
      }
    </div>
  )
}

