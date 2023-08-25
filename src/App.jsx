import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import LowResCartButton from "./components/LowResCartButton";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { ShoppingCartProvider } from "./context/ShoppingCartContext"; // Importa ShoppingCartContext por el alias
import Checkout from "./components/Checkout";
import { useEffect,useState } from "react"
import { getDocs,collection,getFirestore } from "firebase/firestore"

const App = () => {
  //Llamado de FireBase y Descarga de la coleccion de articulos en "productos"

  const [productos, setProducts] = useState([])
  
    useEffect(()=> {
        const db = getFirestore()

        const itemsCollection = collection(db,"Articulos")
        getDocs(itemsCollection).then((snapshot)=>{
            const docs = snapshot.docs.map((doc) => ({id:doc.id, ...doc.data()}))
            setProducts(docs)
        })
    },[])
  return (
    
    <BrowserRouter>
    <ShoppingCartProvider>

        <NavBar />
        <Banner />
        <LowResCartButton />

        <Routes>
          <Route exact path="/home" element={<Home/>}/>;
          <Route exact path="/" element={<ItemListContainer productos={productos} />} />
          <Route exact path="/category/:category" element={<ItemListContainer productos={productos} />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer productos={productos} />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>

        <Footer />

      </ShoppingCartProvider>
    </BrowserRouter>
  );
};

export default App;
