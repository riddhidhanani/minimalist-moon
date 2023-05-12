import React from "react";
import "./parent.css";
import { Routes, Route, useNavigate } from "react-router-dom";

const Parent = () => {
  const navigate = useNavigate();
  const navigateToService = () => {
    navigate("/service");
  };
  function refreshPage() {
    setTimeout(()=>{
        window.location.reload(false);
    }, 100);
}
  return (
    <div className="mainParent">
      <div className="containerParent">
        <div className="spacingParent">
          <div className="threeParts">
            <div className="designUnique">
              <h1 className="designUniqueStyle">
            
               <div>Y</div>
               <div>o</div>
               <div>u</div>
               <div>r</div>
              </h1>
              <h1 className="designUniqueStyleVision">
              <div>V</div>
               <div>i</div>
               <div>s</div>
               <div>i</div>
               <div>o</div>
               <div>n</div>
              </h1>
            </div>
            <div className="rightArrow">
              <img src="arrowupsvgrepocom.png" className="rightArrowStyle" />
            </div>
            <div className="digitalExperience">
              <h1 className="digitalExperienceStyle">
              <div>O</div>
               <div>u</div>
               <div>r</div>
             
              </h1>
              <h1 className="digitalExperienceStyleCreation">
              <div>C</div>
               <div>r</div>
               <div>e</div>
               <div>a</div>
               <div>t</div>
               <div>i</div>
               <div>o</div>
               <div>n</div>
              </h1>
            </div>
          </div>
          <div className="thinkingMain">      
            <p className="thinkingStyle">
              When your ideas and our creativity meet.
            </p>
            <div className="MoonDiv" onClick={function(event){navigateToService();}}>
              <div className="mainknowStyle">
                <div className="knowStyle">Explore Our</div>
                <div className="knowStyle">Services</div>
              </div>

              <div className="slantArrow">
                <img src="slant.png" />
              </div>
            </div>
          </div>

          <div className="parentMoonDiv"></div>
        </div>
      </div>
    </div>
  );
};

export default Parent;
