import React from 'react';
import { BiTrash } from 'react-icons/bi';

export default function TodoItem({ todos, removeTodo }) {
    const { id, title, desc } = todos;
    return (
        <div className="col-md-3 col-sm-4 col-6 d-flex align-items-stretch">
            <div className="todo-item p-2 card rounded">
                <h4>{title}</h4>
                <p>{desc}</p>
                <button onClick={() => removeTodo(id)} className="btn btn-danger btn-sm"><BiTrash/></button>
            </div>
        </div>
    )
}
