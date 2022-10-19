import React from 'react';
import {NavLink } from 'react-router-dom';
import logo from "../img/logo.png";
import { useCart } from 'react-use-cart'
  
const Nav = () => {
  const {totalUniqueItems} = useCart();
  return (
    <>
    <div  className="navTitle d-flex justify-content-between align-items-center w-100" >
      <div className='navtitleOne d-flex justify-content-evenly ms-5 align-items-center '>
        <NavLink  to='#'><i class="fa-solid fa-circle-question"></i> Can we help you?</NavLink >
        <NavLink  to='#'><i class="fa-solid fa-phone"></i> +1 246-345-0695</NavLink >

      </div>
      <div className='navtitleTwo d-flex justify-content-between align-items-center me-5'>
        <NavLink   to='#'><i class="fa-solid fa-location-dot"></i></NavLink >
        <NavLink   to='#'><i class="fa-sharp fa-solid fa-heart"></i></NavLink >
        <NavLink   to='#'><i class="fa-solid fa-user"></i></NavLink >
        <NavLink   to='/cart'><i class="fa-solid fa-cart-shopping"><span> ({totalUniqueItems}) </span></i></NavLink >

      </div>

    </div>
    <div className="conrainer-nav ">
    <nav className="navbar navbar-expand-lg ">
<div className="container">
  <NavLink  className="navbar-brand" to="#"><img src={logo} alt="" /></NavLink >
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <NavLink  className="nav-link font" aria-current="page" to="/">Home</NavLink >
      </li>
      <li className="nav-item">
        <NavLink  className="nav-link font" to="/link">Link</NavLink >
      </li>
      <li className="nav-item">
        <NavLink  className="nav-link font" to="/catogories">Catogoris</NavLink >
      </li>
      <li className="nav-item">
        <NavLink  className="nav-link font" to="/shop">Shop</NavLink >
      </li>
      <li className="nav-item">
        <NavLink  className="nav-link font" to="/pages">Page</NavLink >
      </li>
      <li className="nav-item">
        <NavLink  className="nav-link" to="#"></NavLink >
      </li>
    </ul>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
     
    </form>
  </div>
</div>
</nav>
</div>
</>
  )
}

export default Nav