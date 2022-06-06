import styled from "styled-components"

const Container = styled.div`
    display: flex;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const Left = styled.h1`
    flex: 1;
    display: flex;
    flex-decoration: column;
    padding: 20px;
`;

const Logo = styled.div`
    margiin-bottom: 20px;
    display: flex;
    align-item: center;
`;
 
const ContactItem = styled.div`

`;


const Footer = () => {
  return (
    <Container>
      <Left>
          <Logo>CimerFraj</Logo>
      </Left> 
      <Center>
          <Title>Contact</Title>
          <ContactItem>Ulica A. G. Matoša 37, 31000 Osijek</ContactItem>
          <ContactItem>+385 31 123 456</ContactItem>
          <ContactItem>contact@cimerfraj.hr</ContactItem>
      </Center>
    </Container>
  )
}

export default Footer
