import React from 'react';
import { Link } from 'react-router-dom';

function SignIn() {
  var signIn = {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid black',
    padding: '2%'
  };
  var signUp = {
    textAlign: 'center'
  };
  return (
    <div>
      <div style={signIn}>
        <input placeholder='text'/>
        <input placeholder='text'/>
        <Link to="/order">Sign In</Link>
      </div>
      <div style={signUp}>
        <button>Sign Up</button>
      </div>
    </div>
  );
}

export default SignIn;