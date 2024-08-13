import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

function About()
{
    return (
        <div className="about">
            <div className="about-left">
                <img src={about_img} alt="about img" className="about-img"/>
                <img src={play_icon} alt="play icon img" className="play-icon"/>
            </div>
            <div className="about-right">
                <h3>About University</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Edutech is a leader in academic excellence, known for its dedication to innovation, research, and comprehensive education. With a rich history and a commitment to adapting to global trends, the university creates an environment that nurtures creativity, critical thinking, and leadership among its students.</p>
                <p>
                The university's greatness is fueled by its distinguished faculty, who are experts in their fields and dedicated mentors. They inspire students to excel academically and engage in impactful research. Cutting-edge facilities and resources further enhance the learning experience, equipping students with the tools needed for success.
                </p>
                <p>
                Edutech also prioritizes diversity and inclusivity, offering a range of extracurricular activities and global programs that enrich student life. With a strong alumni network achieving success across various industries, the university continues to shape the future of education and society.
                </p>
                
            </div>
        </div>
    );
}

export default About;