import React from 'react';
import {RouteHandler} from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <RouteHandler />
        <Footer />
      </div>
   );
  }
}

export default App;

// RouteHandler is component that renders the active child route handler. It will render one of following component based on URL path: Home, Top 100, Profile or Add Character