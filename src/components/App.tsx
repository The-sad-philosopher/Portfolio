import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Navbar, Home, About, Project, SinglePost, Post } from './';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-row h-screen">
        <Navbar />
        <div className="flex-1">
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={About} path="/about" />
            <Route component={Project} path="/project" />
            <Route component={SinglePost} path="/post/:slug" />
            <Route component={Post} path="/post" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
