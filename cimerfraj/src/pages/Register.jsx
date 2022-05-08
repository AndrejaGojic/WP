import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      url("https://news.airbnb.com/wp-content/uploads/sites/4/2021/11/Home-Alone-Airbnb-01-Exterior-Credit-Sarah-Crowley.jpg?fit=2500%2C1667")
        center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    `;

const Wrapper = styled.div`
    width: 40%;
    padding= 20px;
    background-color: white;    
`;

const Title = styled.h1`
    font-size: 24px;
    margin-left: 10px;
    margin-top: 20px;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 20px 10px 0px 10px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 20px 0px 10px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #FF9561;
    color: white;
    cursor: pointer;
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
    `;

const Register = () => {
  return (
    <Container>
      <Wrapper>
          <Title>
              <b>KREIRAJ NOVI RAČUN</b>
          </Title>
          <Form>
              <Input placeholder ='Ime'/>
              <Input placeholder ='Prezime'/>
              <Input placeholder ='E-mail adresa'/>
              <Input placeholder ='Lozinka'/>
              <Input placeholder ='Ponovljena lozinka'/>
              <Input placeholder ='Poštanski broj'/>
              <Input placeholder ='Grad'/>
              <Input placeholder ='Ulica'/>
              <Input placeholder ='Kućni broj'/>
          </Form>
          <Agreement>
              Kreitanjem ovog računa, suglasan/a sam s korištenjem mojih podataka u skladu s <b>POLITIKOM PRIVATNOSTI</b>
          </Agreement>
          <Button>KREIRAJ</Button>
      </Wrapper>
    </Container>
  )
}

export default Register