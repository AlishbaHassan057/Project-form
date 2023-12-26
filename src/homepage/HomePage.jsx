import React, { useState } from 'react';
import { LuMail } from "react-icons/lu";
import { CiLock } from "react-icons/ci";


import './style.css';

const HomePage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <div className="container row">
                <div className="col-lg-7">
                    <img src='' alt="Placeholder" />
                </div>
                <div className="col-lg-5 mt-5">
                    <h3 className='fw-bold text-center'>Member Login</h3>
                    <p className='text text-center fw-bold'>Access your exam preparation tools</p>
                    <form>
                        <div className="form-group with-border border border-secondary rounded-3 ">
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
                        <p className='pass mt-1 mb-4'>Forgot password?</p>
                        <button type="button" className="btn custom-btn-primary w-100 py-3 text-white rounded-3 fs-5">
                            Login
                        </button>
                    </form>
                    <div className="or-divider mt-5">
                        <hr className="" />
                        <span className="or-text text-secondary fs-5">or</span>
                        <hr className="" />
                    </div>

                    <button className='btn custom-btn-danger rounded-3 w-100 mt-5 py-3 text-black border border-secondary fw-normal fs-5'><img style={{ width: '5%' }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png' /> Continue with Google</button>
                    <div className="d-flex align-items-center gap-0 justify-content-center">
                        <div className="para">
                            <p className='mt-3 fs-5'>Dont't have an account?</p></div>
                        <div className="sign fs-5">
                            <a className='an' href="/"> Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomePage