import React from 'react'
import { useState } from 'react';


const Todolist = () => {
    const [todo, setTodo] = useState({
        todo: "",
        completed: false
    });
    const [multipleTodos, setMultipleTodos] = useState([]);

    const createTodo = (e) => {
        e.preventDefault();

    const newToDo = {
        ...todo
    }

        setMultipleTodos([...multipleTodos, newToDo]);
        setTodo({
            ...todo,todo:""
        });
    }
    const deleteTodo = (idx) => {
        setMultipleTodos(multipleTodos.filter((todo, index) => index !== idx));
    }

    const changeTodo = (idx) => {
        setMultipleTodos(multipleTodos.map((todo, index) => {
            if (index === idx) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo;
        }))
    }


    return (
        <div>
            <form className="flex items-center gap-12 p-8 justify-center" onSubmit={createTodo}>
                <div>
                    <label className="text-2xl font-bold " htmlFor="todo">Todo: </label>
                    <input className='text-lg px-4 shadow-md w-80 h-14 bg-slate-50 rounded-md border-solid border-2 border-indigo-100' type="text" name="todo" value={todo.todo} onChange={(e) => setTodo({...todo,todo:e.target.value})} />
                </div>
                <input type="submit" value="Add" className="p-5 rounded-lg bg-stone-200 shadow-md"/>
            </form>
            <div>
                {multipleTodos.map((todo, index) =>
                    <div className='flex items-center gap-12 p-8 justify-center displayflex'
                    style={
                        todo.completed ? {textDecoration:"line-through"} : null
                    }
                    >
                        <p key={index}>{todo.todo}</p>
                        <button className="bg-black text-lg text-white rounded-lg p-6 "onClick={(e) => deleteTodo(index)}>Delete</button>
                        <input type="checkbox" checked={todo.isCompleted} onChange={()=> changeTodo(index)} />
                    </div>
                )}
            </div>

        </div>
    )
}

export default Todolist;