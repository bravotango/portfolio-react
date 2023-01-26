import React, { useState } from 'react';
import validator from 'validator';
import './Form.css';

const Form = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  // initial state set to true so error messages don't show by default
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidName, setIsValidName] = useState(true);
  const [isValidMessage, setIsValidMessage] = useState(true);
  const [isFormValid, setIsFormValid] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleNameChange(e) {
    setName(e.target.value);
    if (e.target.value.length > 0) {
      setIsValidName(true);
    }
    checkIfFormIsValid();
  }

  function handleNameBlur(e) {
    if (e.target.value.length < 1) {
      setIsValidName(false);
    } else {
      setIsValidName(true);
    }
    checkIfFormIsValid();
  }

  function handleEmailBlur(e) {
    setIsValidEmail(validator.isEmail(e.target.value));
    checkIfFormIsValid();
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
    setIsValidEmail(validator.isEmail(e.target.value));
    checkIfFormIsValid();
  }

  function handleMessageChange(e) {
    setMessage(e.target.value);
    if (e.target.value.length > 0) {
      setIsValidMessage(true);
    }
    checkIfFormIsValid();
  }

  function handleMessageBlur(e) {
    if (e.target.value.length < 1) {
      setIsValidMessage(false);
    }
    checkIfFormIsValid();
  }

  function checkIfFormIsValid() {
    if (
      isValidName &&
      isValidEmail &&
      isValidMessage &&
      name.length > 0 &&
      email.length > 0 &&
      message.length > 0
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }

  // function displayError(additionalText) {
  //   return (
  //     additionalText && (
  //       <span className='error'>{additionalText && `${additionalText}`}</span>
  //     )
  //   );
  // }

  function getClass(input, isValid) {
    return `input-wrapper ${
      !isValid ? 'error' : input.length > 0 ? 'valid' : ''
    }`;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className={getClass(name, isValidName)}>
          <label htmlFor='name'>Your name:</label>
          <input
            name='name'
            id='name'
            value={name}
            type='text'
            onChange={handleNameChange}
            onBlur={handleNameBlur}
          />
        </div>
      </div>
      <div>
        <div className={getClass(email, isValidEmail)}>
          <label htmlFor='email'>Your email: </label>
          <input
            name='email'
            id='email'
            value={email}
            type='text'
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
          />
        </div>
      </div>
      <div>
        <div className={getClass(message, isValidMessage)}>
          <label htmlFor='message'>Message:</label>
          <textarea
            name='message'
            id='message'
            value={message}
            onChange={handleMessageChange}
            onBlur={handleMessageBlur}
          ></textarea>
        </div>
      </div>
      <div className='footer'>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default Form;
