import React, { useState } from "react";
import SignUp from "../components/signup";
import "../components/signup.css";
import { Redirect } from "react-router-dom";
import axios from "axios";

const SignUpForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onCloseHandle = () => {
    setIsSubmitted(true);
  };

  const submitForm = async (values) => {
    console.log(values);
    try {
      const res = await axios.post("http://localhost:3001/create", {
        name: values.username,
        email: values.email,
        mobile: values.mobile,
        password: values.password,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
    setIsSubmitted(true);
  };
  // function submitForm(values) {
  //   console.log("form submitted");
  //   console.log(values);
  //   setIsSubmitted(true);
  // }

  return (
    <>
      {isSubmitted ? (
        <Redirect to="/" />
      ) : (
        <div className="form-container">
          <span className="close-btn" onClick={onCloseHandle}>
            ×
          </span>
          <SignUp submitForm={submitForm} />
        </div>
      )}
    </>
  );
};

export default SignUpForm;
