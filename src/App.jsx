import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import LateralCart from './components/LateralCart';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a la revolucion de los colores" />
      <LateralCart/>
      <Footer/>
    </>
  );
}

export default App
