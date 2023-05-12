import React,{useEffect,useState} from "react";
import VerticalHeader from "../components/verticalHeader/verticalHeader";
import { Link } from "react-router-dom";
import Portfolio from "../components/portfolio/portfolio";
import SubFooter from "../components/subFooter/subFooter";
import "../subPortfolio.css";
import Loading from "../components/loading/loading";

const SubPortfolio = () => {
  function refreshHome() {
    setTimeout(()=>{
        window.location.reload(false);
    }, 1000);
}

  return (
    <>
    <div>
    <VerticalHeader />
    <div className="pathOf">
      <ol className="pathServiceOl">
        <li className="pathServiceLi">
          <span className="homeAnchService">
            <Link to="/" className="pathServiceHome">
              Home
            </Link>
          </span>
        </li>

        <li className="pathServiceLi">
          <span className="slashMargin">/</span>
        </li>

        <li className="pathServiceLi">
          <span className="ourServiceTop">Portfolio</span>
        </li>
      </ol>
    </div>
    <div className="spacingForPortfolio">
      <div className="leftpaddingForPortfolio"></div>
      <Portfolio />
    </div>
    <SubFooter />
  </div>

    </>
  );
};

export default SubPortfolio;
