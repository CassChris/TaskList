import React, { useState } from 'react'
import FormEdit from './FormEdit';
import TodoElement from './TodoElement';

export const Todo = ({item, onUpdate, onDelete}) => {

    const [isEdit, setIsEdit] = useState(false);

    // const EditState = () => {
    //     setIsEdit(true)
    // }
    
    
  return (
    <>

    {   
        isEdit 
            ? <FormEdit item={item} setIsEdit={setIsEdit} onUpdate={onUpdate} />
            : <TodoElement item={item} setIsEdit={setIsEdit} onDelete={onDelete}/>
    }
        
    </>
    )
}
