import * as React from 'react';

interface ButtonProps {
  buttonText: string;
}

const styles = {
  filter:
    'drop-shadow(0px 100px 189px rgba(11, 11, 11, 0.07)), drop-shadow(0px 41.7776px 78.9597px rgba(11, 11, 11, 0.0503198)), drop-shadow(0px 22.3363px 42.2156px rgba(11, 11, 11, 0.0417275)), drop-shadow(0px 12.5216px 23.6657px rgba(11, 11, 11, 0.035)), drop-shadow(0px 6.6501px 12.5687px rgba(11, 11, 11, 0.0282725)), drop-shadow(0px 2.76726px 5.23011px rgba(11, 11, 11, 0.0196802))',
};

export const Button: React.FC<ButtonProps> = ({ buttonText }) => (
  <button
    className="bg-gradient-to-b from-red-600 to-pink-700 px-6 py-2 font-medium rounded-sm shadow-md"
    style={styles}
  >
    {buttonText}
  </button>
);
