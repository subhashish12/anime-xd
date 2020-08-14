import React from 'react';
import './App.css';
import  HomePage  from './pages/homepage/homepage.component';
import './pages/homepage/homepage.styles.scss';
import {Switch, Route } from 'react-router-dom';
import  ShopPage  from './pages/shop/shop.component';
import Header from './Components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-on-and-sign-up.component'
import { auth } from './firebase/firebase.utils';

class  App extends React.Component{
  constructor(){
    super();

    this.state = {
      currentuser: null
    }
  }

  unsubscribeAuth = null;
  componentDidMount(){
    this.unsubscribeAuth = auth.onAuthStateChanged(user=>{
      this.setState({ currentuser: user });
      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentuser} />
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route  path='/shop' component={ShopPage}></Route>
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
