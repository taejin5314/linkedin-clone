import styled from 'styled-components';

const Rightside = (props) => {
  return (
    <Container>
      <FollowCard>rightside</FollowCard>
    </Container>
  );
}

const Container = styled.div`
  grid-area: rightside;
`;

const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
`;

export default Rightside;