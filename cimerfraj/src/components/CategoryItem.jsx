import styled from 'styled-components'
import {Link} from "react-router-dom";
 
const Container = styled.div`
    flex: 1;
    margin: 3px;
    height 50vh;
    position: relative;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
`;
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
const Button = styled.button`
    border: none;
    padding: 20px;
    width: 100%;
    background-color: #91959c;
    cursor: pointer;
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Link to = {item.path}><Button><b>KUPI SADA</b></Button></Link>
        </Info>
    </Container>
  )
}

export default CategoryItem
