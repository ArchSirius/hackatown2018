import styled from 'styled-components';
import Pannel from '../../components/Pannel';
import Button from '../../components/Button';
import H2 from '../../components/H2';
import H3 from '../../components/H3';
import React from 'react';

const YourAppliedRequestCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const AppliedRequestCard = styled(Pannel)`
  margin: 20px;
  min-height: 215px;
  min-width: 450px;
`;

const StyledH3 = styled(H3)`margin: 5px 5px 15px 5px;`;

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

const CardContent = styled.div`margin: 5px;`;

const Status = styled.div`
  display: flex;
  align-items: center;
`;
const StatusIcon = styled.div`
  color: ${props =>
    props.isChosen ? props.theme.palette.success : props.theme.palette.error};
  padding: 5px;
`;

const Address = styled.div`
  display: flex;
  flex-direction: column;
`;
const AddressTitle = styled.span`
  font-weight: 600;
  padding: 5px 0;
`;

const Description = styled.p``;

const RequestType = styled.div`
  font-weight: 600;
  margin-bottom: 5px;
`;

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const DriveMeButton = styled(Button)`max-height: 40px;`;
const DriveMe = styled.span`margin-left: 10px;`;

class RequestView extends React.Component {
  googleRedirect = address => {
    window.open(
      'https://www.google.com/maps/search/?api=1&query=' + address,
      '_blank'
    );
  };

  render() {
    const { tasks, currentUser } = this.props;
    console.log(tasks);
    return (
      <div>
        <H2>Your Applied Requests</H2>
        <YourAppliedRequestCards>
          {tasks
            ? tasks.map((task, index) => (
                <AppliedRequestCard key={index}>
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
                      {task.address}
                    </Address>
                    <SpaceBetween>
                      <Status>
                        <StatusIcon isChosen={task.chosen === currentUser._id}>
                          <i className="fa fa-circle fa-lg" />
                        </StatusIcon>Waiting for taker decision
                      </Status>
                      <DriveMeButton
                        btnType="primary"
                        onClick={() => this.googleRedirect(task.address)}
                      >
                        <i className="fa fa-map-marker" />
                        <DriveMe>Drive me</DriveMe>
                      </DriveMeButton>
                    </SpaceBetween>
                  </CardContent>
                </AppliedRequestCard>
              ))
            : null}
        </YourAppliedRequestCards>
      </div>
    );
  }
}

export default RequestView;
