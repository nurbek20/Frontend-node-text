import React from 'react'

const TodoForm = ({
        todos,
        setTodos,
        btnAdd,
        val,
        setVal
}) => {

    const btnForm = () =>{
        btnAdd(val)
        setVal('')
    }

    const btnClear = () =>{
        const conf = window.confirm('Are u sure?')
        if(conf) {
            setTodos([])
            setVal('')
        }
        
    }

    const keyPress = (e) => e.key === 'Enter' ? btnForm(): '';

    return (
    <>
    <div>
    <input 
    type="text"
    placeholder='New Todo...'
    value={val}
    onChange={(e) => setVal(e.target.value)}
    onKeyPress={(e) => keyPress(e)}
    />
    <button onClick={() => btnForm()}>Add</button>
    {
    todos.length > 3?  
    <button onClick={() => btnClear()}>Clear all Todos</button>
    :
    null
    
}
    </div>
    </>
    )
}

export default TodoForm;