import * as React from 'react';
import { Title } from './Title';
import { Subtitle } from './Subtitle';
import { Button } from '../Button';

export const Left: React.FC = () => (
  <div className="flex justify-center items-center flex-1">
    <div className="space-y-12">
      <Title />
      <Subtitle />
      <Button buttonText="Contact Me !" />
    </div>
  </div>
);
