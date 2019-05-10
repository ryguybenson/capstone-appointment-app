import React from 'react';

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
        <button>Sign In</button>
      </div>
      <div style={signUp}>
        <button>Sign Up</button>
      </div>
    </div>
  );
}

export default SignIn;