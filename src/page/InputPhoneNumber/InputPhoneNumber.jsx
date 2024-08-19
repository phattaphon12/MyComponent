import React, { useState } from 'react';

function PhoneNumberInput() {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Phone number submitted: ${phoneNumber}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <div className="phone text-3xl font-bold">Phone Number : </div>
        <input
          type="tel"
          value={phoneNumber}
          onChange={handleChange}
          placeholder="Enter your phone number"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default PhoneNumberInput;
