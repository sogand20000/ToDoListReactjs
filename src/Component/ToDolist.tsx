import React, { useState, memo, useCallback } from 'react'
import { TodoModel } from '../Interface/TodoModel'
import { produce } from 'immer'

import TodoItem from './ToDoItem'
const todoListInit = [
  { id: 1, title: 'task 1' },
  { id: 2, title: 'task 2' },
  { id: 3, title: 'task 3' },
]
function TodoList() {

  const removeTodo = useCallback((id: number) => {
    settodoList(todoList.filter((x) => x.id != id))
  }, [])

  const addTodo = () => {
    const max = todoList.reduce((a, b) => (a > b.id ? a : b.id), -Infinity)
    const item = { id: max + 1, title: NewTodoItem }
    const items = produce(todoList, (todoListnew) => {
      todoListnew.push(item)
    })
    settodoList(items)
    setNewTodoItem('')
  }

  const [NewTodoItem, setNewTodoItem] = useState('')
  const [todoList, settodoList] = useState(todoListInit)
  return (
    <div className="container">
      <input
        value={NewTodoItem}
        type="text"
        onChange={(e) => setNewTodoItem(e.target.value)}
      ></input>
      <button onClick={addTodo}>add</button>
      <table className="table table-striped">
        <thead>
          <tr>
            <td>id</td>
            <td>title</td>
            <td>action</td>
          </tr>
        </thead>
        <tbody>
          {todoList.map((item) => (
            <TodoItem
              key={item.id}
              todo={item}
              onRemoveTodo={removeTodo}
            ></TodoItem>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default memo(TodoList)
