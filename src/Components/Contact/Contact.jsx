import React from "react";
import "./Contact.css"
import message_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
function Contact()
{
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "8d3d2027-37da-4194-8d81-76ad76206977");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
        <div className="contact">
            <div className="contact-col">
                <h3>Send us a message <img src={message_icon} alt="" /></h3>
                <p>Feel free to reach out thoruogh contact form or find our contact details below.</p>
                <ul>
                    <li>
                        <img src={mail_icon} alt="" />
                        edutech@gmail.com
                    </li>
                    <li>
                        <img src={phone_icon} alt="" />
                        +15713566717
                    </li>
                    <li>
                        <img src={location_icon} alt="" />
                        Fairfax, virginia
                    </li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>
                        Your Name
                    </label>
                    <input type="text" name="name" placeholder="Please enter your name" required/>
                    <label>
                        Phone number
                    </label>
                    <input type="tel" name="phone" placeholder="Please enter your phone number" required/>
                    <label>
                        Write your message
                    </label>
                    <textarea name="message" rows={6} placeholder="Please enter your message"></textarea>
                    <button className="btn dark-btn">Submit <img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
}

export default Contact;