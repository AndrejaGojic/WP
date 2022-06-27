import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { useParams } from 'react-router-dom';
import { livingRoom } from '../livingRoom';
import { kitchen } from '../kitchen';
import { bedroom } from '../bedroom';
import { diningRoom } from '../diningRoom';
import { kids } from '../kids';
import { bathroom } from '../bathroom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import firebase from '../firebase';
import { v4 } from 'uuid';
import {Link} from "react-router-dom";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";
  import { auth } from "../fire";

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;
const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    widht: 400px;
    height: 350px;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    font-weight: 600;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 300;
    font-size: 40px;
`;

const Button = styled.button`
    margin: 40px;
    padding: 15px;
    border: 1px solid teal;
    backgroud-color: white;
    cursor: pointer;
`;



const SingleProduct = ({match}) => { 

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
      console.log(user.uid);
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
      console.log(user.uid);
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

  const uid = GetUserUid();
  const ref = firebase.firestore().collection('Cart ' + uid) 
    function createDoc(newDataObj){
        ref
        .doc(newDataObj.id)
        .set(newDataObj)
        .catch((err) => {
            alert(err)
            console.log(err);
        })
      }


      
    const {id} = useParams();
    var livingRoomProduct = livingRoom.find((p) => p.id === id);
    var bedroomProduct = bedroom.find((p) => p.id === id);
    var diningRoomProduct = diningRoom.find((p) => p.id === id);
    var kidsProduct = kids.find((p) => p.id === id);
    var kitchenProduct = kitchen.find((p) => p.id === id);
    var bathroomProduct = bathroom.find((p) => p.id === id);
    var product = null;
    if(livingRoomProduct != null){
      product = livingRoomProduct;
    }
    else if(bedroomProduct != null){
      product = bedroomProduct;
    }
    else if(diningRoomProduct != null){
      product = diningRoomProduct;
    }
    else if(kidsProduct != null){
      product = kidsProduct;
    }
    else if(kitchenProduct != null){
      product = kitchenProduct;
    }
    else if(bathroomProduct != null){
      product = bathroomProduct;
    }
    return (
      <Container>
          <Navbar/>
          <Wrapper>
              <ImgContainer>
                  <Image src = {product.img}/>
              </ImgContainer>
              <InfoContainer>
                  <Title>
                      {product.name}
                  </Title>
                  <Desc>
                      {product.description}
                  </Desc>
                  <Price>
                      {product.price+ "kn"}
                  </Price>
                  <Link to='/login'><Button hidden={!loggedHidden}>Dodaj u košaricu</Button></Link>
                  <Link to = '/cart'><Button hidden={loggedHidden} onClick={() =>{
                      createDoc({product, id: v4()})
                  }}>Dodaj u košaricu</Button></Link>
              </InfoContainer>
          </Wrapper>
          <Footer/>
      </Container>
    )
}

export default SingleProduct
