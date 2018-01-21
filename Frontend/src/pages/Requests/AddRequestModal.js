import styled from 'styled-components';
import H2 from '../../components/H2';
import Button from '../../components/Button';
import NumberPicker from '../../components/NumberPicker';
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
    transform: 'translate(-50%, -50%)',
  },
};

const CompleteButton = styled(Button)`
  justify-content: flex-end;
  background-color: ${props => props.theme.palette.primary};
  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.palette.primaryDark}
`;

const FormWrapper = styled.form`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  outline: none;
  appearance: none;
  background-color: transparent;
  border: 1.5px solid ${props => props.theme.palette.border};
  border-radius: 3px;
  font-size: 16px;
  transition: border 0.25s ease-in-out;
  &:focus {
    border-color: ${props => props.theme.palette.primary};
    outline: 0;
    box-shadow: none;
  }
`;

const StyledNumberPicker = styled(NumberPicker)`margin-bottom: 10px;`;

const StyledLabel = styled.label`
  font-weight: 600;
  margin: 15px 0 5px 0;
  width: 100%;
`;

const Column = styled.div`margin-top: 15px;`;

const CarePoints = styled.div`padding-right: 25px;`;

const Buttons = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
`;

class AddRequestModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      address: '',
      value: '',
      relevantSkills: '',
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

  changeValue = newValue => {
    this.setState({ value: newValue });
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
          <StyledLabel>Name</StyledLabel>
          <Input
            type="text"
            value={this.state.name}
            onChange={this.changeName}
          />
          <StyledLabel>Description</StyledLabel>
          <Input
            type="text"
            value={this.state.description}
            onChange={this.changeDescription}
          />
          <StyledLabel>Address</StyledLabel>
          <Input
            type="text"
            value={this.state.address}
            onChange={this.changeAddress}
          />
          <StyledLabel>Relevant Skills</StyledLabel>
          <Input
            type="text"
            value={this.state.relevantSkills}
            onChange={this.changeSkills}
          />
          <StyledLabel>Care Points</StyledLabel>
          <StyledNumberPicker
            input={{
              value: this.state.value ? this.state.value : 0,
              onChange: this.changeValue,
            }}
          />
        </FormWrapper>
        <Buttons>
          <CompleteButton btnType="primary" onClick={this.handleSubmit}>
            Submit for kindness
          </CompleteButton>
          <CompleteButton btnType="primary" onClick={cancel}>
            Cancel
          </CompleteButton>
        </Buttons>
      </Modal>
    );
  }
}

export default AddRequestModal;
