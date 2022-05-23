import React, { memo, useEffect } from 'react'
import { TodoModel } from '../Interface/TodoModel'

interface props {
  todo: TodoModel
  onRemoveTodo: any
}
function TodoItem({ todo, onRemoveTodo }: props) {
  useEffect(() => {}, [])

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
export default memo(TodoItem)
