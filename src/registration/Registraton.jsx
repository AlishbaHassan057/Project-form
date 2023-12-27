import React, { useState } from 'react';
import { LuMail } from "react-icons/lu";
import { CiLock } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";

import { MdOutlinePersonOutline } from "react-icons/md";

import './reg.css';

const Registraton = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [date, setDate] = useState('')

    return (
        <>

            <div className="row align-items-center mt-0">
                <div className="col-lg-7 col-md-5">
                    <div className="background-gradient">
                        <h2 className='fin text-white fw-bold font-italic'>FINBITE</h2>
                        <img className='pic' src='/' />
                        <h3 className="success text-white text-center mx-auto fs-5">Rocket to your success</h3>
                        <p className='pr text-white col-lg-6 fw-normal text-center mx-auto'>Your unparalleled sidekick for cracking the professional exam </p>
                    </div>

                </div>
                <div className="col-lg-5 col-md-5 col-sm-4">
                    <div className="register w-75 m-auto">
                        <h3 className='fw-bold text-center '>Member Registration</h3>
                        <p className='para text text-center fw-bold mb-5'>Register to access exam preparation tools</p>
                        <form>
                            <div className="form-group with-border border border-secondary rounded-3 mb-4">
                                <label className='mail-label'>Full Name</label>
                                <div className="input-container">
                                    <input
                                        value={name}
                                        onChange={(e) => { setName(e.target.value) }}
                                        className='form-control'
                                        placeholder=''
                                        type='text'
                                    />
                                    <div className="placeholder text- d-flex align-items-center gap-3">
                                        <div className="logo">
                                            <MdOutlinePersonOutline size={20} />
                                        </div>
                                        <div className="em fs-6">Full Name</div>

                                    </div>
                                </div>
                            </div>
                            <div className="form-group with-border border border-secondary rounded-3 mb-4">
                                <label className='mail-label'>Email</label>
                                <div className="input-container">
                                    <input
                                        value={email}
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        className='form-control'
                                        placeholder=''
                                        type='text'
                                    />
                                    <div className="placeholder text- d-flex align-items-center gap-3">
                                        <div className="logo"><LuMail size={20} /></div>
                                        <div className="em fs-6">Email</div></div>
                                </div>
                            </div>

                            <div className="form-group with-border border border-secondary rounded-3 mt-4 mb-0">
                                <label className='mail-label'>Password</label>
                                <div className="input-container">
                                    <input
                                        value={password}
                                        onChange={(e) => { setPassword(e.target.value) }}
                                        className='form-control'
                                        placeholder=''
                                        type='text'
                                    />
                                    <div className="placeholder text-black d-flex align-items-center gap-3">
                                        <div className="logo">
                                            <CiLock size={20} />

                                        </div>
                                        <div className="em">Password</div></div>
                                </div>
                            </div>
                            <div className="form-group with-border border border-secondary rounded-3 mt-4 mb-4">
                                <label className='mail-label'>Expected Exam Date</label>
                                <div className="input-container">
                                    <input
                                        value={date}
                                        onChange={(e) => { setDate(e.target.value) }}
                                        className='form-control'
                                        placeholder=''
                                        type='text'
                                    />
                                    <div className="placeholder text- d-flex align-items-center gap-3">
                                        <div className="logo">
                                            <MdDateRange size={20} />
                                        </div>
                                        <div className="em fs-6">Expected Exam Date </div>

                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn custom-btn-primary w-100 py-3 text-white rounded-3 fs-5">
                                Register
                            </button>
                        </form>
                        <div className="or-divider mt-4">
                            <hr className="" />
                            <span className="or-text text-secondary fs-5">or</span>
                            <hr className="" />
                        </div>
                        <button className='btn custom-btn-danger rounded-3 w-100 mt-4 py-3 text-black border border-secondary fw-normal fs-5'><img style={{ width: '5%' }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png' /> Continue with Google</button>
                        <div className="d-flex align-items-center gap-0 justify-content-center">
                            <div className="para">
                                <p className='mt-3 fs-5'>Already have an account?</p></div>
                            <div className="sign fs-5">

                                <a className='an mb-5' href="/">Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Registraton;
