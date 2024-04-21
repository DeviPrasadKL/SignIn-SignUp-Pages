import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Signup() {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let form = new FormData(e.target);
        let userInputData = Object.fromEntries(form.entries());
        console.log("Obj = ", userInputData);

        // For Phone number check
        var regex = "^[0-9]+$";
        if (userInputData.userName == "" || userInputData.email == "" || userInputData.password == "" || userInputData.confirmPasword == "" || userInputData.phoneNumber == "") {
            alert("Please Fill all the details before submitting");
        } else if (userInputData.password != userInputData.confirmPasword) {
            alert("Password does not match");
        } else if (userInputData.phoneNumber.length != 10) {
            alert("Phone Number must contain at least ten phone numbers");
        } else if (!userInputData.phoneNumber.match(regex)) {
            alert("Please enter a valid phone number");
        } else {
            alert("Sign up Successfully Completed");
        }
    }

    return (
        <div className='outerdiv'>
            <form className="form" onSubmit={handleSubmit}>
                <span className="signup">Sign Up</span>
                <input type="username" placeholder="User name" className="form--input" name="userName"  />
                <input type="email" placeholder="Email address" className="form--input" name="email"  />
                <input type="tel" placeholder="Contact Number" className="form--input" maxLength="10" name="phoneNumber"  />
                <input type="password" placeholder="Password" className="form--input" name="password" />
                <input type="password" placeholder="Confirm password" className="form--input" name="confirmPasword" />

                <div className='buttons-div'>
                    <button type='submit' className="form--submit">
                        Save & Verify
                    </button>
                </div>
            </form>
        </div>
    );
}
