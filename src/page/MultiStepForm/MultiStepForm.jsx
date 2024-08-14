import React, { useState } from "react";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    phoneNumber: "",
    name: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (next step)
  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1 && !formData.phoneNumber) {
      alert("Phone number is required");
      return;
    }
    if (step === 2 && !formData.name) {
      alert("Name is required");
      return;
    }
    setStep(step + 1);
  };

  // Handle going back to the previous step
  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div>
      {step === 1 && (
        <form onSubmit={handleNext}>
          <h2>Step 1: Enter Phone Number</h2>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          <button type="submit">Next</button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleNext}>
          <h2>Step 2: Enter Name</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <button type="button" onClick={handleBack}>
            Back
          </button>
          <button type="submit">Next</button>
        </form>
      )}

      {step === 3 && (
        <div>
          <h2>Step 3: Complete Form</h2>
          <p>Phone Number: {formData.phoneNumber}</p>
          <p>Name: {formData.name}</p>
          <button type="button" onClick={handleBack}>
            Back
          </button>
          <button type="button" onClick={() => alert("Form submitted!")}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
