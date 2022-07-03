import React, { useState } from 'react';

const App = () => {
  const [email, setEmail] = useState('');

  const validateEmail = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className='flex items-end justify-center w-full min-h-screen bg-wave bg-cover bg-center theme-white'>
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
          className='flex justify-between w-full h-12 mt-6 py-1 pl-6 pr-1 border-4 border-solid border-secondary rounded-inputRadius '
        >
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            className='w-full text-md leading-8 tracking-tight placeholder-secondary text-secondary bg-primary'
          ></input>
          <button
            type='submit'
            className='ml-2 px-4 py-1 bg-secondary text-sm text-primary leading-6 tracking-tight whitespace-nowrap rounded-buttonRadius'
          >
            sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
