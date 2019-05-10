import React from 'react';
import Form from './Form';
import Header from './Header';
import Buttons from './Buttons';
import Order from './Order';
import Faq from './Faq';
import SignIn from './SignIn';


function App() {

  return (
    <div>
      <Header/>
      <Form/>
      <Buttons/>
      <Order/>
      <SignIn/>
      <Faq/>
    </div>
  );
}

export default App;
