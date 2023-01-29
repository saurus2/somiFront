import React, {useState} from "react";
import "./Start.css";
import MoCloLogo from './MoCloLogo.png';
import { Link } from 'react-router-dom';

function Start() {
    const [text, setText] = useState([]);

    return (
        <>
            <img src={MoCloLogo}></img>
            <h3>Moving Closet for Everyone</h3>
            <div className="btn-primary">
                <Link to="/login">
                    <button id="loginbtn">Log In</button>
                </Link>
                <Link to="/register">
                    <button id="registerbtn">Register</button>
                </Link>
            </div>
        </>
    );
}

export default Start;