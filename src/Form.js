import React, { useState } from 'react'

export default function Form({ addTodo }) {
    let initState = {
        title: '',
        desc: ''
    }
    const [inputData, setInputData] = useState(initState);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputData((prevState) => (
            {
                ...prevState,
                [name]: value,
            }
        ));
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const fullTodo = {
            id: Date.now(),
            ...inputData,
        }
        addTodo(fullTodo);
        clearInputs();
    }

    const clearInputs = () => {
        setInputData(initState);
    }

    const { title, desc } = inputData;

    return (
        <form className="p-4 mb-4 shadow">
            <label htmlFor="title">
                <input
                    onChange={handleChange}
                    type="text"
                    id="title"
                    name='title'
                    value={title}
                    placeholder="Title"
                />
            </label>
            <label htmlFor="desc">
                <input
                    onChange={handleChange}
                    type="text"
                    id="desc"
                    name='desc'
                    value={desc}
                    placeholder="Descreption"
                />
            </label>
            <button onClick={handleSubmit} type="submit">Submit</button>
        </form>
    )
}
