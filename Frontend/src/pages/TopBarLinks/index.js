import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopBarLinks from './TopBarLinks';
import { taskOperations } from '../../redux/modules/task';
import { userOperations, userSelectors } from '../../redux/modules/user';

class TopBarLinksContainer extends Component {
  componentDidMount() {
    this.props.fetchUserProfil();
    this.props.fetchTasks();
  }

  render() {
    return <TopBarLinks {...this.props} />;
  }
}

const mapStateToProps = state => ({
  currentUser: userSelectors.currentUser(state)
});

const mapDispatchToProps = dispatch => ({
  fetchTasks: () => dispatch(taskOperations.fetchTasks()),
  fetchUserProfil: () => dispatch(userOperations.fetchLoggedInClient())
});

TopBarLinksContainer = connect(mapStateToProps, mapDispatchToProps)(
  TopBarLinksContainer
);

export default TopBarLinksContainer;
