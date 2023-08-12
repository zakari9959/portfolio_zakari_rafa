import React from 'react';
import Navbar from '../Navbar/Navbar';
//import photoprofil from '%PUBLIC_URL%/docs/assets/photoprofil.webp';
import './Header.css';

const Header = () => (
  <header>
    <h1>Zakari Rafa</h1>
    {/* <Image src={photoprofil} alt=""></Image> */}
    <Navbar />
  </header>
);

export default Header;
