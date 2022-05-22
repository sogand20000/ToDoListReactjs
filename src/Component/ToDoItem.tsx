import React from 'react'
import { TodoModel } from './Interface/TodoModel'

interface props {
  todo: TodoModel
  onRemoveTodo: any
}
export function TodoItem({ todo, onRemoveTodo }: props) {
  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>
        <button onClick={() => onRemoveTodo(todo.id)}>delet</button>
      </td>
    </tr>
  )
}
