import React, { useState, useEffect } from "react"
import TodoListItem from './TodoListItem'

export default function TodoList({ user, list }) {
    const [todosList, setTodosList] = useState([])

    useEffect(() => {
        // Fetch todos from firebase
        fetchTodos()
    }, [])
  
    const fetchTodos = () => {
        console.log("fetching")
        setTodosList(["Todo 1", "Todo 2"])
    }

    const addTodo = () => {
        const temp = todosList.concat("")
        setTodosList(temp)
    }

    if (!user) {
        return <div>Loading...</div>
    }

    return (
        <div className="flex flex-col pl-20 items-left justify-top h-full w-full bg-blue-900">
            <span className="text-white text-2xl pb-5">{list}</span>
            { todosList && todosList.map((todo) => (
                <TodoListItem todo={todo} key={todo} />
            ))
            }
            <span className="mt-2">
                <button className="text-white bg-black py-1 px-2 rounded-lg" onClick={addTodo}>Add Todo</button>  
            </span>
        </div>
    )
}