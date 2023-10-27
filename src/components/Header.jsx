import React from 'react'

export default function Header() {
  
  return (
    <div>
      <nav className="navbar  navbar-expand-lg fixed-top container" >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Portfolio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
    <i className="bi bi-text-paragraph fs-1"></i>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body justify-content-center justify-content-lg-end">
      <ul className="navbar-nav">
           <li className="nav-item position-relative">
             <a className="nav-link active" href="#about"  data-target="#about">Home</a>
           </li>
           <li className="nav-item position-relative">
             <a className="nav-link" href="#about"  data-target="#about">About</a>
           </li>
           <li className="nav-item position-relative">
             <a className="nav-link" href="#resume "  data-target="#resume">Resume</a>
           </li>
           <li className="nav-item position-relative">
             <a className="nav-link" href="#service"  data-target="#service">Services</a>
           </li>
           <li className="nav-item position-relative">
             <a className="nav-link" href="#project"  data-target="#project">Projects</a>
           </li>
           <li className="nav-item position-relative">
             <a className="nav-link" href="#contact">Contact</a>
           </li>

         </ul>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
