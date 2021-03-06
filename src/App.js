import React, { useState } from 'react';
import validator from 'validator';

const App = () => {
  const [email, setEmail] = useState('');
  const [emailStatus, setEmailStatus] = useState('initial');
  const [error, setError] = useState(false);

  const postData = async () => {
    const response = await fetch(
      'https://simmalugnt.free.beeceptor.com/login',
      {
        method: 'POST',
        body: JSON.stringify({ email: email }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      setError(true);
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const result = await response.json();
    return result;
  };

  const validateEmail = async (e) => {
    e.preventDefault();
    setEmailStatus('loading');
    if (validator.isEmail(email)) {
      await postData();
      setEmailStatus('valid');
    } else {
      setEmailStatus('invalid');
    }
  };

  const handleEmailChange = (input) => {
    setEmail(input);

    if (input !== email) {
      setEmailStatus('initial');
    }
  };

  return (
    <div
      className={`flex flex-col justify-end items-center fixed w-full h-full bg-wave bg-cover bg-center ${
        emailStatus === 'valid'
          ? 'theme-green'
          : emailStatus === 'invalid'
          ? 'theme-red'
          : 'theme-white'
      }`}
    >
      {error && (
        <span className='text-[#FF0000] text-sm text-center w-[342px]'>
          An error has occured, please refresh the page and try again.
        </span>
      )}
      <div className='w-[342px] max-w-full m-6 px-6 py-[72px] rounded-boxRadius bg-primary'>
        <h1 className='text-lg text-secondary font-bold leading-[48px] tracking-tight'>
          Sign up to our newsletter
        </h1>
        <p className='mt-4 text-sm text-secondary font-bold leading-5'>
          Lorem ipsum dolor sit amet, consecte adipiscing elit praesent sodales
          purus magna, eget lacinia sapien hendrerit.
        </p>
        <form
          onSubmit={validateEmail}
          className={`flex justify-between w-full h-12 mt-6 border-4 border-solid border-secondary rounded-inputRadius ${
            emailStatus === 'valid' ? 'p-0' : 'py-1 pl-6 pr-1'
          }`}
        >
          <input
            type='text'
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            placeholder='Email'
            className={`w-full text-md leading-8 tracking-tight placeholder-secondary text-secondary bg-primary outline-none ${
              emailStatus === 'valid' && 'hidden'
            }`}
          ></input>
          <button
            type='submit'
            disabled={emailStatus === 'initial' ? false : true}
            className={`px-4 py-1 bg-secondary text-sm text-primary leading-6 tracking-tight whitespace-nowrap rounded-buttonRadius ${
              emailStatus === 'valid' ? 'm-0 h-full w-full' : 'ml-2'
            }`}
          >
            {emailStatus === 'valid'
              ? 'Thanks!'
              : emailStatus === 'loading'
              ? 'signing up...'
              : emailStatus === 'invalid'
              ? 'invalid email'
              : 'sign up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
