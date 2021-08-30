import React, { useState, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from './Card';
import { todoReducer, initialTodo, ACTION } from './TodoReducer';

export default function App() {
  const [todo, dispatch] = useReducer(todoReducer, initialTodo);

  return (
    <main>
      <h1 className="text-center">Add Your Client Details.</h1>
      <div className="container p-4 mb-3 shadow">
        <Form dispatch={dispatch} />
      </div>
      <section className='todo'>
        <div className="container todo-container">
          {todo.map((item) => {
            return <Card
              key={item.id}
              todo={item}
              dispatch={dispatch}
            />
          })}
        </div>
      </section>
    </main>
  )
};

//INPUT_FORM_FOR_TODO_LIST
const Form = ({ dispatch }) => {
  const initialState = { name: '', job: '' };
  const [inputData, setInputData] = useState({ name: '', job: '' });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputData(prevInputData => ({
      ...prevInputData,
      [name]: value,
    }));
  };

  function submitForm(e) {
    e.preventDefault();
    const newItem = {
      ...inputData,
      id: Date.now()
    }
    dispatch({
      type: ACTION.ADD_TODO,
      data: newItem,
    })
    clearInput();
  }

  function clearInput() {
    setInputData(initialState);
  }

  return (
    <form className="" action="#">
      <label className="form-group d-block mb-3" htmlFor="name">
        <input
          type="text"
          className="form-control shadow-none"
          id="name"
          name='name'
          value={inputData.name}
          onChange={handleChange}
          placeholder='name'
        />
      </label>
      <label className="form-group d-block mb-3" htmlFor="job">
        <input
          type="text"
          className="form-control shadow-none"
          id="job"
          name='job'
          value={inputData.job}
          onChange={handleChange}
          placeholder='job'
        />
      </label>

      <button
        onClick={submitForm}
        className="btn btn-outline-primary shadow-none"
        type="submit">
        Submit
      </button>

    </form>
  )
}