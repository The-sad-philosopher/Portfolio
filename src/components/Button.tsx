import * as React from 'react';

interface ButtonProps {
  buttonText: string;
}

export const Button: React.FC<ButtonProps> = ({ buttonText }) => (
  <button className="bg-gradient-to-b from-red-600 to-pink-700 px-6 py-2 font-medium rounded-sm shadow-md">
    {buttonText}
  </button>
);
