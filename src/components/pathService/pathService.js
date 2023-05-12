import React from 'react'
import { Link } from "react-router-dom";


const PathService = () => {
  function refreshHome() {
    setTimeout(()=>{
        window.location.reload(false);
    }, 10 );
}
  return (
    <div>
      <div className="pathOf">
        <ol className="pathServiceOl">
          <li className="pathServiceLi">
            <span className="homeAnchService">
              <Link to="/" className="pathServiceHome" onClick={refreshHome}>
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
      </div>
    </div>
  )
}

export default PathService
