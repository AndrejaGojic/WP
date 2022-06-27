import styled from "styled-components"

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

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

const DoneShopping = () => {
  return (
    <div>
        <Navbar/>
      <Container>
          <Wrapper>
              <Title>Uspješna kupovina!</Title>
          </Wrapper>
      </Container>
    </div>
  )
}

export default DoneShopping
