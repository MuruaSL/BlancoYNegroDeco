import React from 'react'
import { IconButton,Menu,MenuButton,MenuList,MenuItem} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
const Categories = () => {
    return (
        <>
        <Menu>
            <MenuButton as={IconButton} icon={<HamburgerIcon />} >
            Menu
            </MenuButton>
            <MenuList>
                <Link to={`/category/${1}`}>
                <MenuItem className="menuItemCss">Mantas</MenuItem>
                </Link>
                <Link to={`/category/${2}`}>
                <MenuItem className="menuItemCss">Frazadas</MenuItem>
                </Link>
                <Link to={`/category/${3}`}>
                <MenuItem className="menuItemCss">Sabanas</MenuItem>
                </Link>
                <Link to={`/category/${4}`}>
                <MenuItem className="menuItemCss">Acolchados</MenuItem>
                </Link>
                
            </MenuList>
        </Menu>
        </>
    );
    }

export default Categories