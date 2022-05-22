import React, { useState } from 'react'
import { TodoModel } from './Interface/TodoModel'
import { produce } from 'immer'

import { TodoItem } from './ToDoItem'
const todoListInit = [
  { id: 1, title: 'task 1' },
  { id: 2, title: 'task 2' },
  { id: 3, title: 'task 3' },
]
export function TodoList() {
  const removeTodo = (id: number) => {
    settodoList(todoList.filter((x) => x.id != id))
  }
  const addTodo = () => {
    const item = { id: Math.random(), title: NewTodoItem }
    const items = produce(todoList, (todoListnew) => {
      todoListnew.push(item)
    })
    settodoList(items)
  }

  const [NewTodoItem, setNewTodoItem] = useState('')
  const [todoList, settodoList] = useState(todoListInit)
  return (
    <>
      <input
        type="text"
        onChange={(e) => setNewTodoItem(e.target.value)}
      ></input>
      <button onClick={addTodo}>add</button>
      <table>
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
    </>
  )
}
