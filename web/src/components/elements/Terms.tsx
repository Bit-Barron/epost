import React from 'react';

interface TermsProps {}

const Terms: React.FC<TermsProps> = ({}) => {
  return (
    <label
      htmlFor='helper-checkbox'
      className='font-medium text-gray-900 dark:text-gray-300'
    >
      I hereby agree to the Terms of Service and consent to the <br />
      collection, processing and use of my personal data, as <br />
      described in more detail in the Privacy Statement.
    </label>
  );
};

export default Terms;
