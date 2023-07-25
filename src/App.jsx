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
      name: "Pantuflas",
      image: "src/assets/articulos/1.png",
      description: "descripcion",
      precio: 999,
      stock: 4
    },
    {
      id: "articuloB",
      name: "Manta corderito ",
      image: "src/assets/articulos/7.png",
      description: "Mantas de corderito doble faz ",
      precio: 777,
      stock: 6
    },
    {
      id: "articuloC",
      name: "Alfombra rectangulares",
      image: "src/assets/articulos/2.png",
      description: "descripcion",
      precio: 888,
      stock: 5
    },
    {
      id: "articuloD",
      name: "Alfombra redonda",
      image: "src/assets/articulos/6.png",
      description: "descripcion",
      precio: 777,
      stock: 6
    },
    {
      id: "articuloE",
      name: "Alfombra de telar",
      image: "src/assets/articulos/4.png",
      description: "descripcion",
      precio: 999,
      stock: 4
    },
    {
      id: "articuloF",
      name: "Alfombra artesanal ",
      image: "src/assets/articulos/5.png",
      description: "descripcion",
      precio: 999,
      stock: 4
    },
    {
      id: "articuloG",
      name: "Alfombra de telar mediana",
      image: "src/assets/articulos/3.png",
      description: "descripcion",
      precio: 777,
      stock: 6
    },
    {
      id: "articuloH",
      name: "Manta corderito gris",
      image: "src/assets/articulos/8.png",
      description: "descripcion",
      precio: 777,
      stock: 6
    },
    {
      id: "articuloI",
      name: "Toalla y toallon",
      image: "src/assets/articulos/9.png",
      description: " Juego de toalla y toallon de 500gr",
      precio: 777,
      stock: 6
    },
    {
      id: "articuloJ",
      name: "Cubrecama Flannel",
      image: "src/assets/articulos/10.png",
      description: "descripcion",
      precio: 777,
      stock: 6
    },
    {
      id: "articuloK",
      name: "Almohadones",
      image: "src/assets/articulos/11.png",
      description: "descripcion",
      precio: 777,
      stock: 6
    },
    {
      id: "articuloL",
      name: "Mantas rusticas",
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
