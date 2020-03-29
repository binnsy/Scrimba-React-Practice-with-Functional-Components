import React from 'react'

function ToDo(props) {
  return (
<div>
<label className="container">{props.list.text}
  <input type="checkbox" checked={props.list.completed}/>
  <span className="checkmark"></span>
</label>


</div>
  )
}
export default ToDo

// <label className="container">Two
//   <input type="checkbox" />
//   <span className="checkmark"></span>
// </label>
//
// <label className="container">Three
//   <input type="checkbox" />
//   <span className="checkmark"></span>
// </label>
//
// <label className="container">Four
//   <input type="checkbox" />
//   <span className="checkmark"></span>
// </label>
