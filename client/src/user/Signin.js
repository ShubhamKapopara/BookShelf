// import React, { useState } from 'react';
// import Layout from '../core/Layout';
// import { Redirect } from 'react-router-dom';
// import { signin, authenticate, isAuthenticated } from '../auth';

// const Signin = () => {

//     const [values, setValues] = useState({
//         email: '',
//         password: '',
//         error: '',
//         loading: false,
//         redirectToReferrer: false
//     });

//     const { email, password, loading, error, redirectToReferrer } = values;
//     const { user } = isAuthenticated();

//     const handleChange = name => e => {
//         setValues({ ...values, error: false, [name]: e.target.value })
//     };

//     const clickSubmit = (e) => {
//         e.preventDefault();
//         setValues({ ...values, error: false, loading: true });
//         signin({ email, password })
//             .then(data => {
//                 if (data.err) {
//                     setValues({ ...values, error: data.err, loading: false })
//                 }
//                 else {
//                     authenticate(data, () => {
//                         setValues({ ...values, redirectToReferrer: true, loading: false });
//                     })
//                 }
//             })

//     }

//     const signUpForm = () => (
//         <form>
//             <div className="form-group">
//                 <label className="text-muted">Email</label>
//                 <input onChange={handleChange('email')} type="email" className="form-control" value={email} />

//             </div>

//             <div className="form-group">
//                 <label className="text-muted">Password</label>
//                 <input onChange={handleChange('password')} type="password" className="form-control" value={password} />
//             </div>

//             <div style={{ textAlign: "center" }} >
//                 <button onClick={clickSubmit} className="btn btn-primary">Submit</button>
//             </div>

//         </form>
//     );

//     const showError = () => {
//         return (<div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
//             {error}
//         </div>
//         )
//     }

//     const showLoading = () =>

//         loading && (<div className="alert alert-info">
//             <h2>Loading...</h2>
//         </div>);

//     const redirectUser = () => {
//         if (redirectToReferrer) {
//             if (user.role === 1)
//                 return <Redirect to="/admin/dashboard" />

//             else
//                 return <Redirect to="/user/dashboard" />
//         }

//         if (isAuthenticated()) {
//             return <Redirect to="/" />
//         }
//     };


//     return (
//         <Layout title="Signin" description="Login to your account to view and purchase awesome content" className="container col-md-8 offset-md-2">
//             {showError()}
//             {showLoading()}
//             {redirectUser()}
//             {signUpForm()}
//         </Layout>

//     )
// };

// export default Signin



import React, { useState } from 'react';
import Layout from '../core/Layout';
import { Redirect } from 'react-router-dom';
import { signin, authenticate, isAuthenticated } from '../auth';
import { Link } from 'react-router-dom';


// const Signin = () => {

//     const [values, setValues] = useState({
//         email: '',
//         password: '',
//         error: '',
//         loading: false,
//         redirectToReferrer: false
//     });

//     const { email, password, loading, error, redirectToReferrer } = values;
//     const { user } = isAuthenticated();

//     const handleChange = (e) => {
//         setValues({ ...values, error: false, [e.target.name]: e.target.value });
//       };

//     const clickSubmit = async (e) => {
//         e.preventDefault();
//         setValues({ ...values, error: false, loading: true });
//         try {
//             const data = await signin({ email, password });
//             if (data.err) {
//                 setValues({ ...values, error: data.err, loading: false })
//             }
//             else {
//                 authenticate(data, () => {
//                     setValues({ ...values, redirectToReferrer: true, loading: false });
//                 })
//             }
//         } catch (error) {
//             console.log(error);
//             setValues({ ...values, error: 'Something went wrong', loading: false })
//         }
//     }

//     const signUpForm = () => (
//         <form className='flex justify-center'>
//         <div className='w-full max-w-sm'>
//         <div className="m-3">
//           <label className="block text-gray-700">Email</label>
//           <input
//             onChange={handleChange}
//             name="email"
//             type="email"
//             className="w-full mt-1 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
//             value={email}
//           />
//         </div>
    
//         <div className="m-3">
//           <label className="block text-gray-700">Password</label>
//           <input
//             onChange={handleChange}
//             name="password"
//             type="password"
//             className="w-full mt-1 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
//             value={password}
//           />
//         </div>
    
