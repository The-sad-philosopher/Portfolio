import * as React from 'react';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <section className="h-screen text-gray-200">
      <main className="flex flex-row h-full">
        <div className="flex justify-center items-center flex-1">
          <div className="space-y-12">
            <div className="text-5xl font-bold tracking-wide space-y-4">
              <div>Hi,</div>
              <div>
                I'm <span className="text-pink-600">S</span>hinu Donney,
              </div>
              <div>
                Developer.<span className="font-normal animate-ping">|</span>
              </div>
            </div>
            <div className="text-sm font-medium text-gray-400 uppercase tracking-widest">
              <span className="font-semibold text-pink-600">&lt;</span>{' '}
              Developer <span className="font-semibold text-pink-600">&</span>{' '}
              Designer{' '}
              <span className="font-semibold text-pink-600">/&gt;</span>
            </div>
            <button className="bg-gradient-to-b from-red-600 to-pink-700 px-6 py-2 font-medium rounded-sm shadow-md">
              Contact Me !
            </button>
          </div>
        </div>
        <div className="right flex-1">{/* Illustration / animation */}</div>
      </main>
    </section>
  );
};
