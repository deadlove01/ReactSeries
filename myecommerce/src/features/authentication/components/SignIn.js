import React, { useState } from "react";
import { FormInput } from "../../../components/forms";
import { CustomButton as NewButton } from "../../../components/ui";

import "../assets/SignIn.scss"

export const SignIn = () => {

  const [inputValue, setInputValue] = useState({
    email: "",
    password: ""
  })  

  const {email, password} = inputValue;

  const handleSubmit = (e) =>{
    e.preventDefault();

    setInputValue({email: "", password: ""})
    console.log(inputValue);
  }

  const handleChange = (e) =>{
    const {value, name} = e.target;
    setInputValue({...inputValue, [name]: value})
  }


  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <NewButton type="submit"> Sign in </NewButton>
      </form>
    </div>
  );
};

