import styled from 'styled-components';
import Pannel from '../../components/Pannel';
import Button from '../../components/Button';
import H2 from '../../components/H2';
import H3 from '../../components/H3';
import Color from 'color';
import React from 'react';

const YourRequests = styled.div`
  display: flex;
  align-items: center;
`;

const AddRequest = styled.div`
  margin: 10px;
  color: ${props => props.theme.palette.primary};
  &:hover {
    cursor: pointer;
    color: ${props =>
      Color(props.theme.palette.primary)
        .fade(0.3)
        .toString()};
  }
`;

const YourRequestCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const RequestCard = styled(Pannel)`
  margin: 20px;
  min-height: 215px;
  min-width: 400px;
`;

const StyledH3 = styled(H3)`margin: 5px;`;

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
  width: 100%;
  justify-content: flex-end;
`;

const EmptyApplicants = styled.div``;

const EmptyState = () => (
  <EmptyApplicants>
    <p>Test</p>
  </EmptyApplicants>
);

class RequestView extends React.Component {
  selectApplicant = id => {
    console.log('SELECT');
  };
  render() {
    const { tasks } = this.props;
    return (
      <div>
        <YourRequests>
          <H2>Your Requests</H2>
          <AddRequest>
            <i className="fa fa-plus-circle fa-2x" />
          </AddRequest>
        </YourRequests>

        <YourRequestCards>
          {tasks
            ? tasks.map((task, index) => (
                <RequestCard key={task.id}>
                  <StyledH3>{task.name}</StyledH3>
                  <ApplicantNames>
                    <Titles>
                      <ApplicantTitle>Applicants</ApplicantTitle>
                      <SkillTitle>Skills</SkillTitle>
                    </Titles>
                    {task.applicants && task.applicants.length > 0 ? (
                      task.applicants.map(
                        applicant =>
                          task.chosen === applicant.id || !task.chosen ? (
                            <ApplicantWrapper
                              key={applicant.id}
                              onClick={() => {
                                this.selectApplicant(5);
                              }}
                              isChosen={task.chosen === applicant.id}
                            >
                              <Applicant>
                                <Icon>
                                  {task.chosen === applicant.id ? (
                                    <i className="fa fa-check" />
                                  ) : (
                                    <i className="fa fa-circle-o" />
                                  )}
                                </Icon>
                                <span>Bob Gratton</span>
                              </Applicant>
                              <Skills>
                                <Skill>
                                  <Points>100</Points>
                                  <SkillImage
                                    src="/assets/skills/carpenter.png"
                                    alt=""
                                  />
                                </Skill>
                                <Skill>
                                  <Points>10</Points>
                                  <SkillImage
                                    src="/assets/skills/cooker.png"
                                    alt=""
                                  />
                                </Skill>
                                <Skill>
                                  <Points>10</Points>
                                  <SkillImage
                                    src="/assets/skills/painter.png"
                                    alt=""
                                  />
                                </Skill>
                              </Skills>
                            </ApplicantWrapper>
                          ) : null
                      )
                    ) : (
                      <EmptyState />
                    )}
                  </ApplicantNames>
                  {task.chosen ? (
                    <CompleteButton btnType="primary">
                      Complete kindness
                    </CompleteButton>
                  ) : null}
                </RequestCard>
              ))
            : null}
        </YourRequestCards>
        <H2>Your applied requests</H2>
      </div>
    );
  }
}

export default RequestView;
