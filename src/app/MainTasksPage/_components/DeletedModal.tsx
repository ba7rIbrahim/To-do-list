import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa';

export default function DeletedModal() {
  return (
    <div>
      <label htmlFor="my_modal_7" className="cursor-pointer">
        <FaRegTrashAlt className=" text-red-500 hover:text-red-400 h-[30px] rounded-full text-xl" />
      </label>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Are you sure ?</h3>
          <p className="py-4">Do you really want to delete the task!</p>
          <div className='flex justify-end mt-4'>
            <label htmlFor='my_modal_7' className="cursor-pointer inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:w-auto sm:text-sm transition-all duration-300 ease-in-out transform hover:scale-105">
              Cancel
            </label>
            <button
              type="submit"
              className={`inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-500 rounded-md shadow-sm hover:from-bg-hover hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 sm:ml-3 sm:w-auto sm:text-sm transition-all duration-300 ease-in-out`}
              onClick={() => {
              }}
            >Delete</button>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
      </div>
    </div>
  )
}
