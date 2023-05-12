import React, { useState } from "react";
import "./footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const navigateToContacts = () => {
    navigate("/contactUs");
  };


  return (
    <div>
      <div className="mainFooter">
        <div className="upperFooter">
          <div className="leftUpper">
            <img src="logoMain.png"></img>
            <p className="ideaStyle">
            If you have a product idea that needs design expertise or looking for a creative designer for creating attractive designs for your business, schedule a strategy call by submitting your details. 
            </p>
          </div>
          <div className="middleUpper">
            <ul className="footerUl">
              <li className="footerLi">
                <a className="anchFooter" href="https://www.facebook.com/">
                  FACEBOOK
                </a>
              </li>
              <li className="footerLi">
                <a className="anchFooter" href="https://www.twitter.com/">
                  TWITTER
                </a>
              </li>
              <li className="footerLi">
                <a className="anchFooter" href="https://www.linkedin.com/">
                  LINKEDIN
                </a>
              </li>
              <li className="footerLi">
                <a className="anchFooter" href="https://www.instagram.com/">
                  INSTAGRAM
                </a>
              </li>
            </ul>
          </div>
          <div className="rightUpper">
            <div className="waveTextAnimated" onClick={navigateToContacts}>
              <span style={{ color: "rgb(249, 211, 113)" }}>L</span>
              <span style={{ color: "rgb(247, 179, 97)" }}>E</span>
              <span style={{ color: "rgb(246, 147, 80)" }}>T</span>
              <span style={{ color: "rgb(244, 115, 64)" }}>'</span>
              <span className="marginS" style={{ color: "rgb(242, 92, 88)" }}>
                S
              </span>

              <span className="marginT" style={{ color: "rgb(241, 70, 112)" }}>
                T
              </span>
              <span style={{ color: "rgb(239, 47, 136)" }}>A</span>
              <span style={{ color: "rgb(205, 54, 171)" }}>L</span>
              <span style={{ color: "rgb(170, 60, 207)" }}>K</span>
            </div>
          </div>
        </div>
        <div className="lowerFooter">
          <div className="lowerFooterinner">
            <div className="lowestLeft">
              <div className="reserved">
                <p className="reservedStyle">
                  © 2022 - 2025 | Alrights reserved by
                  <a className="reservedAnch">MinimalistMoon</a>
                </p>
              </div>
            </div>
            <div className="lowestRight">
              <div className="navContentMain">
                <ul className="ulNavFooter">
                  <li className="liNav">
                    <a href="#" className="anchNavFooter">
                      ABOUT US
                    </a>
                  </li>
                  <li className="liNav">
                    <a href="#" className="anchNavFooter">
                      SERVICES
                    </a>
                  </li>
                  <li className="liNav">
                    <a href="#" className="anchNavFooter">
                      PORTFOLIO
                    </a>
                  </li>
                  <li className="liNav">
                    <a href="#" className="anchNavFooter">
                      BLOG
                    </a>
                  </li>
                  <li className="liNav">
                    <a href="#" className="anchNavFooter">
                      FAQS
                    </a>
                  </li>
                  <li className="liNav">
                    <a href="#" className="anchNavFooter">
                      SITEMAP
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
