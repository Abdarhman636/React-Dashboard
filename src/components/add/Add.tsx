import React from 'react'
import './add.scss'

const Add = (props) => {

     const handelSubmit = (e) => {
          e.preventDefault();
          
          // add new user function
     }
  return (
     <div className="add">
     <div className="modal">
       <span className="close" onClick={() => props.setOpen(false)}>
         X
       </span>
       <h1>Add new {props.slug}</h1>
   <form onClick={handelSubmit}>
          {props.columns.filter((item => item.field !== "id")).map((column) => (
                         <div className="item" key={column.field}>
                             <label>{column.headerName}</label>
                             <input type={column.type} placeholder={column.field} />
                           </div>
          ))}
         <button>Send</button>
       </form>
     </div>
   </div>
  )
}

export default Add