import * as React from 'react';

const styles_span = {
  color: '#F84D6C',
};

const styles_h1_start = {
  fontFamily: '"La Belle Aurore", cursive',
  color: '#7e7e7e',
  fontSize: '30px',
  top: '-2rem',
  left: '-3rem',
};

const styles_h1_end = {
  fontFamily: '"La Belle Aurore", cursive',
  color: '#CF7585',
  fontSize: '30px',
  bottom: '-1.5rem',
  right: '5rem',
  opacity: '0.5',
};

export const Title: React.FC = () => (
  <div className="text-5xl font-bold tracking-wide space-y-4 relative">
    <div className="absolute text-opacity-80" style={styles_h1_start}>
      &lt;h1&gt;
    </div>
    <div>Hi,</div>
    <div>
      I'm <span style={styles_span}>S</span>hinu Donney,
    </div>
    <div>
      Developer.<span className="font-normal animate-ping">|</span>
    </div>
    <div className="absolute text-opacity-80" style={styles_h1_end}>
      &lt;h1/&gt;
    </div>
  </div>
);
