import React, {useState} from "react";
import axios from "axios";
import "./RestAPI.css";
import img1 from './image.png';
import img2 from './image2.png';
import img3 from './image3.png';
import img4 from './image4.png';
import img5 from './image5.png';

function RestAPI() {
    const [text, setText] = useState([]);

    return (
        <>
            <img src={img1} alt=""/>
            <img src={img2} alt=""/>
            <img src={img3} alt=""/>
            <img src={img4} alt=""/>
            <img src={img5} alt=""/>
            

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