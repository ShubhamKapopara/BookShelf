import React from 'react';
import Menu from './Menu';
import '../styles.css'
import Logo from "../../src/Logo.png"
const Layout = ({ title = 'Title', description = 'Description', className, children }) => {
    return (
        <div>
            <Menu />

            <div className="jumbotron">
                {/* <img src={Logo} style={{width:"50px" , height:"50px"}}/> */}
                <h2>{title}</h2>
                <p className="lead">{description}</p>
            </div>
            <div className={className}>{children}</div>
        </div>
    )
}

export default Layout
