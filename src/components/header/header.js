import Open from "../rightOpen/open";
import React from "react";
import "./header.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

<link
  href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800;900&display=swap"
  rel="stylesheet"
></link>;

const Header = () => {


  const [isopen, setIsopen] = useState(false);
  const [isShow, setIsShow] = useState(true);
  const [navbar, setnavbar] = useState(false);
  const ToggleSidebar = () => {
    setIsopen(!isopen);
    setIsShow(!isShow);
  };
  const changeBackground = () => {
    if (window.scrollY > 80) {
      setnavbar(true);
    } else {
      setnavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);


  function refreshPage() {
    setTimeout(()=>{
        window.location.reload(true);
    }, 10);
}
function refreshContact() {
  setTimeout(()=>{
      window.location.reload(false);
  }, 10);
}
function refreshPortfolio() {
  setTimeout(()=>{
      window.location.reload(false);  
  }, 10);
}
function refreshBlog() {
  setTimeout(()=>{
      window.location.reload(false);
  }, 10);
}

  return (
    <>
      <div className={navbar ? "main active" : "main"}>
        <div className="container">
          <div className="spacing">
            <div className="innerNav">
              <div className="logo">
                <img src="logoMain.png" className="logoImg" />
              </div>
              <div className="navContentMain">
                <ul className="ulNav">
                  {/* <li className="liNav">
                    <NavLink to="/" className="anchNav">
                      HOME
                    </NavLink>
                  </li> */}
                  <li className="liNav">
                    <NavLink to="/service" className="anchNav" onClick={refreshPage}>
                      SERVICES
                    </NavLink>
                  </li>
                  <li className="liNav">
                    <NavLink to="/subPortfolio" className="anchNav" onClick={refreshPortfolio}>
                      PORTFOLIO
                    </NavLink>
                  </li>
                  <li className="liNav">
                    <NavLink to="/blog" className="anchNav" onClick={refreshBlog}>
                      BLOG
                    </NavLink>
                  </li>
                  <li className="liNav">
                    <NavLink to="/contactUs" className="anchNav" onClick={refreshContact}>
                      CONTACT US
                    </NavLink>
                  </li>
                  <li className="rightLogo" onClick={ToggleSidebar}>
                    <NavLink className="rightLogoNav">
                      <img src="nine.png" />
                    </NavLink>
                  </li>
                </ul>
              </div>
              {/* <div className='rightLogo'>
          <img src='nine.png' />
        </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* {isShow ? <header setIsShow={setIsShow} /> : ""} */}
      {isopen ? <Open setIsopen={setIsopen} /> : ""}
    </>
  );
};

export default Header;
