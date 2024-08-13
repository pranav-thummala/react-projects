import "./Hero.css";
import React from "react";
import dark_arrow from "../../assets/dark-arrow.png"
function Hero()
{
    return(
        <div className="hero container">
            <div className="hero-text">
                <h1>
                    We ensure better education for bright future!!!
                </h1>
                <p>
                    Our cutting-edge curriculum is designed to empower the students and make them better at the job they do!!
                </p>
                <button className="btn">Explore More <img src={dark_arrow} alt="" /></button>
            </div>
        </div>
    );
}

export default Hero;