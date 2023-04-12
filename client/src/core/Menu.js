import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import { itemTotal } from "./cartHelpers";
import logo from "../assets/logo-5.jpg";

// const isActive = (history, path) => {
//     if (history.location.pathname === path) {
//         return { color: '#ff9900' }
//     }

//     else
//         return { color: '#ffffff' }
// }

// const Menu = ({ history }) => {
//     return (
//         <div>
//             <ul className="nav nav-tabs bgc " style={{ height: 50 }}>

//                 <li className="nav-item">
//                     <img src={logo} width={90} height={50} alt="" />
//                 </li>
//                 <li className=" nav-item ">
//                     <Link className=" nav-link" style={isActive(history, '/')} to="/">HOME</Link>
//                 </li>

//                 <li className="nav-item">
//                     <Link className="nav-link" style={isActive(history, '/shop')} to="/shop">SHOP</Link>
//                 </li>

//                 {!isAuthenticated() && (
//                     <Fragment>
//                         <li className="nav-item">
//                             <Link className="nav-link" style={isActive(history, '/signin')} to="/signin">LOGIN</Link>
//                         </li>

//                         <li className="nav-item">
//                             <Link className="nav-link" style={isActive(history, '/signup')} to="/signup">SIGNUP</Link>
//                         </li>

//                         <li className="nav-item ml-auto">
//                             <Link className="nav-link" style={isActive(history, '/about')} to="/about">ABOUT</Link>
//                         </li>
//                     </Fragment>
//                 )}

//                 {isAuthenticated() && (
//                     <Fragment>
//                         {isAuthenticated() && isAuthenticated().user.role === 0 && (

//                             <li className="nav-item">
//                                 <Link className="nav-link" style={isActive(history, '/user/dashboard')} to="/user/dashboard">DASHBOARD</Link>
//                             </li>
//                         )}

//                         {isAuthenticated() && isAuthenticated().user.role === 1 && (

//                             <li className="nav-item">
//                                 <Link className="nav-link" style={isActive(history, '/admin/dashboard')} to="/admin/dashboard">DASHBOARD</Link>
//                             </li>
//                         )}

//                         <li className="nav-item">
//                             <Link className="nav-link" style={isActive(history, '/cart')} to="/cart">
//                                 CART <sup><small className="cart-badge">{itemTotal()}</small></sup>
//                             </Link>
//                         </li>

//                         <li className="nav-item">
//                             <Link className="nav-link" style={isActive(history, '/about')} to="/about">ABOUT</Link>
//                         </li>

//                         <li className="nav-item ml-auto">
//                             <span className="nav-link" style={{ cursor: 'pointer', color: '#ffffff' }} onClick={() => signout(() => {
//                                 history.push('/')
//                             })}>LOGOUT</span>
//                         </li>

//                     </Fragment>

//                 )}

//             </ul>
//         </div>
//     )
// }

///// taiwind code

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ff9900", fontWeight: "" };
  } else return { color: "black", fontWeight: "normal" };
};

const Menu = ({ history }) => {
  return (
    <div>
      <div className="h-16 fixed  top-0 left-0 right-0  text-slate-900 flex bg-white overflow-hidden shadow-lg ">
        <div className=" w-16 mr-8">
          <img src={logo} alt="" />
        </div>
        <div className="flex items-center justify-around gap-10  ">
          <div className=" hover:bg-slate-100 p-2 rounded">
            <Link className="" style={isActive(history, "/")} to="/">
              HOME
            </Link>
          </div>
          <div className="hover:bg-slate-100 p-2 rounded">
            <Link className="" style={isActive(history, "/shop")} to="/shop">
              SHOP
            </Link>
          </div>
          {!isAuthenticated() && (
            <Fragment>
              <div className="hover:bg-slate-100 p-2 rounded">
                <Link
                  className=""
                  style={isActive(history, "/signin")}
                  to="/signin"
                >
                  LOGIN
                </Link>
              </div>

              <div className="hover:bg-slate-100 p-2 rounded">
                <Link
                  className=""
                  style={isActive(history, "/signup")}
                  to="/signup"
                >
                  SIGNUP
                </Link>
              </div>

              <div className=" ml-auto hover:bg-slate-100 p-2 rounded">
                <Link
                  className=""
                  style={isActive(history, "/about")}
                  to="/about"
                >
                  ABOUT
                </Link>
              </div>
            </Fragment>
          )}
        </div>



        {isAuthenticated() && (
          <Fragment>
            <div className="flex items-center justify-around mx-10 gap-8 ">
              {isAuthenticated().user.role === 0 && (
                <div className=" hover:bg-slate-100 p-2 rounded">
                  <Link
                    className=""
                    style={isActive(history, "/user/dashboard")}
                    to="/user/dashboard"
                  >
                    DASHBOARD
                  </Link>
                </div>
              )}
              {isAuthenticated().user.role === 1 && (
                <div className="flex items-center justify-around gap-10">
                  <Link
                    className="hover:bg-slate-100 p-2 rounded"
                    style={isActive(history, "/admin/dashboard")}
                    to="/admin/dashboard"
                  >
                    DASHBOARD
                  </Link>
                </div>
              )}
              <div className="">
                <Link
                  className="hover:bg-slate-100 p-2 rounded"
                  style={isActive(history, "/cart")}
                  to="/cart"
                >
                  CART{" "}
                  <sup>
                    <small className="bg-red-500 rounded-full px-1">{itemTotal()}</small>
                  </sup>
                </Link>
              </div>
              <div className="flex items-center justify-around gap-10">
                <Link
                  className="hover:bg-slate-100 p-2 rounded"
                  style={isActive(history, "/about")}
                  to="/about"
                >
                  ABOUT
                </Link>
              </div>
              <div className="">
                <span
                  className="hover:bg-slate-100 p-2 rounded text-black"
                  
                  onClick={() =>
                    signout(() => {
                      history.push("/");
                    })
                  }
                >
                  LOGOUT
                </span>
              </div>{" "}
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default withRouter(Menu);
