import React from "react";
import "./mainService.css";
import { Link } from "react-router-dom";
import { MouseContainer, ChasingElement } from "react-mouse-image-move";


const MainService = () => {

  return (
    <>
    <div>

      {/* <div className="pathOf">
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
            <span className="ourServiceTop">Our Services</span>
          </li>
        </ol>
      </div> */}

      <div className="mainServiceContainer">
        <div className="mainServiceSpacing">
          <div className="mainServiceInner">
            <MouseContainer 
            options={{
              effectType: "movement", // Type of effect to your element
              max: 10, // Element child rotation
              easing: "cubic-bezier(.03,.98,.52,.99)", // Transition between values
              scale: 1.05, // How much does the size increase
              speed: 1000, // Speed for transition element
              axis: null, // "x" only move horizontaly, "y" only move verticaly, "null" both
              reset: false,
            }}
            chasingElement={
              <>
              <ChasingElement className="service1Image">
                <img src="service1.png" className="imgService1" />
              </ChasingElement>
              <ChasingElement className="service3Image">
                <img className="imgService3" src="service3.png" />
              </ChasingElement>
              </>
            }
            />

            <div className="mainServiceMiddle">
              <h1 className="ourServiceHead">Our Services</h1>
              <p className="tenPlus">
                Our designers have 10+ years of experience in creating beautiful
                and functional designs for a wide range of industries. We
                specialize in branding, logo design, web design, packaging
                design, and print design. Our team is constantly staying
                up-to-date with the latest design trends and technologies to
                ensure that our clients receive the most innovative and
                effective design solutions.
              </p>
            </div>

            <MouseContainer 
            options={{
              effectType: "movement", // Type of effect to your element
              max: 10, // Element child rotation
              easing: "cubic-bezier(.03,.98,.52,.99)", // Transition between values
              scale: 1.05, // How much does the size increase
              speed: 1000, // Speed for transition element
              axis: null, // "x" only move horizontaly, "y" only move verticaly, "null" both
              reset: false,
            }}
            chasingElement={
              <chasingElement className="service2Image">
                <img className="imgService2" src="service2.png"></img>
              </chasingElement>
            }
            />
          </div>

          <div className="threeSteps">
            <ul className="threeStepsUl">
              <li className="difffirstStep">Approach</li>
              <li className="secStep">Creativity</li>
              <li className="thirdStep">Experienced</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
 
    </>
    
  );
};

export default MainService;
