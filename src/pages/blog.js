import React from "react";
import VerticalHeader from "../components/verticalHeader/verticalHeader";
import { Link } from "react-router-dom";
import Journal from "../components/journal/journal";
import SubFooter from "../components/subFooter/subFooter";

const Blog = () => {
  
//   function refreshHome() {
//     setTimeout(()=>{
//         window.location.reload(false);
//     }, 100);
// }
  return (
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
            <span className="ourServiceTop">Blog</span>
          </li>
        </ol>
      </div>
      <Journal />
      <SubFooter />
    </div>
  );
};

export default Blog;
