const TodoElement = ({item, setIsEdit, onDelete}) =>{
    return (
        <div className='d-flex justify-content-between p-2'>
        <div className='col-4 col-md-7 bg-white rounded'>
        {item.title}
        </div>
        <button 
            className='btn btn-warning col-3 col-md-2'
            onClick={() => setIsEdit(true)}>
            Edit
        </button>
        <button 
            className='btn btn-danger col-3 col-md-2'
            onClick={e => onDelete(item.id)}>
            Delete
        </button>
        
    </div>
    )
}

export default TodoElement;