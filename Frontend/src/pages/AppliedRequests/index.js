import { connect } from 'react-redux';
import AppliedRequests from './AppliedRequests';

const tasks = [
  {
    id: 1,
    name: 'Shovel my parking',
    category: 'Category',
    description: 'I need someone strong to shovel my parking',
    carepoints: 100,
    creator: 1,
    applicants: [
      { id: 1, name: 'Bob Gratton' },
      { id: 2, name: 'Bob Gratton' },
    ],
    chosen: undefined,
    done: false,
  },
  {
    id: 2,
    name: 'Shovel my parking',
    category: 'Category',
    description: 'I need someone strong to shovel my parking',
    carepoints: 100,
    creator: 1,
    applicants: [
      { id: 1, name: 'Bob Gratton' },
      { id: 2, name: 'Bob Gratton' },
      { id: 3, name: 'Bob Gratton' },
    ],
    chosen: undefined,
    done: false,
  },
  {
    id: 3,
    name: 'Shovel my parking',
    category: 'Category',
    description: 'I need someone strong to shovel my parking',
    carepoints: 100,
    creator: 1,
    applicants: [],
    chosen: undefined,
    done: false,
  },
  {
    id: 4,
    name: 'Shovel my parking',
    category: 'Category',
    description: 'I need someone strong to shovel my parking',
    carepoints: 100,
    creator: 3,
    applicants: [
      { id: 1, name: 'Bob Gratton' },
      { id: 2, name: 'Bob Gratton' },
    ],
    chosen: 2,
    done: false,
  },
];

const mapStateToProps = state => ({
  tasks,
});
const mapDispatchToProps = dispatch => ({});

const AppliedRequestsContainer = connect(mapStateToProps, mapDispatchToProps)(
  AppliedRequests
);

export default AppliedRequestsContainer;
