import React from 'react';
import { Outlet } from 'react-router-dom'
import Nav from "../nav/Nav";

const Layout = () => {
    // let styleObj = {
    //     width: '100vw',
    //     height: '50px',
    //     backgroundColor: 'black',
    //     position: 'absolute',
    //     bottom: '0',
    //     color: 'white'
    // }
    return (
        <div>
            <Nav/>
            <Outlet/>
            {/*<footer style={styleObj}>@Kris 2022</footer>*/}
        </div>
    );
};

export default Layout;