import { useState } from "react"

export default function Todo( {item, onUpdate, onDelete} ){
  const [isEdit, setIsEdit] = useState(false);
  function FormEdit(){

    const [newValue, setNewValue] = useState(item.title)
    function handleSubmit(e){
      e.preventDefault();
      
    }

    function handleChange(e){
      const value = e.target.value
      setNewValue(value);

    }

    function handleClickUpdateTodo(){
      onUpdate(item.id , newValue);
      setIsEdit(false);
    }
    return(
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input type="text" className="todoInput" onChange={handleChange} value={newValue}/>
        <button className="button" onClick={handleClickUpdateTodo}>update</button>  
      </form>
    )
  }




  function TodoElementos(){
    return(
      <div className="todoInfo">
        {isEdit? (
          <div>modo editar</div>
        ) :(
          <div> {item.title} 
            <button 
              onClick={()=> setIsEdit(true)}>Edit
            </button>
            <button onClick={(e)=> onDelete(item.id)}>
              Delete
            </button>
          </div>
        )
      }
      </div>

    )
  }
  return( 
    <>
      <div className="todo">
        {isEdit ? <FormEdit/> : <TodoElementos/> }
      </div>
    </>

  )
};