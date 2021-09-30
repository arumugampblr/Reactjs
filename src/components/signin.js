import React, { useState } from "react";
import "./signup.css";
import { Redirect } from "react-router-dom";
import axios from "axios";


const SingIn = () => {
  const [values, setValues] = useState({
    loginid: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onCloseHandle = () => {
    setIsSubmitting(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const validate = (values) => {
    let errors = {};

    if (!values.loginid.trim()) {
      errors.loginid = "Cannot be empty";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password needs to be 6 characters or more";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errs = await validate(values);
    await setErrors(errs);
    console.log(errs);
    if (Object.keys(errs).length !== 0) {
      return;
    }
    try {
      const res = await axios.post("http://localhost:3001/useremail", {
        loginid:values.loginid
      });
      console.log(res.data);
    } catch (err) {
      console.log(err)
    }
    setIsSubmitting(true);


    console.log(values);
  };

  return (
    <div className="form-container">
      {
        (isSubmitting && <Redirect to="/" />)
      }
      <span className="close-btn" onClick={onCloseHandle}>
        ×
      </span>
      <div className="form-content-right">
        <form onSubmit={handleSubmit} className="form" noValidate>
          <h1>Signin using emailid/mobileno</h1>
          <div className="form-inputs">
            <label className="form-label">Email/Mobile#</label>
            <input
              className="form-input"
              type="text"
              name="loginid"
              placeholder="Enter your Email/Mobile#"
              value={values.loginid}
              onChange={handleChange}
            />
            {errors.loginid && <p>{errors.loginid}</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">Password</label>
            <input
              className="form-input"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <button className="form-input-btn" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingIn;
