// import dependencies

import React from 'react';

export default function Navbar(){
    return(
        <nav
            className="nav">

            <ul>
                <li className="active">
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href='/Add'>Add</a>
                </li>
            </ul>
        </nav>
    )
}