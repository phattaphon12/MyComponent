import React from 'react';
import Otp from './Otp.jsx';

const App = () => {
  const handleOtpSubmit = (otp) => {
    console.log('Entered OTP:', otp);
    // You can perform OTP validation here
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 className='text-red-600x'>Enter OTP</h2>
      <Otp length={6} onSubmit={handleOtpSubmit} />
    </div>
  );
};

export default App;
