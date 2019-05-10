import React from 'react';


function Header() {
  
  var header = {
    height: '10vh',
    width: '100%',
    background: 'blue',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  };
  var hr = {
    width: '25%',
    margin: 'auto'
  };
  return(
    <div style={header}>
      <hr style={hr}/>
      <h1>LOGO</h1>
      <hr style={hr}/>
    </div>
  );
}

export default Header;
