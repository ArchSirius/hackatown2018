import { connect } from 'react-redux';
import AppliedRequests from './AppliedRequests';
import { taskOperations, taskSelectors } from '../../redux/modules/task';

const mapStateToProps = state => ({
  tasks: taskSelectors.getAppliedTasks(state),
});
const mapDispatchToProps = dispatch => ({});

const AppliedRequestsContainer = connect(mapStateToProps, mapDispatchToProps)(
  AppliedRequests
);

export default AppliedRequestsContainer;
