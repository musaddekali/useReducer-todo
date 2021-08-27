import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Profile from './component/Profile';
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>

      <Navbar />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/users'>
          <Users />
        </Route>
        <Route path="/blog">
          <BlogPost />
        </Route>

        <Route path="/profile">
        <Profile/>
        </Route>

        <Route>
          <Error />
        </Route>
      </Switch>

    </Router>
  )
}

function Home() {
  return (
    <h1>Home</h1>
  )
}
function About() {
  const { ab } = useParams();
  return (
    <h1>About and sub page {ab}</h1>
  )
}

function Users() {
  let history = useHistory();
  //go to home page
  function handleHistory() {
    history.push('/');
  }
  return (
    <>
      <h1>Users</h1>
      <button onClick={handleHistory} className="btn btn-primary shadow-none">Go to home</button>
    </>
  )
}

function Error() {
 
  return (
    <h1>Sorry! This Page Not Found . Error 404 </h1>
  )
}

function BlogPost() {
  let { id } = useParams();
  return <h1>Now showing post {id}</h1>;
}
