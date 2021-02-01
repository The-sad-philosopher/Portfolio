import * as React from 'react';
import { Left } from './Left';
import { Right } from './Right';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <section className="h-screen text-gray-200">
      <main className="flex flex-row h-full">
        <Left />
        <Right />
      </main>
    </section>
  );
};
