import React from 'react';

function Order() {
  var list = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '80%',
    paddingLeft: '30%'
  };
  var border = {
    border: '1px solid red',
    width: '80%',
    margin: 'auto',
    marginTop: '2%'
  }
  var buttons = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    postition: 'fixed',
    bottom: '5%',
    width: '50%',
    margin: 'auto',
    marginTop: '1%'
  };
  var hr = {
    width: '60%',
    margin: 'auto'
  };
  return(
    <div>
      <div style={border}>
        <div style={list}>
          <h3>1</h3>
          <h3>First item</h3>
        </div>
        <hr style={hr}/>
        <div style={list}>
          <h3>2</h3>
          <h3>Second item</h3>
        </div>
        <hr style={hr}/>
        <div style={list}>
          <h3>3</h3>
          <h3>Third item</h3>
        </div>
        <hr style={hr}/>
        <div style={list}>
          <h3>4</h3>
          <h3>Fourth item</h3>
        </div>
        <hr style={hr}/>
        <div style={list}>
          <h3>5</h3>
          <h3>Fifth item</h3>
        </div>
      </div>
      <div style={buttons}>
        <button>Back</button>
        <button>Next</button>
      </div>
    </div>
  );
}

export default Order;