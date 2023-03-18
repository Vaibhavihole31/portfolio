import React from 'react';
import './Message.css';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

function Message() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_812jmpc', 'template_74g4jwm', form.current, 'Lz76G_s1CbzkSjbaL')

        e.target.reset();
    };

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-7'>
                        <div className='contact-card'>
                            <h4 className='text-center mb-3'>Education</h4>
                            <p>I Currently Pursing my <b>B.Tech</b> in <b>Computer Engineering</b> From <b>Savitribai Phule Pune University</b>. <br />- Nov 2022 - Aug 2025</p>

                            <div>
                                <b> Diploma in Computer Engineering</b> <br/>
                                Government Polytechnic, Ahmednagar <br/>
                                -Aug 2019 - May 2022
                            </div>
                        </div>
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-4 mb-4'>
                        <div className='send-message-card'>
                            <form className='text-center' ref={form} onSubmit={sendEmail}>
                                <h4 className='text-center mt-1 mb-2'>Contact Me</h4>
                                <input className="login-form-input mb-2 p-2" placeholder='Your Full Name' type="text" name="name" required />
                                <input className="login-form-input mb-2 p-2" placeholder='Your Email' type="email" name="email" required />
                                <input className="login-form-input mb-2 p-2" placeholder='subject' type="text" name="subject" required />
                                <textarea className="text-area-input mb-2 p-2" placeholder='Your Message' rows="5" cols="20" name="message" required />
                                <button type="submit" className=' btn btn-primary btn-send-msg text-center mt-3'><b><i class="fa-solid fa-share"></i> Send Message</b></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Message