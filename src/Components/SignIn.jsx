import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function SignIn() {

    const [userInputData, setUserInputData] = useState({
        userName: "",
        password: "",
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserInputData({ ...userInputData, [name]: value });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        var regex = "^(?:|[^a-zA-Z0-9]*)$";
        if (userInputData.userName == "" && userInputData.password == "") {
            window.alert("Please Fill all the details before submitting");
        } else if (userInputData.userName == "") {
            window.alert("Please Fill user name before submitting");
        } else if (userInputData.password == "") {
            window.alert("Please Fill Psssword before submitting");
        } else if (userInputData.userName.match(regex) || userInputData.password.match(regex)) {
            window.alert("Sorry! That's not a valid Input");
        } else {
            window.alert("Logged in successfully");
        }
    }

    return (
        <div className='outerdiv'>
            <form className="form">
                <span className="signup">Login</span>
                <input type="name" placeholder="User name" className="form--input" name="userName" autoComplete='off' value={userInputData.userName} onChange={handleInput} />
                <input type="password" placeholder="Password" className="form--input" name="password" autoComplete='off' value={userInputData.password} onChange={handleInput} />
                <div className="form--marketing">
                    <div style={{ marginRight: "15rem" }}>
                        <input id="okayToEmail" type="checkbox" />
                        <label htmlFor="okayToEmail" className="checkbox">
                            Remember me
                        </label>
                    </div>
                    <a href="">Forgot Password</a>
                </div>

                <div className='buttons-div'>
                    <NavLink to="/" style={{ width: "100%" }}>
                        <button className="form--submit" onClick={handleFormSubmit}>
                            Login
                        </button>
                    </NavLink>
                    <NavLink to="/signup" style={{ width: "100%" }}>
                        <button className="form--submit">
                            Sign up
                        </button>
                    </NavLink>
                </div>
            </form>

        </div>
    );
}
