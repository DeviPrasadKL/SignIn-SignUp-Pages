import React, { useState } from 'react';
import SignIn from './SignIn';
import Signup from './Signup';

export default function Main() {
    const [flag, setFlag] = useState(true);

    let handleToggle = ()=>{
        setFlag(!flag);
    }

    let Component = flag ? SignIn : Signup;

    return (
        <div>
            <div className='toggle-outer'>
                <button type="button" style={{backgroundColor: flag ? 'aqua' : 'none'}} className='toggle-btn' onClick={handleToggle} >Sign In</button>
                <button type="button" style={{backgroundColor: flag ? 'none' : 'aqua'}} className='toggle-btn' onClick={handleToggle} >Sign Up</button>
            </div>
            <Component/>
        </div>
    );
}
