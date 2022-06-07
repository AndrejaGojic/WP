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
const Desc = styled.div`
    font-size: 20px;
    margin-left: 10px;
`;
const Price = styled.div`
    font-size: 25px;
    font-weight: bold;
    margin-top: 20px;
    margin-left: 10px;
`;

const value = parseInt(window.name);

const Product = ({item}) => {
    console.log(window.name)
    if(item.price >= parseInt(window.name)){
        return (
            <Link to = {`/product/${item.id}`}>
            <Container>
                <Image src={item.img}/>
                <Info>
                    <Title>{item.name}</Title>
                    <Desc>{item.description}</Desc>
                    <Price>{item.price}</Price>
                </Info>
            </Container>
            </Link>
          )
    }
    }


export default Product
