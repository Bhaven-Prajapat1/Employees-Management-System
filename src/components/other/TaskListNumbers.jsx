import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex w-full mt-10 gap-5'>
      <div className='w-[25%] px-6 py-9 rounded-xl bg-red-400 '>
        <h2 className='font-semibold text-3xl'>0</h2>
        <h3 className='font-semibold text-xl'>New Task</h3>
      </div>
      <div className='w-[25%] px-6 py-9 rounded-xl bg-blue-400 '>
        <h2 className='font-semibold text-3xl'>0</h2>
        <h3 className='font-semibold text-xl'>New Task</h3>
      </div>
      <div className='w-[25%] px-6 py-9 rounded-xl bg-yellow-400 '>
        <h2 className='font-semibold text-3xl'>0</h2>
        <h3 className='font-semibold text-xl'>New Task</h3>
      </div>
      <div className='w-[25%] px-6 py-9 rounded-xl bg-green-400 '>
        <h2 className='font-semibold text-3xl'>0</h2>
        <h3 className='font-semibold text-xl'>New Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers