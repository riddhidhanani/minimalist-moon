import React,{useState} from "react";
import "./open.css";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Faq from "../faq/faq";

const Open = (props) => {
  // const navigate = useNavigate();
  // const navigateToFaq = () => {
  //   navigate("/faq");
  // };
  const [isFaq,setIsFaq] = useState(false)

  const handleClose = () => {

    props.setIsopen(false);
  };
  function refreshPage() {
    setTimeout(()=>{
        window.location.reload(false);
    }, 50);
}
function refreshContact() {
  setTimeout(()=>{
      window.location.reload(false);
  }, 50);
}
function refreshPortfolio() {
  setTimeout(()=>{
      window.location.reload(false);
  }, 50);
}
function refreshBlog() {
  setTimeout(()=>{
      window.location.reload(false);
  }, 50);
}
  return (
    <div className="mainOpen">
      <div className="leftSocial">
        <div className="moonLogo">
          <img src="logoMain.png" className="moonLogoImg" />
        </div>
        <div className="followMain">
          <h4>Follow Us</h4>
          <div className="followList">
            <ul className="ulFollow">
              <li className="liFollow">
                <a className="anchFollow" href="https://www.instagram.com/">
                  Instagram
                </a>
              </li>
              <li className="liFollow">
                <a className="anchFollow" href="https://www.facebook.com/">
                  Facebook
                </a>
              </li>
              <li className="liFollow">
                <a className="anchFollow" href="https://www.youtube.com/">
                  You Tube
                </a>
              </li>
              <li className="liFollow">
                <a className="anchFollow" href="https://www.twitter.com/">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="faqRight">
          <a className="faqLeftStyle" onClick={()=>setIsFaq(true)}>
            FAQs
          </a>
          {isFaq && <Faq/>}
        </div>
      </div>
      <div className="listNav">
        <div className="listNavMain">
          <ul className="ulListNav">
            <li className="liListNav">
              <NavLink to="/" className="anchListNav">
                HOME
              </NavLink>
            </li>
            <li className="liListNav">
              <NavLink to="" className="anchListNav">
                ABOUT
              </NavLink>
            </li>
            <li className="liListNav">
              <NavLink to="/service" className="anchListNav" onClick={refreshPage}>
                SERVICES
              </NavLink>
            </li>
            <li className="liListNav">
              <NavLink to="/subPortfolio" className="anchListNav" onClick={refreshPortfolio}>
                PORTFOLIO
              </NavLink>
            </li>
            <li className="liListNav">
              <NavLink to="/blog" className="anchListNav" onClick={refreshBlog}>
                BLOG
              </NavLink>
            </li>
            <li className="liListNav">
              <NavLink to="/contactUs" className="anchListNav" onClick={refreshContact}>
                CONTACT US
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="rightAddress">
        <div className="crossDiv">
          <button className="circleCross" onClick={handleClose}>
            <img src="cross.png" className="crossImg" />
          </button>
        </div>
        <div className="addressMain">
          <div className="getMain">
            <h3 className="getMainStyle"> Get in touch</h3>
          </div>
          <div className="numberMailMain">
            <ul className="ulNumberMail">
              <li className="liNumber">
                <a href="tel:+1 (815) 515-9250" className="anchNumber">
                  {" "}
                  +1 (815) 515-9250
                </a>
              </li>
              <li className="liMail">
                <a
                  href="mailto:minimalistmoon116@gmail.com"
                  className="anchMail"
                >
                  minimalistmoon116@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="stateMain">
            <p className="stateStyle"> Chicago,USA-60131</p>
          </div>
        </div>

        <div className="moonImg">
          <div className="innerMoonImgDiv">
            <img src="moon.png" className="innerMoonImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Open;
