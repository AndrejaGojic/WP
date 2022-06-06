import styled from "styled-components";
import { Link } from "react-router-dom";
import Home from "./Home";

import React, { useState, useEffect, useContext } from "react";

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
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  `;


const AuthContext = React.createContext();

export function useAuth(){
  return useContext(AuthContext);
}


function Login() {


  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [loggedHidden, setLoggedHidden] = useState();
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if(currentUser){
        setLoggedHidden(false);
      }
      else{
        setLoggedHidden(true);
      }
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

  const value = {
    loggedHidden
  }

  return (
      <div>
        <Container>
        <Wrapper>
          <Title> Login </Title>
              <Input
                placeholder="Email..."
                onChange={(event) => {
                  setLoginEmail(event.target.value);
                }}
              />
              <Input
                placeholder="Password..."
                onChange={(event) => {
                  setLoginPassword(event.target.value);
                }}
              />

              <Button onClick={login}> <Link style={{textDecoration: 'none'}} to = "/">Prijavi se</Link></Button>

            <h4> User Logged In: </h4>
            {user?.email}

            <Button onClick={logout}>Odjavi se</Button>
        </Wrapper>
        </Container>
              
       
        </div>
  )
}


export default Login