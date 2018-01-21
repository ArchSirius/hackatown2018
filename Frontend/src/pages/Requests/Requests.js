import styled from 'styled-components';
import Pannel from '../../components/Pannel';
import Button from '../../components/Button';
import AppliedRequests from '../AppliedRequests';
import H2 from '../../components/H2';
import H3 from '../../components/H3';
import Color from 'color';
import React from 'react';
import AddRequestModal from './AddRequestModal';
import skillsConstants from '../../constants/skillsConstants';
var Tooltip = require('pui-react-tooltip').Tooltip;
var OverlayTrigger = require('pui-react-overlay-trigger').OverlayTrigger;

const RequestsBody = styled.div`padding: 0 100px;`;

const YourRequests = styled.div`
  display: flex;
  align-items: center;
`;

const AddRequest = styled.div`
  margin: 10px;
  color: ${props => props.theme.palette.primary};
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.palette.primaryDark}
`;

const YourRequestCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const RequestCard = styled(Pannel)`
  margin: 20px;
  min-height: 215px;
  min-width: 450px;
`;

const StyledH3 = styled(H3)`margin: 5px 5px 15px 5px;`;

const ApplicantWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: ${props => (props.isChosen ? props.theme.palette.primary : null)};
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.palette.primary};
  }
`;
const ApplicantNames = styled.div`margin: 0 5px;`;
const Applicant = styled.div`
  display: flex;
  flex-basis: 50%;
  align-items: center;
`;
const Skills = styled.div`
  display: flex;
  justify-content: center;
  flex-basis: 50%;
`;
const Skill = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
`;
const Points = styled.div`
  font-size: 12px;
  color: ${props => props.theme.palette.textLight};
`;
const SkillImage = styled.img`
  margin: 5px;
  height: 25px;
`;

const Titles = styled.div`
  display: flex;
  padding: 8px 0;
  margin-bottom: 5px;
  font-weight: 600;
`;
const ApplicantTitle = styled.div`flex-basis: 50%;`;
const SkillTitle = styled.div`
  flex-basis: 50%;
  text-align: center;
`;

const Icon = styled.div`
  padding: 5px;
  margin-right: 5px;
`;

const CompleteButton = styled(Button)`
  margin-top: 40px;
  width: 100%;
  justify-content: flex-end;
`;

const EmptyApplicants = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
`;
const CareImage = styled.img`
  margin: 5px;
  height: 50px;
`;
const WaitingText = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.palette.primary};
`;

const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CarePoints = styled.div`
  margin: 5px;
  display: flex;
  align-items: center;
`;
const CarePointsImage = styled.img`
  margin: 5px;
  height: 25px;
`;

const CompleteText = styled.span`margin-left: 10px;`;
const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CharityImage = styled.img`height: 15px;`;

const EmptyState = () => (
  <EmptyApplicants>
    <CareImage src="/assets/skills/care.png" alt="" />
    <WaitingText>Waiting for kindness...</WaitingText>
  </EmptyApplicants>
);

class RequestView extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
    };
  }

  selectApplicant = (task, applicant) => {
    this.props.updateTask(task, applicant);
  };

  onCompleteTask = task => {
    this.props.completeTask(task);
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  submit = task => {
    this.setState({ modalIsOpen: false });
    this.props.createTask({ ...task, creator: this.props.currentUser._id });
  };

  render() {
    const { tasks } = this.props;
    return (
      <RequestsBody>
        <YourRequests>
          <H2>Your Requests</H2>
          <AddRequest onClick={this.openModal}>
            <i className="fa fa-plus-circle fa-3x" />
          </AddRequest>
          <AddRequestModal
            isOpen={this.state.modalIsOpen}
            submit={this.submit}
            cancel={this.closeModal}
            ariaHideApp={false}
          />
        </YourRequests>

        <YourRequestCards>
          {tasks
            ? tasks.map((task, index) => (
                <RequestCard key={index}>
                  <CardTitle>
                    <StyledH3>{task.name}</StyledH3>
                    <CarePoints>
                      <CarePointsImage
                        src="/assets/skills/carePoints.png"
                        alt=""
                      />
                      {task.value}
                    </CarePoints>
                  </CardTitle>
                  <ApplicantNames>
                    {task.applicants && task.applicants.length > 0 ? (
                      <Titles>
                        <ApplicantTitle>Choose your giver</ApplicantTitle>
                        <SkillTitle>Skills</SkillTitle>
                      </Titles>
                    ) : null}
                    {task.applicants && task.applicants.length > 0 ? (
                      task.applicants.map(
                        (applicant, index) =>
                          task.chosen === applicant._id || !task.chosen ? (
                            <ApplicantWrapper
                              key={index}
                              onClick={() => {
                                this.selectApplicant(task, applicant);
                              }}
                              isChosen={task.hasOwnProperty('chosen')}
                            >
                              <Applicant>
                                <Icon>
                                  {task.hasOwnProperty('chosen') ? (
                                    <i className="fa fa-check" />
                                  ) : (
                                    <i className="fa fa-circle-o" />
                                  )}
                                </Icon>
                                <span>{applicant.username}</span>
                              </Applicant>
                              <Skills>
                                {applicant.skills
                                  ? applicant.skills.map((skill, index) => (
                                      <OverlayTrigger
                                        key={index}
                                        placement="bottom"
                                        overlay={
                                          <Tooltip>
                                            {
                                              skillsConstants[
                                                skill.name.replace(/\s+/g, '')
                                              ].tooltip
                                            }
                                          </Tooltip>
                                        }
                                      >
                                        <Skill
                                          key={index}
                                          className="overlay-trigger"
                                          tabIndex="0"
                                        >
                                          <Points>{skill.value}</Points>
                                          <SkillImage
                                            src={
                                              skillsConstants[
                                                skill.name.replace(/\s+/g, '')
                                              ].iconPath
                                            }
                                            alt=""
                                          />
                                        </Skill>
                                      </OverlayTrigger>
                                    ))
                                  : null}
                              </Skills>
                            </ApplicantWrapper>
                          ) : null
                      )
                    ) : (
                      <EmptyState />
                    )}
                  </ApplicantNames>
                  {task.chosen && !task.done ? (
                    <CompleteButton btnType="primary">
                      <ButtonContent onClick={() => this.onCompleteTask(task)}>
                        <CharityImage src="/assets/skills/charity.png" alt="" />
                        <CompleteText>Complete your kindness</CompleteText>
                      </ButtonContent>
                    </CompleteButton>
                  ) : null}
                </RequestCard>
              ))
            : null}
        </YourRequestCards>
        <AppliedRequests />
      </RequestsBody>
    );
  }
}

export default RequestView;
