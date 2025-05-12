import React from 'react';

const Welcome = () => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <h2 style={{ color: 'red', textAlign: 'center', marginTop: '20%' }}>Unauthorized access</h2>;
  }

  return (
    <div style={{
      height: '100vh',
      background: 'linear-gradient(to bottom right, #00c6ff, #0072ff)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '2rem',
      fontWeight: 'bold'
    }}>
      WELCOME 🎉
    </div>
  );
};

export default Welcome;
