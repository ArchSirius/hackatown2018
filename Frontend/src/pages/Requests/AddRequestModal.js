import styled from 'styled-components';
import H2 from '../../components/H2';
import Button from '../../components/Button';
import Color from 'color';
import React from 'react';
import Modal from 'react-modal';

// https://www.npmjs.com/package/react-modal
const customStyles = {
  content: {
    width: '600px',
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
  margin: 20px 0;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin: 5px 0;
  width: 100%;
`;

const Input = styled.input`
  height: 25px;
  min-width: 97%;
  padding: 5px;
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

  componentWillMount() {
    Modal.setAppElement('body');
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
        <H2>Create a Request</H2>
        <FormWrapper onSubmit={this.handleSubmit}>
          <Label>
            Name:<br />
            <Input
              type="text"
              value={this.state.name}
              onChange={this.changeName}
            />
          </Label>
          <Label>
            Description: <br />
            <Input
              type="text"
              value={this.state.description}
              onChange={this.changeDescription}
            />
          </Label>
          <Label>
            Address: <br />
            <Input
              type="text"
              value={this.state.address}
              onChange={this.changeAddress}
            />
          </Label>
          <Label>
            Value: <br />
            <Input
              type="text"
              value={this.state.value}
              onChange={this.changeValue}
            />
          </Label>
          <Label>
            Relevant Skills: <br />
            <Input
              type="text"
              value={this.state.relevantSkills}
              onChange={this.changeSkills}
            />
          </Label>
        </FormWrapper>
        <CompleteButton onClick={cancel}>Cancel</CompleteButton>
        <CompleteButton onClick={this.handleSubmit}>Add</CompleteButton>
      </Modal>
    );
  }
}

export default AddRequestModal;
