import React from 'react';
import ibbypic from './images/car-mat.jpeg';

function Header() {
    return (
    <header>
        <img src={ibbypic}/>
        <h1>Ibby's Routine</h1>
    </header>
    )
}

export default Header;