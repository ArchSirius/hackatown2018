import { connect } from 'react-redux';
import AppliedRequests from './AppliedRequests';
import { taskSelectors } from '../../redux/modules/task';
import { userSelectors } from '../../redux/modules/user';

const mapStateToProps = state => ({
  tasks: taskSelectors.getAppliedTasks(state),
  currentUser: userSelectors.currentUser(state)
});
const mapDispatchToProps = dispatch => ({});

const AppliedRequestsContainer = connect(mapStateToProps, mapDispatchToProps)(
  AppliedRequests
);

export default AppliedRequestsContainer;
