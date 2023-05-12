import React from "react";
import { useNavigate } from "react-router-dom";
import "./workWithUs.css";
import Design from "../designs/design";

const WorkWithUs = () => {
  const navigate = useNavigate();
  const navigateToContacts = () => {
    navigate("/contactUs");
  };
  function refreshContact() {
    setTimeout(()=>{
        window.location.reload(false);
    }, 10);
  }
  return (
    <>

    <div>
      <div className="workContainer">
        <div className="workSpacing">
          <div className="workInner">
            <p className="buttonWork">WORK WITH US</p>
            <h2 className="hearMore">
              We would love to hear more about your project
            </h2>
            <div className="moonMain" onClick={function(event){navigateToContacts(); refreshContact();}}>
              <div className="whiteMoonDivPortfolio">
                <div className="whiteMainknowStyle">
                  <div className="whiteknowStyle">Let's</div>
                  <div className="whiteknowStyle">Talk</div>
                </div>
                <div className="slantArrow">
                  <img src="slant.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
    
  );
};

export default WorkWithUs;
