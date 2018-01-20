import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import { ThemeProvider } from 'styled-components';
import createStore from './redux/create';
import { connect } from 'react-redux';
import * as themes from './themes';
import * as pages from './pages';
import React from 'react';

const { Requests, NotFound } = pages;

const initialState = {};
export const store = createStore(initialState);

class Root extends React.Component {
  componentWillMount() {
    this.props.onMount();
  }

  render() {
    const {
      onLoginEnter,
      /*locale, theme*/
    } = this.props; // Locale and theme in account redux state
    const intlData = {
      locale: 'fr',
      messages: i18n['fr'],
    };
    return (
      <IntlProvider key={'fr'} {...intlData}>
        <ThemeProvider theme={themes['light']}>
          <Router history={browserHistory}>
            <Route path="/" component={App}>
              <IndexRedirect to="/login" />
              <Route component={Auth}>
                <Route path="/login" onEnter={onLoginEnter} component={Login} />
                <Route path="/register" component={Register} />
                {/*<Route
                  path="/begin-password-reset"
                  component={BeginPasswordResetContainer}
                />
                <Route
                  path="/complete-password-reset"
                  component={CompletePasswordResetContainer}
                />
                <Route
                  path="/success-new-client"
                  component={SuccessNewClient}
                /> */}
              </Route>
              <Route path="/dashboard" component={Dashboard}>
                <IndexRedirect to="/dashboard/pools" />
                <Route path="/dashboard/pools" component={PoolsView} />
              </Route>
              <Route path="*" component={NotFound} />
            </Route>
          </Router>
        </ThemeProvider>
      </IntlProvider>
    );
  }
}

const mapStateToProps = ({ account, auth }) => {
  // const { loading, token } = auth;
  // const { locale, theme } = account;
  return {
    /*locale, theme, loading, token*/
  };
};
const mapDispatchToProps = dispatch => ({
  onMount: () => dispatch(authOperations.loadProfile(get('token'))),
  onLoginEnter: () => {
    const state = store.getState();
    if (authSelectors.isAuthenticated(state)) {
      browserHistory.push('dashboard');
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
