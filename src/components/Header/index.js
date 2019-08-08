import React from 'react';
import Sobre from '../../objects/Sobre';
import Logo from  '../../objects/Logo';
import MenuIcon from  '../../objects/MenuIcon';
import './styles.css';

const Header = () => {
    return (
        <div className="header">
            <Logo />
            <span className="sobre-menu">
                <Sobre />
                <MenuIcon />
            </span>
        </div>
    )
}

export default Header;