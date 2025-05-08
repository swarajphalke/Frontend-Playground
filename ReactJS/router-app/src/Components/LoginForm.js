import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",

    },
    onSubmit: (values) => {
      if (values.email && values.password) {

        navigate("/home");
      }
    },
    validate: (values) => {
      let errors = {};

      if (!values.email) {

        errors.email = "Email is required";

      } else if (!/\S+@\S+\.\S+/.test(values.email)) {

        errors.email = "Invalid email format";
      }
   
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 6) {
      errors.password = 
      
        "Password must be at least 6 characters";
      }
      return errors;
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{
        width: "35%",
        border: "2px solid blue",
        margin: "30px auto",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <h2>Login Form</h2>

      <div>
        <label>Email :  </label>
        <input
          name="email"
          type="text"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter your email"
         
        />
        {formik.touched.email && formik.errors.email ? (
      <div style={{ color: "red", marginBottom: "10px" }}>
            {formik.errors.email}
          </div>
        ) : null}
      </div>
      <br />
      <div>
        <label>Password : </label>
        <input
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter your password"
         />
    {formik.touched.password && formik.errors.password ? (
      <div style={{ color: "red", marginBottom: "10px" }}>
            {formik.errors.password}
          </div>
        ) : null}
      </div>
      <br />
      <div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
}