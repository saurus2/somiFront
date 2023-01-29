import React, {useState} from "react";
import axios from "axios";
import "./RestAPI.css";
import refresh from './img/refresh.jpg';

function RestAPI() {
    const [text, setText] = useState([]);

    return (
        <>

            <div id="title">
                <h1>NOW Trends</h1>
            </div>

            <div id="btn">
                <div className="btn-primary">
                    <button
                            onClick={() => {
                                axios
                                    .get("http://127.0.0.1:8000/items/list/")
                                    .then((response) => {
                                        setText([...response.data]);
                                        console.log(response.data);
                                    })
                                    .catch(function (error){
                                        console.log(error);
                                    })
                            }}

                    >
                        <img id='rbtn' src={refresh} alt="" border="0" />

                    </button>

                </div>
            </div>



            <div id="list">
                {text.map((e) => (
                    <div id="item">
                        <div>ID: {e.id}</div>
                        <div>Name: {e.name}</div>
                        <div>Size: {e.size}</div>
                        <div>Price: {e.price}</div>
                        <div>Picture: {e.img}</div>
                    </div>
))}
            </div>
        </>
    );
}

export default RestAPI;