import React from "react";
import "./feature.css";
import { useRef, useEffect, useState, useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Feature = (props) => {
  // const listFeature = props.myData.map((ele) => {
  //   return ele.section5;
  // });
  // console.log("List is :", listFeature);
  // const listFeature1 = listFeature.map((elem) => {
  //   console.log(elem,"....")
  //   return elem.map((e)=>{
  //     return e.title
  //   })
  // });
  // console.log("lf1",listFeature1)
  // console.log("sect 5",listFeature1)
  // elem.map((e) => {
  //   console.log(e);
  // })
  const allSlides = [
    {
      upper: "GRAPHIC",
      imgUrl: "graphic.png",
    },
    {
      upper: "PRESENTATION",
      imgUrl: "presentation.png",
    },
    {
      upper: "UI/UX",
      imgUrl: "UI.png",
    },
    {
      upper: "BRANDING",
      imgUrl: "branding.png",
    },
  ];

  const [isSlides, setIsSlides] = useState(allSlides);
  const ref11 = useRef(null);
  const isInViewport11 = useIsInViewport(ref11);

  //  slidecount = $('#innerRightSlideID').length;
  // var slideWidth = $('#innerRightSlideID').width();
  // var slideHeight = $('#innerRightSlideID').height();
  // var sliderUlWidth = slidecount * slideWidth;

  // const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const tick = () => setIndex((i) => i + 1);
  //   const Id = setInterval(tick, 4000);
  //   return () => clearInterval(Id);
  // }, []);

  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const isInViewport1 = useIsInViewport(ref1);
  // console.log("isInViewport1: ", isInViewport1);

  const isInViewport2 = useIsInViewport(ref2);
  // console.log("isInViewport2: ", isInViewport2);

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

    // useEffect(() => {
    //   observer.observe(ref.current);

    //   return () => {
    //     observer.disconnect();
    //   };
    // }, [ref, observer]);

    return isIntersecting;
  }

  const settingsAuto = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    fadeUp: true,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: (
      <div>
        <div>
          <svg
            id="Group_30615"
            data-name="Group 30615"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
          >
            <g
              id="Ellipse_6"
              data-name="Ellipse 6"
              fill="none"
              stroke="#b1b1b1"
              strokeWidth="1"
            >
              <circle cx="25" cy="25" r="25" stroke="none" />
              <circle cx="25" cy="25" r="24.5" fill="none" />
            </g>
            <path
              id="arrow-small-left"
              d="M24.689,13.188H10.313l4.73-4.73a1.438,1.438,0,0,0-2.027-2.041L6.848,12.6A2.875,2.875,0,0,0,6,14.626H6a2.875,2.875,0,0,0,.848,2.013l6.167,6.182a1.438,1.438,0,1,0,2.027-2.041l-4.73-4.715H24.689a1.438,1.438,0,0,0,0-2.875Z"
              transform="translate(8.937 10.382)"
              fill="#b1b1b1"
            />
          </svg>
        </div>
      </div>
    ),
    nextArrow: (
      <div>
        <div>
          <svg
            id="Group_30614"
            data-name="Group 30614"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
          >
            <g
              id="Ellipse_6"
              data-name="Ellipse 6"
              fill="none"
              stroke="#b1b1b1"
              strokeWidth="1"
            >
              <circle cx="25" cy="25" r="25" stroke="none" />
              <circle cx="25" cy="25" r="24.5" fill="none" />
            </g>
            <path
              id="arrow-small-left"
              d="M7.438,13.188H21.814l-4.73-4.73a1.438,1.438,0,0,1,2.027-2.041L25.278,12.6a2.875,2.875,0,0,1,.848,2.027h0a2.875,2.875,0,0,1-.848,2.013L19.111,22.82a1.438,1.438,0,1,1-2.027-2.041l4.73-4.715H7.438a1.438,1.438,0,0,1,0-2.875Z"
              transform="translate(8.937 10.382)"
              fill="#b1b1b1"
            />
          </svg>
        </div>
      </div>
    ),
  };

  return (
    <>
      <div className="mainFeatured">
        <div className="featureContainer">
          <div className="featureSpacing">
            <div className="innerFeature">
              <div className="headDiv">
                <p
                  className={
                    isInViewport11 ? "styleHead styleHeadAnim" : "styleHead"
                  }
                  ref={ref11}
                >
                  FEATURED WORK
                </p>
              </div>
              <div className="outOfMain">
                <div className="changeMain">
                  <Slider {...settingsAuto}>
                    {isSlides.map((el, index) => {
                      return (
                        <div key={index}>
                          <div className="leftOut">
                            <div className="numberMain">
                              <div className="changeNumber">
                                <p>{index + 1}</p>
                              </div>
                              <div className="slash">
                                <p>/</p>
                              </div>
                              <div className="four">
                                <p>{isSlides.length}</p>
                              </div>
                            </div>
                            <div className="middleOut">
                              <div className="fourcategoryDiv" ref={ref1}>
                                <div className="mainH3">
                                  <h3 className="upperH3">{el.upper}</h3>
                                  <h3 className="lowerH3">DESIGN</h3>
                                </div>
                              </div>
                            </div>
                            <div className="rightOut" ref={ref2}>
                              <div className="rightInner">
                                <img className="graphic" src={el.imgUrl}></img>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </Slider>
                </div>


                {/* <div>
                      <div className="leftOut">
                        <div className="numberMain">
                          <div className="changeNumber">
                            <p>2</p>
                          </div>
                          <div className="slash">
                            <p>/</p>
                          </div>
                          <div className="four">
                            <p>4</p>
                          </div>
                        </div>
                        <div className="middleOut">
                          <div className="fourcategoryDiv" ref={ref1}>
                            <div className="mainH3">
                              <h3 className="upperH3">Presentation</h3>
                              <h3 className="lowerH3">Design</h3>
                            </div>
                          </div>
                        </div>
                        <div className="rightOut" ref={ref2}>
                          <div className="rightInner">
                            <img
                              className="graphic"
                              src="presentation.png"
                            ></img>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="leftOut">
                        <div className="numberMain">
                          <div className="changeNumber">
                            <p>3</p>
                          </div>
                          <div className="slash">
                            <p>/</p>
                          </div>
                          <div className="four">
                            <p>4</p>
                          </div>
                        </div>
                        <div className="middleOut">
                          <div className="fourcategoryDiv" ref={ref1}>
                            <div className="mainH3">
                              <h3 className="upperH3">UI/UX</h3>
                              <h3 className="lowerH3">Design</h3>
                            </div>
                          </div>
                        </div>
                        <div className="rightOut" ref={ref2}>
                          <div className="rightInner">
                            <img className="graphic" src="UI.png"></img>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="leftOut">
                        <div className="numberMain">
                          <div className="changeNumber">
                            <p>4</p>
                          </div>
                          <div className="slash">
                            <p>/</p>
                          </div>
                          <div className="four">
                            <p>4</p>
                          </div>
                        </div>
                        <div className="middleOut">
                          <div className="fourcategoryDiv">
                            <div className="mainH3">
                              <h3 className="upperH3">Branding</h3>
                              <h3 className="lowerH3">Design</h3>
                            </div>
                          </div>
                        </div>
                        <div className="rightOut">
                          <div className="rightInner">
                            <img className="graphic" src="branding.png"></img>
                          </div>
                        </div>
                      </div>
                    </div> */}

                {/* <div className="rightSlide">
                <div className="innerRightSlide" id="innerRightSlideID">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20.126"
                    height="17.239"
                    viewBox="0 0 20.126 17.239"
                  >
                    <path
                      id="arrow-small-left"
                      d="M7.438,13.188H21.814l-4.73-4.73a1.438,1.438,0,0,1,2.027-2.041L25.278,12.6a2.875,2.875,0,0,1,.848,2.027h0a2.875,2.875,0,0,1-.848,2.013L19.111,22.82a1.438,1.438,0,1,1-2.027-2.041l4.73-4.715H7.438a1.438,1.438,0,0,1,0-2.875Z"
                      transform="translate(-6 -5.999)"
                      fill="#fefefe"
                    />
                  </svg>
                </div>
              </div> */}
              </div>
              {/* )
                    }) */}

              {/* } */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
