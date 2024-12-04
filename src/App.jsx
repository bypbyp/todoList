import InputBar from './components/InputBar'
import './App.css'
import TodoList from './components/TodoList'
import React from 'react'
import useData from './hooks/useData'

function App() {
  const { tasks, addTask, removeTask, moveUp, moveDown} = useData();

  return (
      <div className='Container'>
        <h1>To Do List</h1>
        <InputBar addTask={addTask} />
        <TodoList tasks={tasks} removeTask={removeTask} moveUp={moveUp} moveDown={moveDown} />
        
      </div>
  )
}

export default App

