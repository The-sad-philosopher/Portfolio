import * as React from 'react';

const styles = {
  letterSpacing: '7px',
};

export const Subtitle: React.FC = () => (
  <div
    className="text-xs font-medium text-gray-400 uppercase tracking-widest"
    style={styles}
  >
    <span className="font-semibold text-pink-600">&lt;</span> Developer{' '}
    <span className="font-semibold text-pink-600">&</span> Designer{' '}
    <span className="font-semibold text-pink-600">/&gt;</span>
  </div>
);
