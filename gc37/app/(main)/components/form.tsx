// SignUpForm.tsx

import React, { useState } from "react";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleConsentChange = () => {
    setConsent(!consent);
  };

  // Disable button if any required field is empty or consent is not given
  React.useEffect(() => {
    setIsButtonDisabled(!(firstName && lastName && email && consent));
  }, [firstName, lastName, email, consent]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center w-80 mx-auto bg-transparent"
    >
      <h1 className="text-center text-5xl font-semibold mb-12">Sign Up</h1>
      <div className="mb-4">
        <input
          type="text"
          id="firstName"
          value={firstName}
          placeholder="First Name"
          onChange={handleFirstNameChange}
          className="bg-white/10 text-white text-sm w-full p-4 rounded"
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          id="lastName"
          value={lastName}
          placeholder="Last Name"
          onChange={handleLastNameChange}
          className="bg-white/10 text-white text-sm w-full p-4 rounded"
        />
      </div>

      <div className="mb-8">
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Email"
          onChange={handleEmailChange}
          className="bg-white/10 text-white text-sm w-full p-4 rounded"
        />
      </div>

      <div className="mb-8">
        <label className="flex items-center text-white text-sm">
          <input
            type="checkbox"
            checked={consent}
            onChange={handleConsentChange}
            className="mr-2"
          />
          I give my consent to RR to get in touch with me using the information
          I provide, for the purpose of news, actions and requests for
          volunteers and/or donations. Data processed in accordance with our
          Privacy Policy.
        </label>
      </div>

      <button
        type="submit"
        disabled={isButtonDisabled}
        className={`bg-white/10 text-white py-2 px-4 rounded ${
          isButtonDisabled && "opacity-50 cursor-not-allowed"
        }`}
      >
        Keep me updated
      </button>
    </form>
  );
};

export default SignUpForm;
