import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import LateralCart from './components/LateralCart';
import Footer from './components/Footer';
import Banner from './components/Banner';
import LowResCartButton from './components/LowResCartButton';
  const productos = [
    {
      id: "articuloA",
      name: "nombreA",
      image: "src/assets/articulos/1.png",
      description: "descripcion",
      precio: 999,
      stock: 4
    },
    {
      id: "articuloB",
      name: "nombreB",
      image: "src/assets/articulos/7.png",
      description: "descripcion",
      precio: 777,
      stock: 6
    },
    {
      id: "articuloC",
      name: "nombreC",
      image: "src/assets/articulos/2.png",
      description: "descripcion",
      precio: 888,
      stock: 5
    },
    {
      id: "articuloD",
      name: "nombreB",
      image: "src/assets/articulos/6.png",
      description: "descripcion",
      precio: 777,
      stock: 6
    },
    {
      id: "articuloE",
      name: "nombreA",
      image: "src/assets/articulos/4.png",
      description: "descripcion",
      precio: 999,
      stock: 4
    },
    {
      id: "articuloF",
      name: "nombreA",
      image: "src/assets/articulos/5.png",
      description: "descripcion",
      precio: 999,
      stock: 4
    },
    {
      id: "articuloG",
      name: "nombreB",
      image: "src/assets/articulos/3.png",
      description: "descripcion",
      precio: 777,
      stock: 6
    },
    {
      id: "articuloH",
      name: "nombreB",
      image: "src/assets/articulos/8.png",
      description: "descripcion",
      precio: 777,
      stock: 6
    },
    {
      id: "articuloI",
      name: "nombreB",
      image: "src/assets/articulos/9.png",
      description: "descripcion",
      precio: 777,
      stock: 6
    },
    {
      id: "articuloJ",
      name: "nombreB",
      image: "src/assets/articulos/10.png",
      description: "descripcion",
      precio: 777,
      stock: 6
    },
    {
      id: "articuloK",
      name: "nombreB",
      image: "src/assets/articulos/11.png",
      description: "descripcion",
      precio: 777,
      stock: 6
    },
    {
      id: "articuloL",
      name: "nombreB",
      image: "src/assets/articulos/12.png",
      description: "descripcion",
      precio: 777,
      stock: 6
    }
  ];


const App = () => {


  return (
    <>
      <NavBar />
      <LowResCartButton />
      <Banner />
      <ItemListContainer productos={productos} />
      {/* <LateralCart /> */}
      <Footer />
    </>
  );
}

export default App
