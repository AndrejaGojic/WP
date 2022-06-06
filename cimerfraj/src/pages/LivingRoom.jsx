import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { livingRoom } from '../livingRoom';
import styled from 'styled-components';
import Product from '../components/Product';

const Container = styled.div`
    display: grid;
    padding: 20px;
    grid-template-columns: 25% 25% 25% 25%;
    justify-content: space-between;
`;

const LivingRoom = () => {
  return (
      <div>
    <Navbar/>
    <Container>
          {
              livingRoom.map(item => (
                  <Product item={item}/>
                  ))
        }
      </Container>
    <Footer/>
    </div>
  )
}

export default LivingRoom
