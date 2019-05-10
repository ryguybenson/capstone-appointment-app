import React from 'react';
import { Link } from 'react-router-dom';

function SignIn() {
  var signIn = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    border: '1px solid black',
    padding: '2%',
    height: '20vh',
    width: '60%',
    margin: 'auto',
    marginTop: '2%',
    textAlign: 'center',
    backgroundColor: '#9ed3eb'
  };
  var signUp = {
    textAlign: 'center',
    marginTop: '2%'
  };
  return (
    <div>
      <div style={signIn}>
        <input placeholder='Email'/>
        <input placeholder='Password'/>
        <Link to="/order">Sign In</Link>
      </div>
      <div style={signUp}>
        <button>Sign Up</button>
      </div>
    </div>
  );
}

export default SignIn;