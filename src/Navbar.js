import React from 'react';


function NavbarComponent() {
  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-light bg-white">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgntfSWQL-tE_s4-_S7CaVT2L9Bq1-808CSw&usqp=CAU' style={{mixBlendMode:"multiply"}} width={"120px"} alt='logo'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Products</a>
        </li>
      </ul>
      <span className="navbar-text">
      <button class="btn btn-outline-success me-2" type="button">Jion Us</button>
      </span>
    </div>
  </div>
</nav>
   </>
    
  );
}

export default NavbarComponent;
