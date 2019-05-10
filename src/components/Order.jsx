import React from 'react';
import { Link } from 'react-router-dom';

function Order() {
  var list = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  };
  var border = {
    border: '1px solid black',
    width: '80%',
    margin: 'auto',
    marginTop: '2%',
    backgroundColor: '#9ed3eb'
  }
  var buttons = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    postition: 'fixed',
    bottom: '5%',
    width: '50%',
    margin: 'auto',
    marginTop: '1%'
  };
  var hr = {
    width: '90%',
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
        <Link to="/form">Begin</Link>
      </div>
    </div>
  );
}

export default Order;