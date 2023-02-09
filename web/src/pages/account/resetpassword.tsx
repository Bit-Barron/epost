import React, { useState } from 'react';

import AuthInput from '../../components/elements/auth/AuthInput';
import AuthButton from '../../components/elements/auth/AuthButton';
import PostHeader from '../../components/elements/headings/PostHeader';
import axios from 'axios';

interface resetpasswordProps {}

const Resetpassword: React.FC<resetpasswordProps> = ({}) => {
  const [email, setMail] = useState('crackstein@hotmail.com');

  const handleSubmit = async () => {
    await axios.post('/mail/send-email', {
      email,
    });
  };

  return (
    <div>
      <PostHeader />

      <div className="flex justify-center mt-10">
        <h1 className="text-5xl font-bold">Password Reset</h1>
      </div>
      <div className="flex justify-center mt-10">
        Enter your Spotify username, or the email address that you <br /> used
        to register. Well send you an email with your username <br />
      </div>
      <div className="flex justify-center">
        and a link to reset your password.
      </div>
      <form>
        <AuthInput
          type={''}
          value={email}
          className="w-96"
          onChange={setMail}
          label={'Email address or username'}
          placeholder="Email address or username"
        />
        <div>
          <AuthButton
            name={'Send'}
            className={''}
            onClick={() => handleSubmit()}
          />
          <span className="flex justify-center mt-5">
            If you still need help, contact{' '}
            <span className="underline ml-2">Spotify Support</span>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Resetpassword;
