import * as React from 'react';

const styles = {
  letterSpacing: '42.5%',
};

export const Subtitle: React.FC = () => (
  <div
    className="text-xs font-medium text-gray-200 uppercase tracking-widest"
    style={styles}
  >
    <span className="font-semibold text-pink-600">&lt;</span> Developer{' '}
    <span className="font-semibold text-pink-600">&</span> Designer{' '}
    <span className="font-semibold text-pink-600">/&gt;</span>
  </div>
);
