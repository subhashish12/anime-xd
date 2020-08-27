import React from 'react';
import './sign-in.styles.scss';

import {auth, signInWithGoogle } from '../../firebase/firebase.utils';


import FormInput from "../form-input/form-input.component";
import CustomButtom from '../custom-button/custom-button.component';



class SignIn extends React.Component{
  constructor(props){
    super(props);

    this.state ={
      email: '',
      password: ''
    }
  }

  handleSubmit = async(event)=>{
    console.log('sd')
    event.preventDefault();
    const { email, password} = this.state;
    try{
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email: '', password: ''})
    }catch(err){
      console.log(err)
    }

  }

  handleChange = (event)=>{
    const { value, name} = event.target;
    this.setState({ [name] : value });    
  }

  render(){
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange} 
            name="email" type="email" 
            value={this.state.email} 
            label="email"
             />
          <FormInput 
            handleChange={this.handleChange} 
            name="password" 
            type="password" 
            value={this.state.password}
            label="password" 
             />

          <div className="buttons">
          <CustomButtom type="submit" >
            Sign In
          </CustomButtom>
          <CustomButtom onClick={signInWithGoogle} isGoogleSignIn >
            Sign In With Google
          </CustomButtom>
          </div>

        </form>
      </div>
    )
  }
}

export default SignIn;