import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import LateralCart from "./components/LateralCart";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import LowResCartButton from "./components/LowResCartButton";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { ShoppingCartProvider } from "./context/ShoppingCartContext"; // Importa ShoppingCartContext por el alias

const App = () => {
  const productos = [
    {
      id: "1",
      name: "Pantuflas",
      image: "/src/assets/articulos/1.png",
      description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam modi excepturi quae totam iure? Pariatur numquam aspernatur eius sunt nulla esse voluptatum, tempora labore magni sapiente impedit itaque eligendi quidem!",
      precio: 999,
      stock: 4,
      category:7
    },
    {
      id: "2",
      name: "Manta corderito ",
      image: "/src/assets/articulos/7.png",
      description: "Mantas de corderito doble faz ",
      precio: 777,
      stock: 6,
      category:1
    },
    {
      id: "3",
      name: "Alfombra rectang",
      image: "/src/assets/articulos/2.png",
      description: "descripcion",
      precio: 888,
      stock: 5,
      category:5
    },
    {
      id: "4",
      name: "Alfombra redonda",
      image: "/src/assets/articulos/6.png",
      description: "descripcion",
      precio: 777,
      stock: 6,
      category:5
    },
    {
      id: "5",
      name: "Alfombra de telar",
      image: "/src/assets/articulos/4.png",
      description: "descripcion",
      precio: 999,
      stock: 4,
      category:5
    },
    {
      id: "6",
      name: "Alfombra artesanal ",
      image: "/src/assets/articulos/5.png",
      description: "descripcion",
      precio: 999,
      stock: 4,
      category:5
    },
    {
      id: "7",
      name: "Alfombra de telar",
      image: "/src/assets/articulos/3.png",
      description: "descripcion",
      precio: 777,
      stock: 6,
      category:5
    },
    {
      id: "8",
      name: "Manta corderito gris",
      image: "/src/assets/articulos/8.png",
      description: "descripcion",
      precio: 777,
      stock: 6,
      category:1
    },
    {
      id: "9",
      name: "Toalla y toallon",
      image: "/src/assets/articulos/9.png",
      description: " Juego de toalla y toallon de 500gr",
      precio: 777,
      stock: 6,
      category:6
    },
    {
      id: "10",
      name: "Cubrecama Flannel",
      image: "/src/assets/articulos/10.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nam facere hic consectetur, corporis, dolor reprehenderit recusandae incidunt culpa eligendi voluptas magni possimus voluptatibus reiciendis officiis autem placeat mollitia maiores.",
      precio: 777,
      stock: 6,
      category:4
    },
    {
      id: "11",
      name: "Almohadones",
      image: "/src/assets/articulos/11.png",
      description: "descripcion",
      precio: 777,
      stock: 6,
      category:4
    },
    {
      id: "12",
      name: "Mantas rusticas",
      image: "/src/assets/articulos/12.png",
      description: "descripcion",
      precio: 777,
      stock: 6,
      category:1
    }
  ];

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
          <Route exact path="/cart" element={<LateralCart />} />
        </Routes>

        <Footer />

      </ShoppingCartProvider>
    </BrowserRouter>
  );
};

export default App;
