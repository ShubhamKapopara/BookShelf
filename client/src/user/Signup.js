// import React, {useState} from 'react';
// import Layout from '../core/Layout';
// import {Link} from 'react-router-dom';
// import {signup} from '../auth';

// const Signup = () => {

//     const [values, setValues] = useState({
//         name: '',
//         email: '',
//         password: '',
//         error: '',
//         success: false
//     });

//     const {name, email, password, success, error} = values;

//     const handleChange = name => e => {
//         setValues({...values, error: false, [name]: e.target.value})
//     };

//         const clickSubmit = (e) => {
//         e.preventDefault();
//         setValues({...values, error: false});
//         signup({name, email, password})
//         .then(data => {
//             if(data.error)
//             {
//                 setValues({...values, error: data.error, success: false})
//             }
//             else
//             {
//                 setValues({...values, name: "", email: "", password: "", error: "", success: true});
//             }
//         })

//     }

//     const signUpForm = () => (
//         <form>
//             <div className="form-group m-3">
//                 <label className="text-muted">Name</label>
//                 <input onChange={handleChange('name')} type="text" className="form-control" value={name}/>

//             </div>

//             <div className="form-group m-3">
//                 <label className="text-muted">Email</label>
//                 <input onChange={handleChange('email')} type="email" className="form-control" value={email}/>

//             </div>

//             <div className="form-group m-3">
//                 <label className="text-muted">Password</label>
//                 <input onChange={handleChange('password')} type="password" className="form-control" value={password}/>
//             </div>

//             <div style={{textAlign : "center"}} >
//                 <button onClick={clickSubmit} className="btn btn-primary">Submit</button>
//             </div>

//         </form>
//     );

//     const showError = () => {
//         return (<div className="alert alert-danger" style={{display: error ? '': 'none'}}>
//             {error}
//         </div>
//         )
//     }

//     const showSuccess = () => {
//         return (
//         <div className="alert alert-info" style={{display: success ? '': 'none'}}>
//             New account is created. Please <Link to='/signin'>Signin</Link>
//         </div>
//         )
//     }

//     return (
//         <Layout title="Signup" description="Sign up to the Node React E-commerce app" className="container col-md-8 offset-md-2">
//             {showError()}
//             {showSuccess()}
//             {signUpForm()}
//         </Layout>

//     )
// };

// export default Signup;

import React, { useState } from "react";
import Layout from "../core/Layout";
import { Link } from "react-router-dom";
import { signup } from "../auth";
// import logo from "../assets/slide-4.jpg";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, success, error } = values;

  const handleChange = (e) => {
    setValues({ ...values, error: false, [e.target.name]: e.target.value });
  };

  const clickSubmit = async (e) => {
    e.preventDefault();
    setValues({ ...values, error: false });
    try {
      const data = await signup({ name, email, password });
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          success: true,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const signUpForm = () => (
    <form className="container max-w-md mx-auto xl:max-w-3xl h-full flex bg-white rounded-lg shadow overflow-hidden justify-between" >
      <div className=" hidden xl:block xl:w-1/2 h-96">
        <img
          className=" h-auto w-full object-cover"
          src="https://images.unsplash.com/photo-1541233349642-6e425fe6190e"
          // src={logo}
          alt="my zomato"
          
        />
      </div>
      <div className="w-full xl:w-1/2 p-8">
        <h1 className=" text-2xl font-bold">Sign Up to your account</h1>

        <div className="mb-6 mt-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2 ">
            Name
          </label>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
            value={name}
            placeholder="Your name "
          />
        </div>
        <div className="mb-6 mt-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Email
          </label>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
            value={email}
            placeholder="Your email address"
          />
        </div>

        <div className="mb-6 mt-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Password
          </label>
          <input
            onChange={handleChange}
            name="password"
            type="password"
            className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
            value={password}
            placeholder="Your password"
          />
        </div>

        <div className="flex w-full mt-8">
          <button
            onClick={clickSubmit}
            className="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
          >
            Register
          </button>
        </div>
        <div className="mt-4 justify-between ">
          <span className="text-gray-600 text-sm mr-1">
            You have already an account?
          </span>
          <span className="text-gray-700 text-sm font-semibold">
            <Link to="/signin">Login!</Link>
          </span>
        </div>
      </div>
    </form>
  );

  const showError = () => {
    return (
      <div className="flex justify-center">
        <div
          className="w-full max-w-3xl bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 text-center "
          style={{ display: error ? "" : "none" }}
        >
          {error}
        </div>
      </div>
    );
  };

  const showSuccess = () => {
    return (
      <div className="flex justify-center">
        <div
          className="w-full max-w-3xl text-center bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative mb-4"
          style={{ display: success ? "" : "none" }}
        >
          New account is created. Please <Link to="/signin">Login!</Link>
        </div>
      </div>
    );
  };

  return (
    <Layout
      title="Signup"
      description="Sign up to the Node React E-commerce app"
      className=""
    >
      {showError()}
      {showSuccess()}
      {signUpForm()}
    </Layout>
  );
};

export default Signup;
