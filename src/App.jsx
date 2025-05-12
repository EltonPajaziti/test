import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';

const Welcome = () => {
  const token = localStorage.getItem('token');

  return (
    <div style={{ color: 'white', textAlign: 'center', marginTop: '20%' }}>
      {token ? <h1>WELCOME</h1> : <h1>Unauthorized</h1>}
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
}

export default App;
