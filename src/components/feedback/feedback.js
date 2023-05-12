import React, { useState } from "react";
import "./feedback.css";
import { MouseContainer, ChasingElement } from "react-mouse-image-move";
import People from "./Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Feedback = () => {
 
  const people = [
    {
      id: 1,
      company: '',
      client: 'LEVRX',
      detail:' MINIMALISTMOON was great to work with on this project.They certainly has creative talent and is very easy  to communicate with. I truly enjoyed working with their and the quality of work was fantastic and delivered to me on ...'
     
    },
    {
      id: 2,
      company: 'Johnson & Johnson',
      client: 'SUZANNE MADISON',
      detail:' Moon was great to work with on this project . they certainly has a creative talent and is very easy to communicate with . I truly enjoyed working with their and the quality of work was fantastic and delivered to me on ...',
    },
    {
      id: 3,
      company: 'TED ideas worth spreading',
      client: 'JEFF CENTRA',
      detail:'Minimalistmoon team did an excellent job with our full-page advert. I was on a time crunch and needed their support over the weekend, they turned it around within 24 hours with multiple designs. their designs were also really professional-looking . ...',
    }
  ];
  const [isPeople, setIsPeople] = useState(people);
  const styles = {
    movingAnimationMainLeft: {
      width: "40%",
      justifyContent: "none",
    },
    movingAnimationMainRight: {
      width: "40%",
      justifyContent: "none",
    },
    mainSliderFeedback: {
      width: "40%",
    },
    middleLeft: {
      margin: "190px 0px 90px 0px",
    },
    upperLeft: {
      float: "right",
    },
    bottomLeft: {
      width: "100%",
    },
    bottomLeftimg: {
      margin: "0px 0px 0px 90px",
    },
    middleRight: {
      width: "100%",
      display: "flex",
      justifyContent: "end",
      margin: "50px 0px 90px 50px",
    },
    upperRight: {
      width: "100%",
      float: "left",
      marginTop: "-88px",
    },
    bottomRight: {
      width: "100%",
      float: "left",
    },

    middleRightImg: {
      margin: "50px 20px 20px 75px",
      float: "right",
    },
    chasingElement: {
      width: "100%",
    },
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    fadeUp: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,

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

  const [state, setState] = useState(0);
  const { id, company, client, detail } = People[state];

  //   const Next = () => {
  //     setState((state + 1) % People.length);//increasing the index value
  //   }
  //   const Prev = () => {
  //     const newState = state -1;
  //     if(newState < 0) {
  //       setState(People.length-1);
  //     }
  //     else {
  //     setState(state - 1);//decreasing the index value
  //     }
  //   }

  return (
    <div>
      <div className="mainFeedBack">
        <div className="feedbackContainer">
          <div className="feedbackSpacing">
            <div className="innerfeedback">
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
                styles={styles.movingAnimationMainLeft}
                chasingElement={
                  <>
                    <ChasingElement styles={styles.upperLeft}>
                      <img src="pinkGirl.png" />
                    </ChasingElement>
                    <ChasingElement styles={styles.middleLeft}>
                      <img src="pinkSmallest.png" />
                    </ChasingElement>
                    <ChasingElement styles={styles.bottomLeft}>
                      <img src="largest.png" className="bottomLeftimg" />
                    </ChasingElement>
                  </>
                }
              />
              <div className="mainSliderFeedback">
                <div className="innerSlider" id="slider">
                  <Slider {...settings}>
                    {isPeople.map((elem, i) => {
                      return (
                        <div key={i}>
                          <div className="comaSVG">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="52.353"
                              height="40"
                              viewBox="0 0 52.353 40"
                            >
                              <path
                                id="quote"
                                d="M7.806,41.965C4.865,38.729,3.1,35.2,3.1,29.318,3.1,19.024,10.453,9.906,20.747,5.2l2.647,3.824c-9.706,5.294-11.765,12.059-12.353,16.471a8.722,8.722,0,0,1,5.588-.882,10.272,10.272,0,0,1,9.412,10.294A11.6,11.6,0,0,1,23.1,42.259,9.755,9.755,0,0,1,15.747,45.2a11.568,11.568,0,0,1-7.941-3.235Zm29.412,0c-2.941-3.235-4.706-6.765-4.706-12.647,0-10.294,7.353-19.412,17.647-24.118l2.647,3.824C43.1,14.318,41.041,21.082,40.453,25.494a8.722,8.722,0,0,1,5.588-.882,10.272,10.272,0,0,1,9.412,10.294,11.6,11.6,0,0,1-2.941,7.353A9.334,9.334,0,0,1,45.159,45.2a11.568,11.568,0,0,1-7.941-3.235Z"
                                transform="translate(-3.1 -5.2)"
                                fill="#fefefe"
                              />
                            </svg>
                          </div>
                          <div className="feedbackDetail">
                            <p className="feedbackDetailStyle">
                              {elem.detail}
                            </p>
                          </div>
                          <div className="clientDiv">
                            <h2 className="clientStyle">{elem.client}</h2>
                            <h3 className="subClientStyle">{elem.company}</h3>
                          </div>
                        </div>
                      );
                    })}

                    {/* <div>
                      <div className="comaSVG">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="52.353"
                          height="40"
                          viewBox="0 0 52.353 40"
                        >
                          <path
                            id="quote"
                            d="M7.806,41.965C4.865,38.729,3.1,35.2,3.1,29.318,3.1,19.024,10.453,9.906,20.747,5.2l2.647,3.824c-9.706,5.294-11.765,12.059-12.353,16.471a8.722,8.722,0,0,1,5.588-.882,10.272,10.272,0,0,1,9.412,10.294A11.6,11.6,0,0,1,23.1,42.259,9.755,9.755,0,0,1,15.747,45.2a11.568,11.568,0,0,1-7.941-3.235Zm29.412,0c-2.941-3.235-4.706-6.765-4.706-12.647,0-10.294,7.353-19.412,17.647-24.118l2.647,3.824C43.1,14.318,41.041,21.082,40.453,25.494a8.722,8.722,0,0,1,5.588-.882,10.272,10.272,0,0,1,9.412,10.294,11.6,11.6,0,0,1-2.941,7.353A9.334,9.334,0,0,1,45.159,45.2a11.568,11.568,0,0,1-7.941-3.235Z"
                            transform="translate(-3.1 -5.2)"
                            fill="#fefefe"
                          />
                        </svg>
                      </div>
                      <div className="feedbackDetail">
                        <p className="feedbackDetailStyle">
                          {" "}
                          Moon was great to work with on this project . they
                          certainly has a creative talent and is very easy to
                          communicate with . I truly enjoyed working with their
                          and the quality of work was fantastic and delivered to
                          me on ...
                        </p>
                      </div>
                      <div className="clientDiv">
                        <h2 className="clientStyle">SUZANNE MADISON</h2>
                        <h3 className="subClientStyle">Johnson & Johnson</h3>
                      </div>
                    </div>

                    <div>
                      <div className="comaSVG">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="52.353"
                          height="40"
                          viewBox="0 0 52.353 40"
                        >
                          <path
                            id="quote"
                            d="M7.806,41.965C4.865,38.729,3.1,35.2,3.1,29.318,3.1,19.024,10.453,9.906,20.747,5.2l2.647,3.824c-9.706,5.294-11.765,12.059-12.353,16.471a8.722,8.722,0,0,1,5.588-.882,10.272,10.272,0,0,1,9.412,10.294A11.6,11.6,0,0,1,23.1,42.259,9.755,9.755,0,0,1,15.747,45.2a11.568,11.568,0,0,1-7.941-3.235Zm29.412,0c-2.941-3.235-4.706-6.765-4.706-12.647,0-10.294,7.353-19.412,17.647-24.118l2.647,3.824C43.1,14.318,41.041,21.082,40.453,25.494a8.722,8.722,0,0,1,5.588-.882,10.272,10.272,0,0,1,9.412,10.294,11.6,11.6,0,0,1-2.941,7.353A9.334,9.334,0,0,1,45.159,45.2a11.568,11.568,0,0,1-7.941-3.235Z"
                            transform="translate(-3.1 -5.2)"
                            fill="#fefefe"
                          />
                        </svg>
                      </div>
                      <div className="feedbackDetail">
                        <p className="feedbackDetailStyle">
                          Minimalistmoon team did an excellent job with our
                          full-page advert. I was on a time crunch and needed
                          their support over the weekend, they turned it around
                          within 24 hours with multiple designs. their designs
                          were also really professional-looking . ...
                        </p>
                      </div>
                      <div className="clientDiv">
                        <h2 className="clientStyle">JEFF CENTRA</h2>
                        <h3 className="subClientStyle">
                          TED ideas worth spreading
                        </h3>
                      </div>
                    </div> */}
                  </Slider>
                </div>
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
                styles={styles.movingAnimationMainRight}
                chasingElement={
                  <>
                    <ChasingElement styles={styles.upperRight}>
                      <img src="smallest.png" />
                    </ChasingElement>
                    <ChasingElement styles={styles.middleRight}>
                      <img src="blue.png" className="middleRightImg" />
                    </ChasingElement>
                    <ChasingElement styles={styles.bottomRight}>
                      <img src="red.png" />
                    </ChasingElement>
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
