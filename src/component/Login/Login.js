import React from 'react';
import useFirebase from '../Hooks/useFirebase';
import './Login.css'

const Login = () => {
    const { singInWithGoogle } = useFirebase();
    return (
        <div>
            <h2>Plase login</h2>
            <button onClick={singInWithGoogle} className='google-login'>Google login</button>
            <form className='logIn-form'>
                <input type="email" placeholder='Your email' />
                <br />
                <input type="password" placeholder='Your password' />
                <br />
                <button className='submit-btn' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Login;