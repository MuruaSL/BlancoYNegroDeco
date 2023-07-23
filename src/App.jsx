import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import LateralCart from './components/LateralCart';
import Footer from './components/Footer';
import Banner from './components/Banner';

  const productos = [
    {
      id: "articuloA",
      name: "nombreA",
      description: "descripcion",
      precio: 999,
      stock: 4
    },
    {
      id: "articuloB",
      name: "nombreB",
      description: "descripcion",
      precio: 777,
      stock: 6
    },
    {
      id: "articuloC",
      name: "nombreC",
      description: "descripcion",
      precio: 888,
      stock: 5
    },
    {
      id: "articuloD",
      name: "nombreB",
      description: "descripcion",
      precio: 777,
      stock: 6
    },
    {
      id: "articuloE",
      name: "nombreA",
      description: "descripcion",
      precio: 999,
      stock: 4
    },
    {
      id: "articuloF",
      name: "nombreA",
      description: "descripcion",
      precio: 999,
      stock: 4
    },
    {
      id: "articuloG",
      name: "nombreB",
      description: "descripcion",
      precio: 777,
      stock: 6
    }
  ];


const App = () => {


  return (
    <>
      <NavBar />
      <Banner/>
      <ItemListContainer  productos={productos}  />
      {/* <LateralCart /> */}
      <Footer />
    </>
  );
}

export default App
