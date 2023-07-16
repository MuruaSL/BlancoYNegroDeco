//import { Menu,MenuButton,Button,MenuList,MenuItem} from '@chakra-ui/react';
import React from "react";
import CartWidget from "./CartWidget";
import Categories from "./Categories";
import { Grid, GridItem } from "@chakra-ui/react";
const NavBar = () => {
return (
    <>
    <Grid templateColumns='1fr 1fr 15fr 2fr'  className="header">

        <GridItem><img
        className="iconB&N"
        src="./src/assets/60x60.png"
        alt="iconBlancoYnegroDeco"
        /></GridItem>
        
        <GridItem><Categories /></GridItem>
        
        <GridItem><h1 className="headerTitle">Blanco & Negro Deco</h1></GridItem>
        
        <GridItem><CartWidget /></GridItem>
    </Grid>
    </>
);
};

export default NavBar;