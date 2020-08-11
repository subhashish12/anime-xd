import React from 'react';
import './App.css';
import  HomePage  from './pages/homepage/homepage.component.jsx';
import './pages/homepage/homepage.styles.scss';
import {Switch, Route } from 'react-router-dom';

const Adventure = ()=>(
  <h1>Hello adventure</h1>
)


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route  path='/adventure' component={Adventure}></Route>
      </Switch>
    </div>


    // <div className="App">
    //   <HomePage />
    // </div>
  );
}

export default App;
