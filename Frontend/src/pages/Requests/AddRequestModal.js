import styled from 'styled-components';
import H3 from '../../components/H3';
import Button from '../../components/Button';
import Color from 'color';
import React from 'react';
import Modal from 'react-modal';

// https://www.npmjs.com/package/react-modal
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const CompleteButton = styled(Button)`
  justify-content: flex-end;
  background-color: ${props => props.theme.palette.primary};
  &:hover {
    cursor: pointer;
    background-color: ${props =>
      Color(props.theme.palette.primary)
        .fade(0.3)
        .toString()};
  }
`;

const FormWrapper = styled.form`
  max-width: 500px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  width: 100%;
`;

class AddRequestModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      address: '',
      value: '',
      relevantSkills: ''
    };
  }

  changeName = event => {
    this.setState({ name: event.target.value });
  };

  changeDescription = event => {
    this.setState({ description: event.target.value });
  };

  changeAddress = event => {
    this.setState({ address: event.target.value });
  };

  changeValue = event => {
    this.setState({ value: event.target.value });
  };

  changeSkills = event => {
    this.setState({ relevantSkills: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.submit(this.state);
  };

  render() {
    const { isOpen, cancel } = this.props;
    return (
      <Modal isOpen={isOpen} style={customStyles} contentLabel="Add Request">
        <FormWrapper onSubmit={this.handleSubmit}>
          <Label>
            Name:
            <input
              type="text"
              value={this.state.name}
              onChange={this.changeName}
            />
          </Label>
          <label>
            Description:
            <input
              type="text"
              value={this.state.description}
              onChange={this.changeDescription}
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              value={this.state.address}
              onChange={this.changeAddress}
            />
          </label>
          <label>
            Value:
            <input
              type="text"
              value={this.state.value}
              onChange={this.changeValue}
            />
          </label>
          <label>
            Relevant Skills:
            <input
              type="text"
              value={this.state.relevantSkills}
              onChange={this.changeSkills}
            />
          </label>
        </FormWrapper>
        <CompleteButton onClick={cancel}>Cancel</CompleteButton>
        <CompleteButton onClick={this.handleSubmit}>Add</CompleteButton>
      </Modal>
    );
  }
}

export default AddRequestModal;
