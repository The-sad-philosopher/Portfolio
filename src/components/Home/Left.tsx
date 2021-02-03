import * as React from 'react';
import { Title } from './Title';
import { Subtitle } from './Subtitle';
import { Button } from '../Button';

const styles = {
  fontFamily: '"La Belle Aurore", cursive',
  color: '#7e7e7e',
  opacity: '0.8',
  fontSize: '30px',
};

export const Left: React.FC = () => (
  <div className="flex justify-center items-center flex-1 relative">
    <div className="absolute top-16 left-10" style={styles}>
      &lt;body&gt;
    </div>
    <div className="space-y-12">
      <Title />
      <Subtitle />
      <Button buttonText="Contact Me !" />
    </div>
    <div className="absolute bottom-20 left-16" style={styles}>
      &lt;/body&gt;
    </div>
    <div className="absolute bottom-8 left-4" style={styles}>
      &lt;/html&gt;
    </div>
  </div>
);
