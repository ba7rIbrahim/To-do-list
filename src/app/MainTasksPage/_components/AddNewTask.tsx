'use client'
// HOOKS
import React from 'react'
// State Management
import { useTasksStore } from '@/store/TasksStore'
import { useDialogInfoStore } from '@/store/ShowDialogStore';
import { useInputsStore } from '@/store/InputStore';
import { useThemeStore } from '@/store/Theme';
import { useShowAlertStore, useTitleAlertStore } from '@/store/Alert';
// ICONS
import { X, Loader2 } from 'lucide-react'

export default function AddNewTask() {
  const { tasks, addTask } = useTasksStore();
  const { taskName, setTaskName, taskDescription, setTaskDescription } = useInputsStore();
  const { isOpen, setIsOpen, isSubmitting, setIsSubmitting } = useDialogInfoStore();
  const { theme } = useThemeStore();
  const { showAlert } = useShowAlertStore();
  const { alertTitle } = useTitleAlertStore();
  const closeDialog = () => setIsOpen(false)

  // Functions 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulating an API call
    await new Promise(resolve => setTimeout(resolve, 400))
    localStorage.setItem('task', JSON.stringify(tasks));
    addTask(taskName, taskDescription)
    setTaskName('')
    setTaskDescription('')
    setIsSubmitting(false)
    closeDialog()
  }

  const showAlertBtn = async (t: string) => {
    await new Promise(resolve => setTimeout(resolve, 500))
    showAlert(true);
    await new Promise(resolve => setTimeout(resolve, 1500))
    showAlert(false);
    if(taskName != '') alertTitle(t)
  }

  return (
    <div>
      {/* Add New Task Dialog  */}
      {isOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75 backdrop-blur-sm" aria-hidden="true" onClick={closeDialog}></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full animate-in fade-in-90 slide-in-from-bottom-10 sm:slide-in-from-bottom-0 duration-300">
              <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="w-full mt-3 text-center sm:mt-0 sm:text-left">
                    <h3 className="text-2xl font-semibold leading-6 text-gray-900 mb-4" id="modal-title">
                      Add New Task
                    </h3>
                    <div className="mt-4">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label htmlFor="taskName" className="block text-left text-sm font-medium text-gray-700 mb-1">
                            Task Name
                          </label>
                          <input
                            type="text"
                            id="taskName"
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}
                            className={`${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'} w-full text-sm px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-colors duration-200`}
                            placeholder="Enter task name"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="taskDescription" className="block text-left text-sm font-medium text-gray-700 mb-1">
                            Task Description
                          </label>
                          <textarea
                            id="taskDescription"
                            value={taskDescription}
                            onChange={(e) => setTaskDescription(e.target.value)}
                            rows={3}
                            className={`${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'} w-full text-sm px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-colors duration-200`}
                            placeholder="Enter task description"
                          />
                        </div>
                        <div className="mt-8 sm:flex sm:flex-row-reverse">
                          <button
                            onClick={() => {
                              showAlertBtn('A new mission has been added')
                            }}
                            type="submit"
                            disabled={isSubmitting}
                            className={`inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-gradient-to-r from-primary to-teal-400/90 border border-transparent rounded-md shadow-sm hover:from-bg-hover hover:to-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:ml-3 sm:w-auto sm:text-sm transition-all duration-300 ease-in-out ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'transform hover:scale-105'}`}
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                Submitting...
                              </>
                            ) : (
                              'Add Task'
                            )}
                          </button>
                          <button
                            type="button"
                            onClick={closeDialog}
                            className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm transition-all duration-300 ease-in-out transform hover:scale-105"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={closeDialog}
                className="absolute top-0 right-0 m-4 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 transition-colors duration-300 ease-in-out"
              >
                <span className="sr-only">Close</span>
                <X className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
