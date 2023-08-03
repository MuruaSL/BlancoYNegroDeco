import React from "react";
import CartWidget from "./CartWidget";
import Categories from "./Categories";
import { Grid, GridItem } from "@chakra-ui/react";
import {Link} from "react-router-dom"
const NavBar = () => {
return (
    <>
    <Grid templateColumns='1fr 1fr 15fr 2fr'  className="header">

        <GridItem>
            <Link to={"/"}>
                <img className="NavbarIcon" src="../src/assets/60x60.png" alt="iconBlancoYnegroDeco"/>
            </Link>
        </GridItem>
        
        <GridItem>
            <Categories/>
        </GridItem>
        
        <GridItem>
            <Link to={"/"}>
                <h1 className="headerTitle">Blanco & Negro Deco</h1>
            </Link>
        
        </GridItem>
        <Link to={"/Cart"}>
        <GridItem><CartWidget /></GridItem>
        </Link>
    </Grid>
    </>
);
};

export default NavBar;