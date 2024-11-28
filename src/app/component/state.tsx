"use client"
import React from 'react';
import  { useState } from "react";

const State = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1)
    };
    const handleDecrement = () => {
        setCount(count - 1)
    }
  return (
    <div className='flex flex-col justify-center  items-center bg-gray-200 h-60 my-48 mx-80 shadow-2xl'>
        <h1 className='text-5xl'>Counter</h1>
      <h1 className='text-3xl border-2 border-b-slate-600 w-24 h-10 m-3 text-center'>{count}</h1>
      <button className='rounded-full border-black bg-slate-500 p-2 hover:scale-105 cursor-pointer shadow-lg shadow-slate-500/40' onClick={handleIncrement}>Increment</button>
      <button className='rounded-full border-black bg-slate-500 p-2 mt-2 hover:scale-105 cursor-pointer shadow-lg shadow-slate-500/40' onClick={handleDecrement}>Decrement</button>

    </div>
  )
}

export default State;
