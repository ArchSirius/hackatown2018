import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import { ThemeProvider } from 'styled-components';
import createStore from './redux/create';
import { connect } from 'react-redux';
import * as themes from './themes';
import * as pages from './pages';
import React from 'react';

const { App, Requests, NotFound } = pages;

const initialState = {};
export const store = createStore(initialState);

class Root extends React.Component {
  render() {
    return (
      <ThemeProvider theme={themes['light']}>
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRedirect to="/requests" />
            <Route component={Requests}>
              <Route path="/requests" component={Requests} />
            </Route>
            <Route path="*" component={NotFound} />
          </Route>
        </Router>
      </ThemeProvider>
    );
  }
}
export default connect(null, null)(Root);
