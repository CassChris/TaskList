import { useState } from "react";

const FormEdit = ({item, setIsEdit, onUpdate}) =>{

    const [newValue, setNewValue] = useState(item.title);
    function handleSubmit(e) {
        
        e.preventDefault();
    }

    function handleChange(e) {
        const value = e.target.value;
        setNewValue(value);
    }

    function handleClickUpdateTodo(e) {
        onUpdate(item.id, newValue);
        setIsEdit(false);
    }
    return (
        <form 
            className="d-flex justify-content-between p-2"
            onSubmit={handleSubmit}>
                <input
                type="text"
                className='col-8 col-md-8 bg-white rounded'
                onChange={handleChange}
                value={newValue}
                />
                <button
                type="button"
                className='btn btn-success col-4 col-md-2'
                onClick={handleClickUpdateTodo}>
                Update
                </button>
        </form>
    )
}

export default FormEdit;