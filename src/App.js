
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


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<CreateAccount />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/account" element={<AccountCreated />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
