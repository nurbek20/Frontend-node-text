import React, { useEffect } from "react";
import { useState } from "react";
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";
// import TodoList from "./TodoList/TodoList";





const Home = () =>{

    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])
    const [val, setVal] = useState('')

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const btnAdd = (inpVal) =>{
        if(inpVal) {
            const newItem = {
                id: Math.random().toString(36).slice(3.9),
                text: inpVal,
                complete: false,
                change: false
            }
            setTodos([...todos, newItem])
            console.log(todos)
        }
    }

    const btnDel = (id) => {
    setTodos([
        ...todos.filter((item) => item.id !== id)
    ])
    }

    const btnToggle = (id) => {
        setTodos([
            ...todos.map((item) => item.id === id ? {...item, complete: !item.complete} : {...item
            })
        ])
    }

    const btnChange = (id) => {
        setTodos([
            ...todos.map((item) => item.id === id ? {...item, change: true} : {...item})
        ])
    }

    const btnAfterChange = (id,val) => {
        setTodos([
            ...todos.map((item) => {
                return(
                    item.id === id ? {...item, change: false, text: val} : {...item}
                )
            })
        ])
    }

    return(
        <>
        <h1>
            Number of Todos {todos.length}
        </h1>
        <TodoForm
        todos={todos}
        setTodos={setTodos}
        btnAdd={btnAdd}
        val={val}
        setVal={setVal}
        />
        {todos.map((item) =>{
            return(
        <TodoList
        item={item}
        // todos={todos}
        // setTodos={setTodos}
        btnDel={btnDel}
        btnToggle={btnToggle}
        btnChange={btnChange}
        btnAfterChange={btnAfterChange}
        />
            )
        })}
        
        </>
        
    )
}

export default Home;