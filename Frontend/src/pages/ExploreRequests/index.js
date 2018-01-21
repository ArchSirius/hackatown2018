import { connect } from 'react-redux';
import ExploreRequests from './ExploreRequests';
import { taskOperations, taskSelectors } from '../../redux/modules/task';
import { userSelectors } from '../../redux/modules/user';

const mapStateToProps = state => ({
  tasks: taskSelectors.getUnassignedTask(state),
  currentUser: userSelectors.currentUser(state),
});
const mapDispatchToProps = dispatch => ({
  updateTask: (task, applicant) =>
    dispatch(taskOperations.addTaskApplicant(task, applicant)),
});

const ExploreRequestsContainer = connect(mapStateToProps, mapDispatchToProps)(
  ExploreRequests
);

export default ExploreRequestsContainer;
