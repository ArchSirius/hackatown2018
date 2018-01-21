import { connect } from 'react-redux';
import ExploreRequests from './ExploreRequests';
import { taskOperations, taskSelectors } from '../../redux/modules/task';

const mapStateToProps = state => ({
  tasks: taskSelectors.getUnassignedTask(state),
});
const mapDispatchToProps = dispatch => ({});

const ExploreRequestsContainer = connect(mapStateToProps, mapDispatchToProps)(
  ExploreRequests
);

export default ExploreRequestsContainer;
