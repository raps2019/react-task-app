import React from 'react'

function Overview(props) {
  const {tasks , handleDelete, handleEdit } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.id} id={task.id}>
          {task.name} , {task.id}
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
          </li>
          )
      })}
    </ul>
  )
}

export default Overview;
