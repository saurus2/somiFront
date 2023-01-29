import React from "react";
import "./LogIn.css";
import { Link } from 'react-router-dom';

function LogIn() {
    return (
        <>
            <div>Log in</div>
            <label>
            Username:
            <input type="text" name="username" value="tester"/><br/>
            Password:
            <input type="password" name="password" value="password"/>
            </label>
            <br/>
            <Link to="/home">
                <button>Log In</button>
            </Link>
        </>
    );
}

export default LogIn;