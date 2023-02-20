
import React from 'react';
import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom';
import './App.css';
import CreateAccount from './components/createAccount/createAccount';
import RegistrationForm from './components/registrationForm/registrationForm';
import AccountCreated from './components/accountCreated/accountCreated';
import SignIn from './components/signIn/signIn';
import SignInMail from './components/signInMail/signInMail';
import TestPage from './components/testPage/testPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<CreateAccount />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/account" element={<AccountCreated />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/mailSignIn" element={<SignInMail />} />
          <Route path ="/test" element={<TestPage/>}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
