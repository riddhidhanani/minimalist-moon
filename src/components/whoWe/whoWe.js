import React from "react";
import { useRef, useEffect, useState, useMemo } from "react";
import "./whoWe.css";
import { Routes, Route, useNavigate } from "react-router-dom";

{
  /* <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
</link> */
}

const WhoWe = (props) => {
  function refreshPage() {
    setTimeout(() => {
      window.location.reload(false);
    }, 100);
  }
  // const [secData, setSecData] = useState({});

  const navigate = useNavigate();
  const navigateToService = () => {
    navigate("/service");
  };

  // const list = props.myData.map((elem) => {
  //   return elem.section3;
  // });

  // const title2 = list.map((e,i) => {
  //   return e.title2;
  // });
  // const title1 = list.map((e,i) => {
  //   return e.title1;
  // });

  // const description = list.map((e,i) => {
  //   return e.description;
  // });

  // const imageApi = list.map((e,i) => {
  //   return e.image.url;
  // });

  const ref4 = useRef(null);
  const isInViewport4 = useIsInViewport(ref4);
  const ref5 = useRef(null);
  const isInViewport5 = useIsInViewport(ref5);
  const ref6 = useRef(null);
  const isInViewport6 = useIsInViewport(ref6);
  const ref7 = useRef(null);
  const isInViewport7 = useIsInViewport(ref7);
  const ref9 = useRef(null);
  const isInViewport9 = useIsInViewport(ref9);

  function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    if (isIntersecting == true) {
    }
    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting)
        ),
      []
    );

    useEffect(() => {
      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);

    return isIntersecting;
  }

  return (
    <>
      <div className="mainWhoWe">
        <div className="WhoWeContainer">
          <div className="spacingWhoWe">
            <div className="whoWeDiv">
              <div className="whoLeftDiv">
                <img
                  src="whoWe.png"
                  className={
                    isInViewport4 ? "whoWeImg whoWeImgAnim" : "whoWeImg"
                  }
                ></img>
              </div>

              <div className="whoRightDiv">
                <div className="whoWeMainHead">
                  <div className="are">
                    <p
                      className={
                        isInViewport4 ? "areStyle areStyleAnim" : "areStyle"
                      }
                      ref={ref4}
                    >
                      WHO WE ARE
                    </p>
                  </div>
                  <div className="leading">
                    <p
                      className={
                        isInViewport5
                          ? "leadingStyle leadingStyleAnim"
                          : "leadingStyle"
                      }
                      ref={ref5}
                    >
                      TRANSFORMING IDEAS INTO EXCEPTIONAL DESIGNS
                    </p>
                  </div>
                </div>

                <div className="leadingDiscDiv" ref={ref9}>
                  <div className="leadingDisc">
                    <p
                      className={
                        isInViewport5
                          ? "leadingDiscStyle leadingDiscStyleAnim"
                          : "leadingDiscStyle"
                      }
                      ref={ref6}
                    >
                      Want to make your brand look sleek and stylish without
                      breaking the bank? Our affordable graphic design services
                      in the USA have got you covered. Our custom branding
                      solutions and minimalist design approaches are sure to
                      impress, leaving your competition in the dust.
                    </p>
                  </div>
                  <div
                    className={
                      isInViewport7 ? "MoonDiv MoonDivAnim" : "MoonDiv"
                    }
                    onClick={function (event) {
                      navigateToService();
                      refreshPage();
                    }}
                    ref={ref7}
                  >
                    <div className="mainknowStyle">
                      <div className="knowStyle">Explore Our</div>
                      <div className="knowStyle">Services</div>
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
      </div>
    </>
  );
};

export default WhoWe;
