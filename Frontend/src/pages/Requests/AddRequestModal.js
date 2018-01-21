import styled from 'styled-components';
import H2 from '../../components/H2';
import Button from '../../components/Button';
import NumberPicker from '../../components/NumberPicker';
import skillsConstants from '../../constants/skillsConstants';
import { skillsToShow } from '../../constants/skillsConstants';
import Color from 'color';
import React from 'react';
import Modal from 'react-modal';
var Tooltip = require('pui-react-tooltip').Tooltip;
var OverlayTrigger = require('pui-react-overlay-trigger').OverlayTrigger;

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

const Skills = styled.div`display: flex;`;
const Skill = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
`;
const SkillImage = styled.img`
  margin: 5px;
  height: 25px;
`;

class AddRequestModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      address: '',
      value: '',
      cooking: false,
      strong: false,
      carpentry: false,
      painting: false,
      plumbing: false,
      driving: false,
      writing: false,
      animalcare: false,
      cleaning: false,
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
    let relevantSkills = [];
    skillsToShow.map(skill => {
      this.state[skill] ? relevantSkills.push(skill) : null;
    });
    this.props.submit({
      name: this.state.name,
      description: this.state.description,
      address: this.state.address,
      value: this.state.value,
      relevantSkills,
    });
  };

  toggleSkill = skill => {
    this.setState({ [skill]: !this.state[skill] });
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
          <Skills>
            {skillsToShow.map((skill, index) => (
              <OverlayTrigger
                key={index}
                placement="bottom"
                overlay={<Tooltip>{skillsConstants[skill].tooltip}</Tooltip>}
              >
                <Skill
                  key={index}
                  className="overlay-trigger"
                  tabIndex="0"
                  onClick={() => this.toggleSkill(skill)}
                >
                  {!this.state[skill] ? (
                    <SkillImage src={skillsConstants[skill].iconPath} alt="" />
                  ) : (
                    <SkillImage
                      src={skillsConstants[skill].selIconPath}
                      alt=""
                    />
                  )}
                </Skill>
              </OverlayTrigger>
            ))}
          </Skills>
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
