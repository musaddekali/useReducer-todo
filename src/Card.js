import React  from 'react';
import { FaTrash } from 'react-icons/fa';

export default function Card({ todo,dispatch }) {
    const { name, job, id } = todo;
    function removeTodo() {
        dispatch({type: 'remove_todo' , id: id})
    }
    return (
        <div className="todo_item p-3 mb-2 border">
            <h5>Name: {name}</h5>
            <p><strong>Job:</strong><i> {job}</i></p>
            <button onClick={removeTodo} className="btn btn-danger float-end"><FaTrash/></button>
        </div>
    )
}
