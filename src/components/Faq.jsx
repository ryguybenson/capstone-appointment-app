import React from 'react';
import { Link } from 'react-router-dom';

function Faq () {
  var header = {
    width: '85%',
    border: '1px solid black',
    textAlign: 'center',
    margin: 'auto',
    marginTop: '2%'
  };
  var main = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '85%',
    border: '1px solid black',
    textAlign: 'center',
    margin: 'auto'
  };
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
  
  return(
    <div>
      <div style={header}>
        <h2>Frequently asked questions and additional links</h2>
      </div>
      <div style={main}>
        <div>
          <p>Q: asdfgfdsgdfgfdgfgsfdgsfdgsgfd <br/>
          A: sdhgdfgdfkghdfkghfkdhgkdfshgfklsh</p>
        </div>
        <div>
          <p>Q: asdfgfdsgdfgfdgfgsfdgsfdgsgfd <br/>
          A: sdhgdfgdfkghdfkghfkdhgkdfshgfklsh</p>
        </div>
        <div>
          <p>Q: asdfgfdsgdfgfdgfgsfdgsfdgsgfd <br/>
          A: sdhgdfgdfkghdfkghfkdhgkdfshgfklsh</p>
        </div>
        <div>
          <p>Q: asdfgfdsgdfgfdgfgsfdgsfdgsgfd <br/>
          A: sdhgdfgdfkghdfkghfkdhgkdfshgfklsh</p>
        </div>
        <div>
          <p>Q: asdfgfdsgdfgfdgfgsfdgsfdgsgfd <br/>
          A: sdhgdfgdfkghdfkghfkdhgkdfshgfklsh</p>
        </div>
      </div>
      <div style={buttons}>
        <Link to="/form">Back</Link>
        <Link to="/">Finish</Link>
      </div>
    </div>
  );
}

export default Faq;