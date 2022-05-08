import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { Search } from '@mui/icons-material';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from "react-router-dom";

const Container = styled.div`
  height: 60px;
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

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border:none;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logic = styled.h1`
    font-weight: bold;
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
`


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
               <SearchContainer>
                   <Input/>
                   <Search style={{color:"gray", fontSize: 16}}/>
               </SearchContainer>
           </Left>
           <Center><Logic>CimerFraj</Logic></Center>
           <Right>
               <MenuItem>
                    <Link to = "/login">PRIJAVI SE</Link>
               </MenuItem>
               <MenuItem>
                    <Link to = "/register">REGISTRIRAJ SE</Link>
               </MenuItem>
               <MenuItem>
                <Badge badgeContent={4} color="primary">
                     <ShoppingCartOutlinedIcon color="action" />
                </Badge>
               </MenuItem>
           </Right>
       </Wrapper>
    </Container >
  )
}

export default Navbar
