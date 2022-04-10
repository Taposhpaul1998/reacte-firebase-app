import React from 'react';
import './Register.css'
const Register = () => {
    return (
        <div>
            <h2>Plase Register now</h2>
            <form className='register-form'>
                <input type="text" placeholder='Your name' />
                <br />
                <input type="email" placeholder='Your email' />
                <br />
                <input type="password" placeholder='Your password' />
                <br />
                <button className='submit-btn' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Register;