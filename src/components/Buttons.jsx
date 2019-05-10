import React from 'react';


function Buttons() {
  var buttons = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    postition: 'fixed',
    bottom: '5%',
    width: '50%',
    margin: 'auto',
    marginTop: '1%'
  }
  return (
    <div style={buttons}>
      <button>Back</button>
      <button>Next</button>
    </div>
  );
}

export default Buttons;