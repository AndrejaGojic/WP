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
    color: brown;
`;
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button><Link to = "/">KUPI SADA</Link></Button>
        </Info>
    </Container>
  )
}

export default CategoryItem
