import React, { useRef } from "react";
import "./Testimonials.css"
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
 
function Testimonials()
{
    const slider=useRef();
    let tx=0;
    const slideForward=()=>{
        if(tx>-50)
            {
                tx-=25;
            }
            slider.current.style.transform=`translate(${tx}%)`
    }

    const slideBackward=()=>{
        if(tx<0)
            {
                tx+=25;
            }
            slider.current.style.transform=`translate(${tx}%)`
    }

    return (
        <div className="testimonials">
            <img src={next_icon} alt="next button" className="next-btn " onClick={slideForward} />
            <img src={back_icon} alt="back button" className="back-btn" onClick={slideBackward}/>
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>
                                         Kathy
                                    </h3>
                                    <span>Edutech, USA</span>
                                </div>
                            </div>
                            <p>
                            As a student at University EduTech, USA, I've found the courses to be incredibly well-structured and engaging. The interactive learning modules and expert instructors made even the most complex topics easy to understand. The flexibility to study at my own pace allowed me to balance my education with my part-time job, and I've gained invaluable skills that have already helped me advance in my career. I highly recommend University EduTech to anyone looking to enhance their knowledge and skills.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>
                                        Pranav Reddy
                                    </h3>
                                    <span>Edutech, USA</span>
                                </div>
                            </div>
                            <p>
                            University EduTech, USA has been a game-changer for me. The platform's user-friendly interface and extensive range of courses made it easy for me to find exactly what I needed. The support from the faculty was exceptional; they were always available to answer my questions and provide guidance. Thanks to the practical assignments and real-world applications, I feel well-prepared to tackle challenges in my field. This experience has truly been transformative for my academic and professional growth.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>
                                        Nancy
                                    </h3>
                                    <span>Edutech, USA</span>
                                </div>
                            </div>
                            <p>
                            Enrolling at University EduTech, USA was one of the best decisions I've made. The innovative teaching methods and cutting-edge resources provided a learning experience that went beyond my expectations. The courses were not only informative but also inspiring, encouraging me to think critically and apply what I've learned in real-life scenarios. The community at University EduTech is supportive and diverse, creating a positive environment for collaboration and networking. I am grateful for the opportunities this platform has opened up for me.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>
                                        Abhishek Mittapalli
                                    </h3>
                                    <span>Edutech, USA</span>
                                </div>
                            </div>
                            <p>
                            University EduTech, USA has exceeded all my expectations. The course content is incredibly comprehensive, covering everything from foundational concepts to advanced techniques in my field. The ability to interact with both instructors and fellow students in a collaborative online environment made the learning process much more engaging and enriching. The flexibility of the program allowed me to study alongside my full-time job, and the knowledge I've gained has already made a significant impact on my professional abilities. I highly recommend University EduTech to anyone looking to elevate their education and career.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Testimonials;