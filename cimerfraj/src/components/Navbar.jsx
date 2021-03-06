import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import {Link} from "react-router-dom";
import firebase from '../firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";
import { auth } from "../fire";
  

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

  function GetUserUid(){
    const[uid, setUid] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged(user =>{
        if(user){
          setUid(user.uid);
        }
      })
    }, [])
    return uid;
  }

  function GetUserEmail(){
    const[mail, setMail] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged(user =>{
        if(user){
          setMail(user.email);
        }
      })
    }, [])
    return mail;
  }

  const mail = GetUserEmail();
  const uid = GetUserUid();
  const ref = firebase.firestore().collection('Cart ' + uid) 



  const [data, setdata] = useState([])
  const [loader, setloader] = useState(true)
  const [name, setName] = useState("")

  function createDoc(newDataObj){
    ref
    .doc(newDataObj.id)
    .set(newDataObj)
    .catch((err) => {
        alert(err)
        console.log(err);
    })
  }

  function getData(){
    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      setdata(items)
      setloader(false)
    })
  }

  function deleteDoc(){
    {loader === false && (data.map((product) => (
        ref
        .doc(product.id)
        .delete()
    )))}

}

  useEffect(() => {
    getData()
  }, []) 


  const value = {
    loggedHidden
  }
  return (
    <Container>
       <Wrapper>
           <Left>
               <Language>HR</Language>
           </Left>
           <Center><Link style={{textDecoration: 'none'}} to = "/"><Logic>CimerFraj</Logic></Link></Center>
           <Right>
           <Link style={{textDecorationColor: 'black'}} to = "/login" hidden={!loggedHidden}><MenuItem>PRIJAVI SE</MenuItem></Link>
           <Link style={{textDecorationColor: 'black'}} to = "/register" hidden={!loggedHidden}><MenuItem>REGISTRIRAJ SE</MenuItem></Link>
           <div hidden={loggedHidden}>{mail}</div>
           <Link style={{textDecorationColor: 'black'}} to = "/cart" hidden={loggedHidden}><MenuItem>KO??ARICA</MenuItem></Link>
           <Link style={{textDecorationColor: 'black'}} to = "/" hidden={loggedHidden} onClick={logout}><MenuItem>ODJAVI SE</MenuItem></Link>
           </Right>
       </Wrapper>
    </Container >
  )
}

export default Navbar
