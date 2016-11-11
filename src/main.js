"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var InitializeActions = require('./actions/initializeActions');

InitializeActions.initApp();

// Router.HistoryLocation for History API

Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
