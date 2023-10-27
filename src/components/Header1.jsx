import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
export default function Header() {
  return (
    // <div className="container">
    //   <nav className="navbar navbar-expand-md d-none d-md-block fixed-top container">
    //     <div className="container-fluid">
    //       <a className="navbar-brand" href="#">Portfoilo</a>
    //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    //         <ul className="navbar-nav">
    //           <li className="nav-item position-relative">
    //             <a className="nav-link active" aria-current="page" href="#">Home</a>
    //           </li>
    //           <li className="nav-item position-relative">
    //             <a className="nav-link" href="#">About</a>
    //           </li>
    //           <li className="nav-item position-relative">
    //             <a className="nav-link" href="#">Resume</a>
    //           </li>
    //           <li className="nav-item position-relative">
    //             <a className="nav-link" href="#">Services</a>
    //           </li>
    //           <li className="nav-item position-relative">
    //             <a className="nav-link" href="#">Projects</a>
    //           </li>
    //           <li className="nav-item position-relative">
    //             <a className="nav-link" href="#">Contact</a>
    //           </li>

    //         </ul>
    //       </div>
    //     </div>
    //   </nav>


    //   <div className="d-block d-md-none">
    //   {['md'].map((expand) => (
    //   <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
    //     <Container fluid>
    //       <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
    //       <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
    //       <Navbar.Offcanvas
    //         id={`offcanvasNavbar-expand-${expand}`}
    //         aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
    //         placement="end"
    //       >
    //         <Offcanvas.Header closeButton>
    //           <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
    //             Offcanvas
    //           </Offcanvas.Title>
    //         </Offcanvas.Header>
    //         <Offcanvas.Body>
    //           <Nav className="justify-content-end flex-grow-1 pe-3">
    //             <Nav.Link href="#action1">Home</Nav.Link>
    //             <Nav.Link href="#action2">Link</Nav.Link>
    //           </Nav>
    //         </Offcanvas.Body>
    //       </Navbar.Offcanvas>
    //     </Container>
    //   </Navbar>
    // ))}
    // </div> 

    // </div>

    <div className="container">
      
{/* 
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top container">
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">Portfoilo</a>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
             <ul className="navbar-nav">
               <li className="nav-item position-relative">
                 <a className="nav-link active" aria-current="page" href="#">Home</a>
               </li>
               <li className="nav-item position-relative">
                 <a className="nav-link" href="#">About</a>
               </li>
               <li className="nav-item position-relative">
                 <a className="nav-link" href="#">Resume</a>
               </li>
           <li className="nav-item position-relative">
             <a className="nav-link" href="#">Services</a>
           </li>
           <li className="nav-item position-relative">
             <a className="nav-link" href="#">Projects</a>
           </li>
           <li className="nav-item position-relative">
             <a className="nav-link" href="#">Contact</a>
           </li>

         </ul>
       </div>
        </nav> */}

       
        {/* <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title">Menu</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="list-group">
                    <li class="list-group-item"><a href="#">Home</a></li>
                    <li class="list-group-item"><a href="#">About</a></li>
                    <li class="list-group-item"><a href="#">Services</a></li>
                    <li class="list-group-item"><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>  */}
    </div>

  )
}
