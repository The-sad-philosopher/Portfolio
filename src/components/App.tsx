import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Navbar, Home, About, Project, SinglePost, Post } from './';

const styles = {
  backgroundColor: '#1a1d1e',
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-row h-screen bg-gray-800">
        <Navbar />
        <div className="flex-1" style={styles}>
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