//         <div className="text-center mt-6">
//           <button onClick={clickSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Submit
//           </button>
//         </div>
//         </div>
//       </form>
//       );
      
//       const showError = () => {
//         return (
//             <div className='flex justify-center'>
//           <div className="w-full max-w-sm bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" style={{ display: error ? '' : 'none' }}>
//             {error}
//           </div>
//           </div>
//         );
//       };
    

//     const showLoading = () =>

//         loading && (<div className='flex justify-center'><div className="w-full max-w-sm bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative mb-4">
//             <h2>Loading...</h2>
//         </div></div>);

//     const redirectUser = () => {
//         if (redirectToReferrer) {
//             if (user.role === 1)
//                 return <Redirect to="/admin/dashboard" />

//             else
//                 return <Redirect to="/user/dashboard" />
//         }

//         if (isAuthenticated()) {
//             return <Redirect to="/" />
//         }
//     };



const Signin = () => {

  const [values, setValues] = useState({
      email: '',
      password: '',
      error: '',
      loading: false,
      redirectToReferrer: false
  });

  const { email, password, loading, error, redirectToReferrer } = values;
  const { user } = isAuthenticated();

  const handleChange = (e) => {
      setValues({ ...values, error: false, [e.target.name]: e.target.value });
    };

  const clickSubmit = async (e) => {
      e.preventDefault();
      setValues({ ...values, error: false, loading: true });
      try {
          const data = await signin({ email, password });
          if (data.err) {
              setValues({ ...values, error: data.err, loading: false })
          }
          else {
              authenticate(data, () => {
                  setValues({ ...values, redirectToReferrer: true, loading: false });
              })
          }
      } catch (error) {
          console.log(error);
          setValues({ ...values, error: 'Something went wrong', loading: false })
      }
  }

  const signUpForm = () => (
      <form className='container max-w-md mx-auto xl:max-w-3xl h-full flex bg-white rounded-lg shadow overflow-hidden justify-between'>
      <div className=" hidden xl:block xl:w-1/2 h-96">
      <img  
        className=" h-auto  w-full object-cover"
        src="https://images.unsplash.com/photo-1541233349642-6e425fe6190e"
        alt="my zomato"
      />
    </div>
    <div className='w-full xl:w-1/2 p-8'><h1 className=" text-2xl font-bold">Sign in to your account</h1>

      <div className="mb-4 mt-6">
        <label className="block text-gray-700 text-sm font-semibold mb-2 ">Email</label>
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
        <label className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
        <input
          onChange={handleChange}
          name="password"
          type="password"
          className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
          value={password}
          placeholder="Your password"
        />
      </div>
      <a
      className="inline-block align-baseline text-sm text-gray-600 hover:text-gray-800"
      href="/forgot"
    >
      Forgot Password?
    </a>
  
      <div className="flex w-full mt-2">
        <button onClick={clickSubmit} className="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10">
          Submit
        </button>
      </div>
      <div className='mt-4 justify-between '>
    <span className="text-gray-600 text-sm mr-1">
      Don't have an account?
    </span>
    <span className="text-gray-700 text-sm font-semibold">
     <Link to="/signup"> Sign in</Link>
    </span>
  </div>
      </div>
    </form>
    );
    
    const showError = () => {
      return (
          <div className='flex justify-center'>
        <div className="w-full max-w-3xl bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 text-center" style={{ display: error ? '' : 'none' }}>
          {error}
        </div>
        </div>
      );
    };
  

  const showLoading = () =>

      loading && (<div className='flex justify-center'><div className="w-full max-w-3xl text-center bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative mb-4">
          <h2>Loading...</h2>
      </div></div>);

  const redirectUser = () => {
      if (redirectToReferrer) {
          if (user.role === 1)
              return <Redirect to="/admin/dashboard" />

          else
              return <Redirect to="/user/dashboard" />
      }

      if (isAuthenticated()) {
          return <Redirect to="/" />
      }
  };



    return (
      
        <Layout title="Signin" description="Login to your account to view and purchase awesome content" className="">
            {showError()}
            {showLoading()}
            {redirectUser()}
            {signUpForm()}
    
        </Layout>

        

    )
};




export default Signin


