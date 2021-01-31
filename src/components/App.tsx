import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, About, Project, SinglePost, Post } from './';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={Project} path="/project" />
        <Route component={SinglePost} path="/post/:slug" />
        <Route component={Post} path="/post" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
