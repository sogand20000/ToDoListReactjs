import React, { useState } from 'react'
import './App.css'
import TodoList from './Component/ToDolist'

function App() {
  const [toggel, settoggel] = useState(true)
  return (
    <div className="App">
      <button onClick={() => settoggel(!toggel)}>toggel</button>
      {toggel && <h2>test</h2>}
      <TodoList></TodoList>
    </div>
  )
}

export default App
