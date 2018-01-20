import { connect } from 'react-redux';
import RequestView from './RequestView';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

const RequestContainer = connect(mapStateToProps, mapDispatchToProps)(
  RequestView
);

export default RequestContainer;
