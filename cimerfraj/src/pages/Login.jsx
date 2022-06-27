import styled from "styled-components";
import { Link } from "react-router-dom";

import React, { useState, useEffect, useContext } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../fire";
import { color } from "@mui/system";

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
  margin: 10px 5px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 5px;
  margin-bottom: 10px;
  `;

const Text = styled.div`
      margin-top: 10px;
      margin-left: 5px;
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
  const [error, setError] = useState(null);
  const [errorHidden, setErrorHidden] = useState(true);

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
      setErrorHidden(true);
    } catch (error) {
      setErrorHidden(false);
      console.log(error.message);
      setError(error.message);
    }
    console.log(errorHidden);
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
          <Title> Prijavi se </Title>
              <Input
                placeholder="Email..."
                onChange={(event) => {
                  setLoginEmail(event.target.value);
                }}
              />
              <Input
                type="password"
                placeholder="Password..."
                onChange={(event) => {
                  setLoginPassword(event.target.value);
                }}
              />
        <Button onClick={login} hidden={!errorHidden}>Prijavi se</Button>
        <Link to = "/" ><Button onClick={login} hidden={errorHidden}> Prijavi se</Button></Link>
        <div>{error}</div>
        <Text><Link to ="/register">Keiraj novi račun</Link></Text>
        </Wrapper>
        </Container>
              
       
        </div>
  )
}


export default Login