import React from 'react';
import vaibhaviImg from './Vaibhavi-img.jpeg';
import './Information.css';
import rtcLogo from './rtc-logo.png';
import Github from './github-logo.png';
import Linkdin from './linkdin-logo.png';
import Twitter from './twitter-logo.png';
import Instagram from './instagram-logo.png';
import Phone from './phone.png';

function Information() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={vaibhaviImg} className='header-img mt-3 mx-auto d-block' />
                        <h4 className='text-center mt-3'>Vaibhavi Hole</h4>
                        <h5 className='text-center mt-1'>Founding Member at Road To Code 💻</h5>

                        <div className='container mt-4'>
                            <div className='row'>

                                <a href="https://github.com/Vaibhavihole31" class="ico-social-container" target='blank'>
                                    <img src={Github} alt="github" class="ico-social" />
                                </a>

                                <a href="https://www.linkedin.com/in/vaibhavi-hole/" class="ico-social-container" target='blank'>
                                    <img src={Linkdin} alt="linkedin" class="ico-social" />
                                </a>

                                <a href='https://twitter.com/VaibhaviHole' class="ico-social-container" target='blank'>
                                    <img src={Twitter} alt="linkedin" class="ico-social" />
                                </a>

                                <a href="https://www.instagram.com/vaibhavi_n_hole/" class="ico-social-container" target='blank'>
                                    <img src={Instagram} alt="linkedin" class="ico-social" />
                                </a>

                                <a href="https://www.linkedin.com/in/vaibhavi-hole/" class="ico-social-container" target='blank'>
                                    <img src={Linkdin} alt="linkedin" class="ico-social" />
                                </a>

                                <a href="tel:7821011979" class="ico-social-container">
                                    <img src={Phone} alt="call" class="ico-social" />
                                </a>

                            </div>
                        </div>

                        <div className='text-center mt-4'>
                        <button type="button" class="btn-resume btn-sm m-2"><b><i class="far fa-file-alt"></i> Show Resume</b></button>
                        </div>

                    </div>
                    <div className='col-md-6'>
                        <div className='mt-5'>
                            Hello I'm <b>Vaibhavi Hole</b>. I have good Programming Skills in C, C++, Python.
                            I have done projects in Html, CSS, Javascript, Bootstrap, Nodejs, Reactjs, MongoDB.
                        </div>

                        <div className='mt-4 card-skill'>
                            <p className='text-center'>
                                <button type="button" class="btn-js btn-sm m-2"><b><i class="fa-brands fa-square-js"></i> Javascript</b></button>
                                <button type="button" class="btn-rj btn-sm m-2"><b><i class="fa-brands fa-react"></i> React JS</b></button>
                                <button type="button" class="btn-nj btn-sm m-2"><b><i class="fa-brands fa-node-js"></i> Node JS</b></button>
                                <button type="button" class="btn-boot btn-sm m-2"><b><i class="fa-brands fa-bootstrap"></i> Bootstrap</b></button>
                                <button type="button" class="btn-md btn-sm m-2"><b><i class="fa-solid fa-database"></i> Mongo DB</b></button>
                                <button type="button" class="btn-git btn-sm m-2"><b><i class="fa-brands fa-github"></i> Github</b></button>
                            </p>
                        </div>

                        <div className='m-5 mt-5 rtc-card'>
                            <a href='https://www.roadtocode.org/' target='blank' className='rtc-logo-a'>
                                <h5><img src={rtcLogo} className="rtc-logo" /> Road To code</h5>
                            </a>
                            <b>Founding Member at Road To Code</b>. 
                           We are Helping and Exploring Students To start their Programming Journey . I am Confident to solve Student programming doubt,
                            i have a strong problem sovling skill.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Information