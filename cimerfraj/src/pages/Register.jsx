import styled from "styled-components"

import { Link } from "react-router-dom";
import Home from "./Home";

import { useState,useEffect } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../fire";

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

    function Register () {

  
        const [registerEmail, setRegisterEmail] = useState("");
        const [registerPassword, setRegisterPassword] = useState("");
        const [loginEmail, setLoginEmail] = useState("");
        const [loginPassword, setLoginPassword] = useState("");
      
        const [user, setUser] = useState({});
      
        useEffect(() => {
          onAuthStateChanged(auth, (currentUser) => {
              setUser(currentUser);
          });
      
        }, [])
      
        const register = async () => {
          try {
            const user = await createUserWithEmailAndPassword(
              auth,
              registerEmail,
              registerPassword
            );
            console.log(user);
          } catch (error) {
            console.log(error.message);
          }
        };
      
        const login = async () => {
          try {
            const user = await signInWithEmailAndPassword(
              auth,
              loginEmail,
              loginPassword
            );
            console.log(user);
          } catch (error) {
            console.log(error.message);
          }
        };
      
        const logout = async () => {
          await signOut(auth);
        };


  return (
    <Container>
      <Wrapper>
          <Title>
              <b>KREIRAJ NOVI RAČUN</b>
          </Title>
          <Form>
              
              <Input placeholder ='E-mail adresa'  onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}/>
              <Input type="password" placeholder ='Lozinka'   onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}/>
              
          </Form>
          <Agreement>
              Kreitanjem ovog računa, suglasan/a sam s korištenjem mojih podataka u skladu s <b>POLITIKOM PRIVATNOSTI</b>
          </Agreement>
          <Button onClick={register}><Link to = "/bravo">KREIRAJ</Link></Button>
          
      </Wrapper>
    </Container>
  )
}

export default Register