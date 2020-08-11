import React from 'react';
import './App.css';
import  HomePage  from './pages/homepage/homepage.component.jsx';
import './pages/homepage/homepage.styles.scss';
import {Switch, Route } from 'react-router-dom';
import  ShopPage  from './pages/shop/shop.component.jsx';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route  path='/shop' component={ShopPage}></Route>
      </Switch>
    </div>


    // <div className="App">
    //   <HomePage />
    // </div>
  );
}

export default App;
