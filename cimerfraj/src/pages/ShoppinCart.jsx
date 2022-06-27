import Reactm, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CardProducts from '../components/CardProducts';
import firebase from '../firebase';
import { auth } from '../fire';
import styled from 'styled-components';
import {
  onAuthStateChanged
} from "firebase/auth";
import { Link } from 'react-router-dom';

const Container= styled.div`

`;

const Wrapper= styled.div`
    padding: 20px;
`;

const Title= styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top= styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton= styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
`;

const Bottom= styled.div`
    display: flex;
    justify-content: space-between;
`;

const Info= styled.div`
    flex:3;
`;

const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;




const ShoppinCart = () => {

  function GetUser(){
    const [loggedHidden, setLoggedHidden] = useState();
    const [user, setUser] = useState({});

    useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    }, [])
    return user;
  }

  const user=GetUser();
  
  const [cartProducts, setCartProducts]=useState([]);
  
      // getting cart products from firestore collection and updating the state
      useEffect(()=>{
          auth.onAuthStateChanged(user=>{
                firebase.firestore().collection('Cart ' + user.uid).onSnapshot(snapshot=>{
                      const newCartProduct = snapshot.docs.map((doc)=>({
                          ID: doc.id,
                          ...doc.data(),
                      }));
                      setCartProducts(newCartProduct);                   
                  })
          })
      },[])

      function deleteDoc(){
        {(cartProducts.map((product) => (
            firebase.firestore().collection('Cart ' + user.uid)
            .doc(product.id)
            .delete()
        )))}
    
    }

  return (
    <div>
      <Navbar/>
      <Title>TVOJA KOŠARICA</Title>
      <Top>
      <Link to ='/'><TopButton>NASTAVI KUPNJU</TopButton></Link>
      </Top>
      {cartProducts.length > 0 && (
        <CardProducts cartProducts={cartProducts}/>
      )}
      {cartProducts.length < 0 &&(
        <div>Košarica je prazna</div>
      )}
      <Link to = '/done'><SummaryButton onClick={() => deleteDoc()}>NARUČI</SummaryButton></Link>
      <Footer/>
    </div>
  )
}

export default ShoppinCart
