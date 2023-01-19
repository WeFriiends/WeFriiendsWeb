
import React from 'react';
import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom';
import './App.css';
import CreateEmailAccount from './components/createEmailAccount/createEmailAccount';
import RegistrationForm from './components/registrationForm/registrationForm';
import AccountCreated from './components/accountCreated/accountCreated';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<CreateEmailAccount />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/account" element={<AccountCreated />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
