
import React from 'react';
import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom';
import './App.css';
import CreateEmailAccount from './components/createEmailAccount/createEmailAccount';
import RegistrationForm from './components/RegistrationForm/registrationForm';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<CreateEmailAccount />} />
          <Route path="/registration" element={<RegistrationForm />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
