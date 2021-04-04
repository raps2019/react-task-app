// import React from 'react'

// function Overview(props) {
//   const {tasks , handleDelete, handleEdit } = props;

//   return (
//     <ul>
//       {tasks.map((task) => {
//         return (
//           <li key={task.id} id={task.id}>
//           {task.name} , {task.id}
//           <button onClick={handleDelete}>Delete</button>
//           <button onClick={handleEdit}>Edit</button>
//           </li>
//           )
//       })}
//     </ul>
//   )
// }

import React, { Component } from 'react';

class Overview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //Add functionality to draw different components when edit is pressed.
    };
  }

  render() {
    const tasks = this.props.tasks;
    const handleDelete = this.props.handleDelete;
    const handleEdit = this.props.handleEdit;

    //If edit not active
    return (
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id} id={task.id}>
              {task.name} , {task.id}
              <button onClick={handleDelete}>Delete</button>
              <button onClick={handleEdit}>Edit</button>
            </li>
          );
        })}
      </ul>
    );

    //If edit is active
  }
}

export default Overview;
