import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import { ThemeProvider } from 'styled-components';
import createStore from './redux/create';
import { connect } from 'react-redux';
import * as themes from './themes';
import * as pages from './pages';
import React from 'react';

const { App, Requests, ExploreRequests, NotFound } = pages;

const initialState = {};
export const store = createStore(initialState);

class Root extends React.Component {
  render() {
    return (
      <ThemeProvider theme={themes['light']}>
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRedirect to="/requests/active" />
            <Route component={Requests}>
              <Route path="/requests/active" component={Requests} />
            </Route>
            <Route component={ExploreRequests}>
              <Route path="/requests" component={ExploreRequests} />
            </Route>
            <Route path="*" component={NotFound} />
          </Route>
        </Router>
      </ThemeProvider>
    );
  }
}
export default connect(null, null)(Root);
