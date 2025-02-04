import React, { useState } from "react";

const Navbar = ()=>{

  const [isOpen, setIsopen] = useState(false);

  return(
      <nav className="nav-items">
        <span className="nav-log">Etech.</span>
          <div className={`nav-options ${isOpen && 'open'}`}>
            <div className="nav-item">
              <a href="#">Courses <img className="arrow-img" src="img/arrow2.png" alt="" /></a>
              <div className="sub-menu">
                <a href="#">Web Design</a>
                <a href="#">2d and 3d Animation</a>
                <a href="#">Data science/analytics</a>
                <a href="#">Digital Marketing</a>
              </div>
            </div>
            <div className="nav-item">
              <a href="#">Teachers <img className="arrow-img" src="img/arrow2.png" alt="" /></a>
              <div className="sub-menu">
                <a href="#">John Doe <i class="arrow down"></i></a>
                <a href="#">Jane Doe</a>
                <a href="#">Robert Paul</a>
                <a href="#">Imam Malik</a>
              </div>
            </div>
            <div className="nav-item">
              <a href="#">Offers <img className="arrow-img" src="img/arrow2.png" alt="" /></a>
              <div className="sub-menu">
                <a href="#">Free Trial</a>
                <a href="#">20% Off</a>
                <a href="#">50% off</a>
              </div>
            </div>
            <div className="nav-item"><a href="#">Contact</a></div>
            <div className="nav-item nav-buttons inside-buttons">
              <button className="btn1">Sign In</button>
              <button className="btn2">Free Trial</button>
            </div>
          </div>
        <div className="nav-buttons outside-buttons">
            <button className="btn1">Sign In</button>
            <button className="btn2">Free Trial</button>
        </div>
        <div className={`nav-toggle ${isOpen && 'open'}`} onClick={()=> setIsopen(!isOpen)}>
          <img src="img/hamburger-menu.svg" alt="" />
        </div>
      </nav>
  )
 
}

export default Navbar;