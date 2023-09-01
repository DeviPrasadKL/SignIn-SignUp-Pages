import React, { useState } from 'react';
import SignIn from './SignIn';
import Signup from './Signup';

export default function Main() {
    const [flag, setFlag] = useState(true);

    let handleToggle = () => {
        setFlag(!flag);
    }

    let Component = flag ? SignIn : Signup;

    return (
        <div>
            <div className='container'>
                <div className='toggle-outer'>
                    <div id="btn" style={{ left: flag ? '0%' : '50%' }} ></div>
                    <button type="button" className='toggle-btn' onClick={handleToggle} style={{ color: flag ? 'green' : 'red' }} >Sign In</button>
                    <button type="button" className='toggle-btn' onClick={handleToggle} style={{ color: flag ? 'red' : 'green' }} >Sign Up</button>
                </div>
            </div>
            <div className='ContentBox'>
                <div className='formContent'>
                    <Component />
                </div>
            </div>
        </div>
    );
}
