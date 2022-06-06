import styled from 'styled-components'
import {Link} from "react-router-dom";
 
const Container = styled.div`
    flex: 1;
    margin: 5px;
    height 70vh;
    position: relative;
    cursor: pointer;
    border-style: ridge;
`;
const Image = styled.img`
    width: 100%;
    height: 50%;
`;
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 140%;
    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: center;
`;
const Title = styled.h1`
    margin-bottom: 20px;
    margin-left: 10px;
    color: black;
`;
const Disc = styled.div`
    font-size: 20px;
    margin-left: 10px;
`;
const Price = styled.div`
    font-size: 25px;
    font-weight: bold;
    margin-top: 20px;
    margin-left: 10px;
`;

const Product = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.name}</Title>
                <Disc>{item.description}</Disc>
                <Price>{item.price}</Price>
            </Info>
        </Container>
      )
}

export default Product
