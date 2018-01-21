import React, { Component } from 'react';
import { connect } from 'react-redux';
import Requests from './Requests';
import { taskOperations, taskSelectors } from '../../redux/modules/task';
import { userOperations, userSelectors } from '../../redux/modules/user';

class RequestContainer extends Component {
  componentDidMount() {
    this.props.fetchUserProfil();
    this.props.fetchTasks();
  }

  render() {
    return <Requests {...this.props} />;
  }
}

const mapStateToProps = state => ({
  tasks: taskSelectors.getMyTasks(state),
  currentUser: userSelectors.currentUser(state)
});
const mapDispatchToProps = dispatch => ({
  fetchTasks: () => dispatch(taskOperations.fetchTasks()),
  fetchUserProfil: () => dispatch(userOperations.fetchLoggedInClient()),
  updateTask: (task, applicant) =>
    dispatch(taskOperations.updateTaskApplicant(task, applicant)),
  createTask: task => dispatch(taskOperations.createTask(task)),
  completeTask: task => dispatch(taskOperations.updateTaskStatus(task))
});

RequestContainer = connect(mapStateToProps, mapDispatchToProps)(
  RequestContainer
);

export default RequestContainer;
