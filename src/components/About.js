import React from "react";

function About({ img, placeholder="https://via.placeholder.com/215", about }){
    
    return (
        <aside>
            <img src={img} placeholder={placeholder} alt="blog log"/>
            <p>{about}</p>
        </aside>
    );
}

export default About;