import React, { useState } from 'react';
import './Otp.css'

const OTPInput = ({ length, onSubmit }) => {
  const [otp, setOtp] = useState(Array(length).fill(''));

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Keep only the last digit
    setOtp(newOtp);

    // Move focus to the next input if the current one is filled
    if (value && index < length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  const handleSubmit = () => {
    const otpValue = otp.join('');
    onSubmit(otpValue);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="number"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            style={{
              width: '40px',
              height: '40px',
              fontSize: '20px',
              textAlign: 'center',
              marginRight: '5px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              MozAppearance: 'textfield', // For Firefox
            }}
          />
        ))}
      </div>
      <button onClick={handleSubmit} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Submit OTP
      </button>
    </div>
  );
};

export default OTPInput;
