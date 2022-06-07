import React from 'react';
import styled from 'styled-components'
import { useParams } from 'react-router-dom';
import { livingRoom } from '../livingRoom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Container = styled.div``;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;
const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    widht: 400px;
    height: 350px;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    font-weight: 600;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 300;
    font-size: 40px;
`;

const Button = styled.button`
    margin: 40px;
    padding: 15px;
    border: 1px solid teal;
    backgroud-color: white;
    cursor: pointer;
`;

const SingleProduct = ({match}) => {
    const {id} = useParams();
    const product = livingRoom.find((p) => p.id === id);
  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <ImgContainer>
                <Image src = {product.img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>
                    {product.name}
                </Title>
                <Desc>
                    {product.description}
                </Desc>
                <Price>
                    {product.price + " kn"}
                </Price>
                <Button>Dodaj u košaricu</Button>
            </InfoContainer>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default SingleProduct
