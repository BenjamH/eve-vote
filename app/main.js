import React from 'react';
import Router from 'react-router';
import routes from './routes';

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler />, document.getElementById('app'));
});

// entry point for react app. use it in gulpfile.js where browserify will traverse entire tree of dependencies and generate final bundle.jss