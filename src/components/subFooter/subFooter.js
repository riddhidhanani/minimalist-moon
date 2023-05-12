import React from "react";
import ContactUs from "../../pages/contactUs";
import "./subFooter.css";
import { Routes, Route, useNavigate } from "react-router-dom";

const SubFooter = () => {
  const navigate = useNavigate();
  const navigateToContacts = () => {
    navigate("/contactUs");
  };
  return (
    <div>
      <div className="subFooterContainer">
        <div className="subFooterTop">{/* <img src='office.jpg' /> */}</div>
        <div className="subFooterBottom">
          <div className="innersubFooterBottom">
            <div className="leftSubFooter">
              <div className="leftSubFooterTop">
                <div className="allSocial">
                  <div className="allSocialDiv">
                    <img src="allSocialMain.png" />
                  </div>

                  <p className="avoid">
                    When do they work well, and when do they on us and finally,
                    when do we actually need how can we avoid them.
                  </p>

                  <ul className="socialFooterUl">
                    <li className="socialFooterLi">
                      <a className="socialFooterAnch">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="8.755"
                          height="16.186"
                          viewBox="0 0 8.755 16.186"
                        >
                          <path
                            id="facebook-svgrepo-com_1_"
                            data-name="facebook-svgrepo-com (1)"
                            d="M18.8,5,16.373,5A3.686,3.686,0,0,0,12.49,8.985V10.82H10.05v3.322h2.44l0,7.044H15.9l0-7.044h2.8l0-3.321H15.9V9.264c0-.749.177-1.128,1.152-1.128H18.8L18.8,5Z"
                            transform="translate(-10.05 -5.001)"
                            fill="#999"
                          />
                        </svg>
                      </a>
                    </li>
                    <li className="socialFooterLi">
                      <a className="socialFooterAnch">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14.173"
                          height="14.187"
                          viewBox="0 0 14.173 14.187"
                        >
                          <path
                            id="instagram-svgrepo-com"
                            d="M11.1,7.463a3.63,3.63,0,1,0,1.394.275A3.638,3.638,0,0,0,11.1,7.463Zm0,6.008a2.369,2.369,0,1,1,1.676-.694A2.369,2.369,0,0,1,11.1,13.471Zm4.641-6.159a.887.887,0,1,1-.26-.628A.887.887,0,0,1,15.743,7.312Zm2.4.887A4.18,4.18,0,0,0,17,5.226,4.18,4.18,0,0,0,14.03,4.055C12.876,4,9.326,4,8.173,4.055A4.2,4.2,0,0,0,5.2,5.2,4.18,4.18,0,0,0,4.055,8.173C4,9.326,4,12.876,4.055,14.03A4.18,4.18,0,0,0,5.2,17a4.2,4.2,0,0,0,2.973,1.145c1.171.071,4.686.071,5.857,0A4.18,4.18,0,0,0,17,17a4.18,4.18,0,0,0,1.145-2.973c.053-1.154.053-4.7,0-5.857Zm-1.509,7.1a2.4,2.4,0,0,1-1.349,1.349,15.971,15.971,0,0,1-4.189.284,15.9,15.9,0,0,1-4.18-.284A2.4,2.4,0,0,1,5.572,15.3,15.617,15.617,0,0,1,5.28,11.11a15.591,15.591,0,0,1,.293-4.189A2.352,2.352,0,0,1,6.921,5.564,15.9,15.9,0,0,1,11.1,5.28a15.974,15.974,0,0,1,4.189.284,2.4,2.4,0,0,1,1.349,1.349,15.617,15.617,0,0,1,.284,4.189,15.592,15.592,0,0,1-.284,4.189Z"
                            transform="translate(-4.015 -4.015)"
                            fill="#999"
                          />
                        </svg>
                      </a>
                    </li>
                    <li className="socialFooterLi">
                      <a className="socialFooterAnch">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13.595"
                          height="13.595"
                          viewBox="0 0 13.595 13.595"
                        >
                          <path
                            id="linkedin-rounded-svgrepo-com"
                            d="M-130.467,145h-11.47A1.062,1.062,0,0,0-143,146.062v11.47a1.062,1.062,0,0,0,1.062,1.062h11.47a1.062,1.062,0,0,0,1.062-1.062v-11.47A1.062,1.062,0,0,0-130.467,145Zm-7.636,9.641h-1.325V150.4h1.325Zm-.7-4.771h-.011a.736.736,0,0,1-.791-.735.743.743,0,0,1,.81-.735.74.74,0,0,1,.8.735A.739.739,0,0,1-138.8,149.87Zm6,4.771h-1.5v-2.193c0-.574-.234-.966-.751-.966a.757.757,0,0,0-.717.52,1,1,0,0,0-.032.348v2.291h-1.49s.019-3.887,0-4.24h1.49v.666a1.356,1.356,0,0,1,1.322-.706c.943,0,1.681.611,1.681,1.922Z"
                            transform="translate(143 -145)"
                            fill="#999"
                          />
                        </svg>
                      </a>
                    </li>
                    <li className="socialFooterLi">
                      <a className="socialFooterAnch">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16.375"
                          height="13.309"
                          viewBox="0 0 16.375 13.309"
                        >
                          <path
                            id="twitter-svgrepo-com"
                            d="M10.15,20.368A9.487,9.487,0,0,1,5,18.855a6.735,6.735,0,0,0,4.973-1.39,3.358,3.358,0,0,1-3.137-2.335,3.282,3.282,0,0,0,.631.061,3.5,3.5,0,0,0,.888-.116,3.363,3.363,0,0,1-2.7-3.293v-.044a3.333,3.333,0,0,0,1.52.42A3.362,3.362,0,0,1,6.14,7.673a9.535,9.535,0,0,0,6.924,3.509A3.362,3.362,0,0,1,18.789,8.12a6.778,6.778,0,0,0,2.133-.814,3.381,3.381,0,0,1-1.476,1.859,6.758,6.758,0,0,0,1.929-.528A6.909,6.909,0,0,1,19.7,10.376c.006.144.01.289.01.434a9.5,9.5,0,0,1-9.56,9.558"
                            transform="translate(-5 -7.06)"
                            fill="#999"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="informationDiv">
                  <div className="innerInformation">
                    <h2 className="informationHead">Information</h2>
                    <div className="informationList">
                      <ul className="informationUl">
                        <li className="informationLi">
                          <a className="anchInformation">About</a>
                        </li>
                        <li className="informationLi">
                          <a className="anchInformation">Services</a>
                        </li>
                        <li className="informationLi">
                          <a className="anchInformation">Portfolio</a>
                        </li>
                        <li className="informationLi">
                          <a className="anchInformation">Blog</a>
                        </li>
                        <li className="informationLi">
                          <a className="anchInformation">Faqs</a>
                        </li>
                        <li className="informationLi">
                          <a className="anchInformation">Contact Us</a>
                        </li>
                        <li className="informationLi">
                          <a className="anchInformation">Sitemap</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="contactDiv">
                  <div className="innerCintactDiv">
                    <h2 className="contactFooterHead">Contact Us</h2>
                    <div className="contactBottom">
                      <ul className="contactFooterUl">
                        <li className="contactFooterLi">
                          Chicago, USA - 60131
                        </li>
                        <li className="contactFooterLi">
                          <a
                            className="contactFooterAnch"
                            href="tel:+1 (815) 515-9250"
                          >
                            +1 (815) 515-9250{" "}
                          </a>
                        </li>
                        <li className="contactFooterLi">
                          <a
                            className="contactFooterAnchMail"
                            href="mailto:minimalistmoon116@gmail.com"
                          >
                            minimalistmoon116@gmail.com{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="allRights">
                <div className="allRightsInner">
                  <p className="reservedStyle">
                    © 2022 - 2025 | Alrights reserved by
                    <a className="reservedAnch">MinimalistMoon</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="rightSubFooter">
              <div className="innerrightSubFooter">
                <h2 className="inMindHead">Have a project in your mind?</h2>
                <button className="MoonDivFooter" onClick={navigateToContacts}>
                  <div className="mainknowStyleFooter">
                    <div className="knowStyle">Contact Us</div>
                  </div>

                  <div className="slantArrow">
                    <img src="slant.png" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
