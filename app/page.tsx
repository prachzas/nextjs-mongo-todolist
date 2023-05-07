import Image from 'next/image'
"use client"; // this is a client component 👈🏽
import { useState } from 'react'

interface ITodo {
  todo: string
  done: boolean
}

export default function Home() {
  const [todoList, setTodoList] = useState<ITodo[]>([])
  const [todo, setTodo] = useState('')

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-zinc-800">
      <div className='header'>
        <h1 className='text-3xl'>TO DO LIST</h1>
      </div>
      <div className='flex add-todo mt-4 gap-3'>
        <input className='py-2 px-1 rounded md:w-[500px] xl:w-[700px] text-black' type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />
        <button onClick={() => setTodoList(prev => [...prev, { todo, done: false }])} className=' bg-green-400 font-semibold text-white py-2 px-4 border border-green-600 rounded'>ADD</button>
      </div>
      {todoList?.map(item => <div className='mt-3 text-gray-300 flex gap-2 items-center'>
        <input className='w-4 h-4' type="checkbox" />
        <span className='text-lg'>{item?.todo}</span>
        <button className='text-red-600 border border-red-500 px-2 rounded hover:bg-red-300 hover:text-white hover:border-red-300 transition delay-50'>DELETE</button>
      </div>)}
    </main>
  )
}
