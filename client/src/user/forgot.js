// import React, { useState } from "react";
// import Layout from "../core/Layout";
// import { Redirect } from "react-router-dom";
// import { Forgot, authenticate, isAuthenticated } from "../auth";
// import { Link } from "react-router-dom";

// const UpdatePassword = () => {
//   const [values, setValues] = useState({
//     email: "",
//     password: "",
//     error: "",
//     loading: false,
//     redirectToReferrer: false,
//   });

//   const { email, password, loading, error, redirectToReferrer } = values;
//   const { user } = isAuthenticated();

//   const handleChange = (e) => {
//     setValues({ ...values, error: false, [e.target.name]: e.target.value });
//   };

//   const clickSubmit = async (e) => {
//     e.preventDefault();
//     setValues({ ...values, error: false, loading: true });
//     try {
//       const data = await Forgot({ email, password });
//       if (data.err) {
//         setValues({ ...values, error: data.err, loading: false });
//       } else {
//         authenticate(data, () => {
//           setValues({ ...values, redirectToReferrer: true, loading: false });
//         });
//       }
//     } catch (error) {
//       console.log(error);
//       setValues({ ...values, error: "Something went wrong", loading: false });
//     }
//   };

//   const signUpForm = () => (
//     <form className="container max-w-md mx-auto xl:max-w-3xl h-full flex bg-white rounded-lg shadow overflow-hidden justify-between">

//       <div className="w-full xl:w-1/2 p-8">
//         <h1 className=" text-2xl font-bold">update account</h1>

//         <div className="mb-4 mt-6">
//           <label className="block text-gray-700 text-sm font-semibold mb-2 ">
//             Email
//           </label>
//           <input
//             onChange={handleChange}
//             name="email"
//             type="email"
//             className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
//             value={email}
//             placeholder="Your email address"
//           />
//         </div>

//         <div className="mb-6 mt-6">
//           <label className="block text-gray-700 text-sm font-semibold mb-2">
//             Password
//           </label>
//           <input
//             onChange={handleChange}
//             name="password"
//             type="password"
//             className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
//             value={password}
//             placeholder="Your password"
//           />
//         </div>
//         <a
//           class="inline-block align-baseline text-sm text-gray-600 hover:text-gray-800"
//           href="/forgot"
//         >
//           Forgot Password?
//         </a>

//         <div className="flex w-full mt-2">
//           <button
//             onClick={clickSubmit}
//             className="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
//           >
//             Submit
//           </button>
//         </div>
//         <div className="mt-4 justify-between ">
//           <span class="text-gray-600 text-sm mr-1">Don't have an account?</span>
//           <span class="text-gray-700 text-sm font-semibold">
//             <Link to="/signup"> Sign in</Link>
//           </span>
//         </div>
//       </div>
//     </form>
//   );

//   const showError = () => {
//     return (
//       <div className="flex justify-center">
//         <div
//           className="w-full max-w-3xl bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 text-center"
//           style={{ display: error ? "" : "none" }}
//         >
//           {error}
//         </div>
//       </div>
//     );
//   };

//   const showLoading = () =>
//     loading && (
//       <div className="flex justify-center">
//         <div className="w-full max-w-3xl text-center bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative mb-4">
//           <h2>Loading...</h2>
//         </div>
//       </div>
//     );

//   const redirectUser = () => {
//     if (redirectToReferrer) {
//       if (user.role === 1) return <Redirect to="/admin/dashboard" />;
//       else return <Redirect to="/user/dashboard" />;
//     }

//     if (isAuthenticated()) {
//       return <Redirect to="/" />;
//     }
//   };

//   return (
//     <Layout
//       title="Signin"
//       description="Login to your account to view and purchase awesome content"
//       className=""
//     >
//       {showError()}
//       {showLoading()}
//       {redirectUser()}
//       {signUpForm()}
//     </Layout>
//   );
// };

// export default UpdatePassword;

import React from "react";
import axios from "axios";
import { useState } from "react";

function UpdatePassword() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:5001/api/updatepassword",
        { data: formData }
      );
      console.log(response);

      return;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12"
    >
      <div class="relative py-3 w-full sm:max-w-xl sm:mx-auto">
        <div class="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div class="max-w-md mx-auto">
            <div>
              <h1 class="text-2xl font-semibold">
              Change Password
              </h1>
            </div>
            <div class="divide-y divide-gray-200">
              <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div class="relative">
                  <label for="email" className="text-sm">
                    Email:
                  </label>
                  <input
                    value={formData.email}
                    onChange={handleInputChange}
                    autocomplete="off"
                    id="email"
                    name="email"
                    type="text"
                    className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                    placeholder="Email address"
                  />
                </div>
                <div class="relative">
                <label for="email" className="text-sm">
                Password:
              </label>

                  <input
                    autocomplete="off"
                    id="password"
                    name="password"
                    type="password"
                    className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                    placeholder="********"
                    value={formData.password}
                    onChange={handleInputChange}
                  />

                </div>
                <div class="relative ">
                  <button className="w-full bg-gray-800 hover:bg-grey-900 py-2 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default UpdatePassword;
