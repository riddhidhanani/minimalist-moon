import React, { useState } from "react";
import "./verticalHeader.css";
import Open from "../rightOpen/open";

const VerticalHeader = () => {
  const [isopen, setIsopen] = useState(false);
  const [isShow, setIsShow] = useState(true);
  const [navbar, setnavbar] = useState(false);
  const ToggleSidebar = () => {
    setIsopen(!isopen);
    setIsShow(!isShow);
  };
  return (
    <div>
      <div className="mainVerticalHeader" style={{ zIndex: "1" }}>
        <div className="mainVerticalHeaderInner">
          <div className="verticalLogo">
            <a className="verticalImgAnch">
              <img src="verticallogo.png" />
            </a>
          </div>
          <div className="verticalNine">
            <button className="nineGridVertical" onClick={ToggleSidebar}>
              
              
              <img src="nine.png" />
            </button>
          </div>
          <div className="verticalSupport">
            <p className="telephoenRotate">
              Support Center
              <a href="tel:+1 (815) 515-9250">+1 (815) 515-9250</a>
            </p>
          </div>
        </div>
      </div>
      {/* {isShow ? <verticalHeader setissshow={setIsShow} /> : ""} */}
      {isopen ? <Open setIsopen={setIsopen} /> : ""}
    </div>
  );
};

export default VerticalHeader;
