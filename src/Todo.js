import React, { useState, useReducer } from 'react';
import Form from './Form';
import TodoItem from './TodoItem';

const ACTION = {
    ADD_TODO: 'add-todo',
    REMOVE_TODO: 'remove-todo',
    SET_TODO: 'set-todo',
}


export default function Todo() {
    const [todo, setTodo] = useState([]);
    // const [todo, dispatch] = useReducer(reducer, []);

    const addTodo = (newt) => {
        setTodo([...todo, newt]);
    }

    const removeTodo = (todoItem) => {
        const newTodo = todo.filter((item) => {
            return item.id !== todoItem
        });
        setTodo(newTodo);
    }

    return (
        <div>
            <h1>Share You Ideas With Us!</h1>
            <Form addTodo={addTodo} />
            <section>
                <div className="container">
                    <div className="row">
                        {
                            todo.map((item) => {
                                return <TodoItem
                                    key={item.id}
                                    todos={item}
                                    removeTodo={removeTodo}
                                />
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}
