import * as React from 'react';

const styles = {
  color: '#F84D6C',
};

export const Title: React.FC = () => (
  <div className="text-5xl font-bold tracking-wide space-y-4">
    <div>Hi,</div>
    <div>
      I'm <span style={styles}>S</span>hinu Donney,
    </div>
    <div>
      Developer.<span className="font-normal animate-ping">|</span>
    </div>
  </div>
);
