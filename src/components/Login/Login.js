import React, { useContext, useState } from 'react';
import "firebase/auth";
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './loginManager';
import './Login.css';

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    });
    initializeLoginFramework();


    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true)
            })
    }

    const fbSignIn = () => {
        handleFbSignIn()
            .then(res => {
                handleResponse(res, true)
            })
    }

    const signOut = () => {
        handleSignOut()
            .then(res => {
                handleResponse(res, false);
            })
    }

    const handleResponse = (res, redirect) => {
        setUser(res)
        setLoggedInUser({ ...res, name: res.displayName });
        if (redirect) {
            history.replace(from);

            // history.push('/booking')

        }
    }

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            const isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
            if (!isFieldValid) {
                alert("Please enter correct email address");
            }
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = (isPasswordValid && passwordHasNumber);
            if (newUser) {
                if (!isPasswordValid) {
                    alert("Please enter minimum 6 character with number value");
                }
            }

        }

        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {



        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true)

                })
        }
        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {

                    console.log(res);
                    handleResponse(res, true)
                })
        }

        e.preventDefault();
    }



    return (
        <div className="login-page" style={{ textAlign: 'center' }}>

            <form className="form-style " onSubmit={handleSubmit}>
                <h1 > {newUser ? 'Create an account' : 'Log In'}</h1>

                {
                    newUser && <input name="name" type="text" onBlur={handleBlur} placeholder="Your name" />
                }
                <br />
                <br />
                <input type="email" name="email" onBlur={handleBlur} placeholder="Enter email address" required />

                <br />
                <br />
                <input type="password" name="password" onBlur={handleBlur} placeholder="Password" required />
                <br />
                <br />
                {
                    newUser && <input type='password' name='password' onBlur={handleBlur} placeholder='confirm password' className='long' />
                }
                <br />
                <br />
                <input type="submit" value={newUser ? 'Sign Up' : 'Sign In'} />
            </form>

            <p style={{ color: 'red' }}>{user.error}</p>
            {
                user.success && <p style={{ color: 'green' }}>User {newUser ? 'Created' : 'Logged in'} Successfully</p>
            }

            <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />

            <label htmlFor="newUser"> <strong>Don't have an account? Sign Up</strong> </label>


            <h5>Or</h5>

            {
                user.isSignedIn ? <button onClick={signOut} >Sign Out</button> :
                    <button onClick={googleSignIn} style={{ borderRadius: '40px', backgroundColor: 'white', width: '25%', height: '40px' }}>  Continue with Google  </button>

            }
            <br />
            <br />
            <Link to='' className="fb btn" onClick={fbSignIn} style={{ border: '1px solid black', borderRadius: '40px', width: '25%', marginBottom: '20px', height: '40px' }} >Continue with Facebook </Link>

            {
                user.isSignedIn && <div>
                    <p> Welcome, {user.name}</p>
                    <p>Your email: {user.email}</p>
                </div>
            }

        </div>
    );
};

export default Login;