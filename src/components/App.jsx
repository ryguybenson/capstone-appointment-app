import React from 'react';
import Form from './Form';
import Header from './Header';
import Buttons from './Buttons';
import Order from './Order';
import Faq from './Faq';
import SignIn from './SignIn';
import { Switch, Route } from 'react-router-dom';


function App() {
  var main = {
    backgroundColor: '#E5EEF3'
  }
  return (
    <div style={main}>
      <Header/>
      <Switch>
        <Route exact path='/' component={SignIn} />
        <Route path='/order' component={Order} />
        <Route path='/form' component={Form} />
        <Route path='/faq' component={Faq} />
      </Switch>
    </div>
  );
}

export default App;
