import React from "react";
import "./horizantal.css";
import CountUp from "react-countup";
import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
// import { CountUp } from 'https://cdnjs.cloudflare.com/ajax/libs/countup.js/2.0.7/countUp.js'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";



gsap.registerPlugin(ScrollTrigger);

const Horizantal = (props) => {
  const social = [
    {
      name: "GOOGLE",
      url: "https://www.google.com/",
    },
    {
      name: "PINTEREST",
      url: "https://www.pinterest.com/",
    },
    {
      name: "INSTAGRAM",
      url: "https://www.instagram.com/",
    },
  ];
  const [isSocial, setIsSocial] = useState(social);
  const navigate = useNavigate();
  const navigateToContacts = () => {
    navigate("/contactUs");
  };
  function refreshContact() {
    setTimeout(() => {
      window.location.reload(false);
    }, 10);
  }
  const ref20 = useRef(null);
  const isInViewport20 = useIsInViewport(ref20);
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
  const component = useRef();
  const sliderHorizantal = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sliderHorizantal.current,

          pin: true,
          scrub: 1,
          // snap: 1 / (panels.length - 1),
          end: () => "+=" + sliderHorizantal.current.offsetWidth,
          markers: false,
        },
      });
    });
    return () => ctx.revert();
  });

  // function countStart(){
  //   const $counters = document.querySelectorAll(".js-count-up"),
  //         options = {
  //           useEasing: true,
  //           useGrouping: true,
  //           separator: ",",
  //           decimal: "."
  //         };

  //   $counters.forEach( (item) => {
  //     const value = item.dataset.value;
  //     const counter = new CountUp(item, value, options);
  //     counter.start();
  //   });
  // }

  // new Waypoint({
  //   element: document.querySelector('.level'),
  //   handler: function() {
  //     countStart()
  //     //this.destroy() //for once
  //   },
  //   offset: '50%'
  // });

  return (
    <div ref={component}>
      <div className="mainHorizantalContainer" ref={sliderHorizantal}>
        <div className="first panel">
          <div className="firstContainer">
            <div className="firstSpacing">
              <h2 className="whyChooseStyle">WHY CHOOSE US</h2>
            </div>
          </div>
        </div>
        <div className="second panel">
          <div className="secondContainer">
            <div className="secondSpacing">
              <div className="secondInner">
                <div className="secondLeft">
                  <div>
                    <div className="chooseHead">
                      <p className="chooseHeadStyle">WHY CHOOSE US</p>
                    </div>
                    <h3 className="illustrationStyle">
                      Illustration , Stratagic , Creative Expertise ,Quality and
                      Attention to Detail, Creative , Responsivness , Survey
                    </h3>
                    <p className="expertlyStyle">
                      Choose MinimalistMoon for expertly crafted, data-driven
                      designs that deliver measurable results and help your
                      business stand out from the competition.
                    </p>
                  </div>
                  <ul className="socialUl">
                    {isSocial.map((socialElem, i) => {
                      return (
                        <li className="social1" key={i}>
                          <a href={socialElem.url} className="social1">
                            {socialElem.name}
                          </a>
                        </li>
                      );
                    })}

                    {/* <li className="social2">
                      <a href="https://www.pinterest.com/">PINTEREST</a>
                    </li>
                    <li className="social3">
                      <a href="https://www.instagram.com/">INSTAGRAM</a>
                    </li> */}
                  </ul>
                </div>
                <div className="secondRight">
                  <div className="innersecondRight">
                    <div className="strategy">
                      <div className="circleS">
                        <span className="strategySpan">70%</span>
                      </div>
                      <div className="strategydisc">
                        <h4 className="strategyTile">STRATEGY</h4>
                        <p className="strategyDetail">
                          Our strategy-first approach ensures your design
                          delivers on business goals. Let's make your brand work
                          harder.
                        </p>
                      </div>
                    </div>
                    <div className="response">
                      <div className="circleS">
                        <span className="strategySpan">95%</span>
                      </div>
                      <div className="strategydisc">
                        <h4 className="strategyTile">RESPONSIVENESS</h4>
                        <p className="strategyDetail">
                          We're always here for you. Enjoy lightning-fast
                          turnarounds and prompt, personal communication every
                          time.
                        </p>
                      </div>
                    </div>
                    <div className="survey">
                      <div className="circleS">
                        <span className="strategySpan">80%</span>
                      </div>
                      <div className="strategydisc">
                        <h4 className="strategyTile">SURVEY</h4>
                        <p className="strategyDetail">
                          Get exactly what you want, every time. Our detailed
                          survey ensures we nail your vision and exceed your
                          expectations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="third panel" ref={ref20}>
          <div className="thirdContainer">
            <div className="thirdSpacing">
              <div className="thirdInner">
                <div className="thirdLeft">
                  <div className="thirdLeftInner">
                    <div className="project">
                      <div className="projectFlex">
                        {isInViewport20 ? (
                          <p className="projectHead">
                            10<span>K</span>
                          </p>
                        ) : (
                          <CountUp
                            className="projectHead"
                            start={0}
                            end={10}
                            duration={5}
                          >
                            K
                          </CountUp>
                        )}
                        <p className="projectHead">K</p>
                      </div>

                      <p className="projectTitle">Project Completed</p>
                    </div>

                    <div className="happy">
                      <div className="projectFlex">
                        {isInViewport20 ? (
                          <p className="projectHead">
                            10<span>K</span>
                          </p>
                        ) : (
                          <CountUp
                            className="projectHead"
                            start={0}
                            end={6}
                            duration={5}
                          >
                            K
                          </CountUp>
                        )}
                        <p className="projectHead">K</p>
                      </div>
                      <p className="projectTitle">
                        Happy <br></br>Customers
                      </p>
                    </div>
                    <div className="years">
                      <div className="projectFlex">
                        {isInViewport20 ? (
                          <p className="projectHead">
                            10<span>K</span>
                          </p>
                        ) : (
                          <CountUp
                            className="projectHead"
                            start={0}
                            end={10}
                            duration={5}
                          >
                            K
                          </CountUp>
                        )}
                        <p className="projectHead">+</p>
                      </div>
                      <p className="projectTitle">
                        Years <br></br>Experiences
                      </p>
                    </div>
                    <div className="awards">
                      <div className="projectFlex">
                        {isInViewport20 ? (
                          <p className="projectHead">
                            10<span>K</span>
                          </p>
                        ) : (
                          <CountUp
                            className="projectHead"
                            start={0}
                            end={19}
                            duration={5}
                          >
                            K
                          </CountUp>
                        )}
                        <p className="projectHead"></p>
                      </div>
                      <p className="projectTitle">
                        Award <br></br>Achievements
                      </p>
                    </div>
                  </div>
                </div>
                <div className="thirdRight">
                  <div className="thirdImage">
                    <img src="thirdHorizantal.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fourth panel">
          <div className="fourthContainer">
            <div className="fourthSpacing">
              <div className="fourthInner">
                <p className="mind">You Have Project In Mind?</p>
                <h2 className="together">
                  Let's make something great together!
                </h2>

                <div className="moonMain">
                  <div
                    className="whiteMoonDivPortfolio"
                    onClick={function (event) {
                      navigateToContacts();
                      refreshContact();
                    }}
                  >
                    <div className="whiteMainknowStyle">
                      <div className="whiteknowStyle">Contact</div>
                      <div className="whiteknowStyle">With Us</div>
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
    </div>
  );
};

export default Horizantal;
