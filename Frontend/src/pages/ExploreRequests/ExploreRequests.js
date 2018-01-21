import styled from 'styled-components';
import React from 'react';
import Pannel from '../../components/Pannel';
import Button from '../../components/Button';
import H2 from '../../components/H2';
import H3 from '../../components/H3';

const RequestCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const AppliedRequestCard = styled(Pannel)`
  margin: 20px;
  min-height: 215px;
  max-height: 215px;
  min-width: 450px;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledH3 = styled(H3)`margin: 5px;`;

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
const CharityImage = styled.img`height: 15px;`;

const CardContent = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Address = styled.div`
  display: flex;
  flex-direction: column;
`;
const AddressTitle = styled.span`
  font-weight: 600;
  padding: 5px 0;
  margin-top: 5px;
`;

const Description = styled.span``;

const RequestType = styled.div`
  font-weight: 600;
  margin-bottom: 5px;
`;

const ApplyButton = styled(Button)`
  margin-top: 10px;
  width: 100%;
`;
const ApplyText = styled.span`margin-left: 10px;`;
const RequestsBody = styled.div`padding: 0 100px;`;
const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlexStart = styled.div``;
const FlexEnd = styled.div``;

const AddressDetails = styled.div`
  display: flex;
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.palette.primary};
  }
`;
const MapIcon = styled.div`padding: 0 10px;`;

class ExploreRequestsView extends React.Component {
  googleRedirect = address => {
    window.open(
      'https://www.google.com/maps/search/?api=1&query=' + address,
      '_blank'
    );
  };

  selectApplicant = (task, applicant) => {
    this.props.updateTask(task, applicant);
  };

  render() {
    const { tasks, currentUser } = this.props;
    return (
      <RequestsBody>
        <H2>Apply on a request</H2>
        <RequestCards>
          {tasks
            ? tasks.map((task, index) => (
                <AppliedRequestCard key={index}>
                  <FlexStart>
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
                    <CardContent>
                      <RequestType>
                        {task.relevantSkills && task.relevantSkills.length > 0
                          ? task.relevantSkills.map((category, i) => {
                              if (task.relevantSkills.length - 1 === i) {
                                return category;
                              }
                              return category + ',';
                            })
                          : 'Unknown'}
                      </RequestType>
                      <Description>{task.description}</Description>
                      <Address>
                        <AddressTitle>Where to go ?</AddressTitle>
                        <AddressDetails
                          onClick={() => this.googleRedirect(task.address)}
                        >
                          {task.address}
                          <MapIcon>
                            <i className="fa fa-map-marker" />
                          </MapIcon>
                        </AddressDetails>
                      </Address>
                    </CardContent>
                  </FlexStart>
                  <FlexEnd>
                    <ApplyButton
                      btnType="primary"
                      onClick={() => {
                        this.selectApplicant(task, currentUser);
                      }}
                    >
                      <ButtonContent>
                        <CharityImage src="/assets/skills/charity.png" alt="" />
                        <ApplyText>Apply to give your kindness</ApplyText>
                      </ButtonContent>
                    </ApplyButton>
                  </FlexEnd>
                </AppliedRequestCard>
              ))
            : null}
        </RequestCards>
      </RequestsBody>
    );
  }
}

export default ExploreRequestsView;
