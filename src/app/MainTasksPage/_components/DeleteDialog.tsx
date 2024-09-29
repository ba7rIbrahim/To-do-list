'use client'
import { useTasksStore } from '@/store/TasksStore';

type DeleteDialogType = {
  taskID: string,
  showAlertBtn: (text: string) => void
}
export default function DeleteDialog({ taskID, showAlertBtn }: DeleteDialogType) {
  const { removeTask } = useTasksStore();
  
  return (
    <div>
      <input type="checkbox" id={`modal_${taskID}`} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Are you sure ?</h3>
          <p className="py-4">Do you really want to delete the task!</p>
          <div className='flex justify-end mt-4 gap-3'>
            <label htmlFor={`modal_${taskID}`} className="cursor-pointer inline-flex justify-center w-full px-4 py-2 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:w-auto sm:text-sm transition-all duration-300 ease-in-out transform hover:scale-105">
              Cancel
            </label>
            <button
              type="submit"
              className={`inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-500 rounded-md shadow-sm hover:from-bg-hover hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 md:ml-0 sm:w-auto sm:text-sm transition-all duration-300 ease-in-out`}
              onClick={async () => {
                removeTask(taskID)
                showAlertBtn
              }}
            >Delete</button>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor={`modal_${taskID}`}>Close</label>
      </div>
    </div>
  )
}
