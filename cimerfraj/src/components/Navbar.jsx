import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";
import { useAuth } from '../pages/Login';
import Nav from 'react-bootstrap/Nav'

const Container = styled.div`
  height: 100px; 
  background-color: #91959c;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const Input = styled.input`
    border:none;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logic = styled.div`
    font-weight: bold;
    font-size: 60px;
    color: black
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const MenuItem = styled.div`
    font-size : 14px;
    cursor: pointer;
    margin-left: 25px;
    color: black;
    font-weight: bold;
`;


const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;


const Navbar = () => {
  return (
    <Container>
       <Wrapper>
           <Left>
               <Language>HR</Language>
           </Left>
           <Center><Link style={{textDecoration: 'none'}} to = "/"><Logic>CimerFraj</Logic></Link></Center>
           <Right>
           <Link style={{textDecorationColor: 'black'}} to = "/login"><MenuItem>PRIJAVI SE</MenuItem></Link>
           <Link style={{textDecorationColor: 'black'}} to = "/register"><MenuItem>REGISTRIRAJ SE</MenuItem></Link>
           </Right>
       </Wrapper>
    </Container >
  )
}

export default Navbar
