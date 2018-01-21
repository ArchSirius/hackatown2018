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
const CharityImage = styled.img`height: 15px;`;

const CardContent = styled.div`margin: 5px;`;

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

class ExploreRequestsView extends React.Component {
  render() {
    const { tasks } = this.props;
    return (
      <RequestsBody>
        <H2>Apply on a request</H2>
        <RequestCards>
          {tasks
            ? tasks.map(task => (
                <AppliedRequestCard key={task.id}>
                  <CardTitle>
                    <StyledH3>{task.name}</StyledH3>
                    <CarePoints>
                      <CarePointsImage
                        src="/assets/skills/carePoints.png"
                        alt=""
                      />1000
                    </CarePoints>
                  </CardTitle>
                  <CardContent>
                    <RequestType>Painting</RequestType>
                    <Description>
                      A task with a beautiful description of it
                    </Description>
                    <Address>
                      <AddressTitle>Where to go ?</AddressTitle>
                      666 Evil Road, God Villa
                    </Address>
                    <ApplyButton btnType="primary">
                      <ButtonContent>
                        <CharityImage src="/assets/skills/charity.png" alt="" />
                        <ApplyText>Apply to give your kindness</ApplyText>
                      </ButtonContent>
                    </ApplyButton>
                  </CardContent>
                </AppliedRequestCard>
              ))
            : null}
        </RequestCards>
      </RequestsBody>
    );
  }
}

export default ExploreRequestsView;
