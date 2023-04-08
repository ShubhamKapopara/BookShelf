import React from "react";
import { Link } from "react-router-dom";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";

// const AdminDashboard = () => {

//     const {user: {_id, name, email, role}} = isAuthenticated();

//     const adminLinks = () => {
//         return (
//             <div className="card mb-5">
//                 <h4 className="card-header text-center">Admin Links</h4>
//                 <ul className="list-group">
//                     <li className="list-group-item"><Link to="/create/category" className="nav-link">Create Category</Link></li>
//                     <li className="list-group-item"><Link to="/create/product" className="nav-link">Create Product</Link></li>
//                     <li className="list-group-item"><Link to="/admin/orders" className="nav-link">Manage Orders</Link></li>
//                     <li className="list-group-item"><Link to="/admin/products" className="nav-link">Manage Products</Link></li>
//                 </ul>

//             </div>
//         )
//     }

//     const adminInfo = () => {
//         return (
//             <div className="card mb-5">
//             <h3 className="card-header text-center">Admin Information</h3>
//             <ul className="list-group">
//                 <li className="list-group-item">{name}</li>
//                 <li className="list-group-item">{email}</li>
//                 <li className="list-group-item">{role === 1 ? 'Admin': `User id : ${_id}`}</li>
//             </ul>
//             </div>
//         )
//     }

//     return (
//         <Layout title="Admin Dashboard" description={`Welcome, ${name}`} className="container-fluid">
//             <div className="row">
//                 <div className="xs-col-12 col-sm-4">
//                     {adminLinks()}
//                 </div>

//                 <div className="xs-col-12 col-sm-8">
//                     {adminInfo()}
//                 </div>
//             </div>
//         </Layout>
//     )
// }

// export default AdminDashboard;

///tl

const AdminDashboard = () => {
  const {
    user: { _id, name, email, role },
  } = isAuthenticated();

  const adminLinks = () => {
    return (
        <div className="mb-5 border rounded-lg h-fit w-fit">
        <h4 className="bg-black  w-fit text-white px-40 py-3 rounded-t">Admin Links</h4>
        <div className="my-6 ">
        <div className="my-4">
        <div className="my-4 mx-4 w-fit tracking-widest text-sm title-font font-medium text-gray-400">You Can Create Book Category :</div>
            <a href="/create/category" className=" grid  py-2 px-4 rounded hover:bg-gray-200 font-medium tracking-widest">Create Category</a>
          </div>
          <div className="my-4 mx-4 w-fit tracking-widest text-sm title-font font-medium text-gray-400 ">You Can Create Book Product :</div>
          <div className="my-4">
            <a href="/create/product" className="grid py-2 px-4 rounded hover:bg-gray-200 font-medium tracking-widest">Create Product</a>
          </div>
          <div className="my-4 mx-4 w-fit tracking-widest text-sm title-font font-medium text-gray-400">You Can Create Manage Orders :</div>
          <div className="my-4">
            <a href="/admin/orders" className=" grid py-2 px-4 rounded hover:bg-gray-200 font-medium tracking-widest">Manage Orders</a>
          </div>
          <div className="my-4 mx-4 w-fit tracking-widest text-sm title-font font-medium text-gray-400">You Can Create Manage Products :</div>
          <div className="my-4">
            <a href="/admin/products" className="  grid py-2 px-4 rounded hover:bg-gray-200 font-medium tracking-widest">Manage Products</a>
          </div>
        </div>
       
      </div>
        );
  };

  const adminInfo = () => {
    return (
        <div className="relative">      <div className="absolute bottom-40 right-20 mb-5 border w-fit">
        <h3 className="bg-black text-white px-20 py-2 rounded-t">Admin Information</h3>
        <div className="flex w-fit justify-arround  ">
        <div>
          <ul className="mt-7 mx-4">
            <li className="bg-slate-100 rounded w-fit px-2 my-2">{name}</li>
            <li className="bg-slate-100 rounded w-fit px-2 italic">{email}</li>
            <li className=" my-2 px-2 tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              {role === 1 ? "Admin" : `User id : ${_id}`}
            </li>
          </ul>
        </div>
        <div className="content-start">
          <img className="w-36"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRNuiBY5AGqRjC890IW9MQ5_p5NYSysbFSBfs8LIcl8DSYx7sTngU8xpzyHuwitNfUmV4&usqp=CAU"
            alt="/"
          />
        </div></div>
      </div></div>

    );
  };

  return (
    <Layout
      title="Admin Dashboard"
      description={`Welcome, ${name}`}
      className="container-fluid"
    >
      <div className="row">
        <div className="xs-col-12 col-sm-4">{adminLinks()}</div>

        <div className="xs-col-12 col-sm-8">{adminInfo()}</div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
