import React from "react";
import "./design.css";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Design = () => {
  const ref = useRef(null);
  const [tween, setTween] = useState(null);

  useEffect(() => {
    if (tween) return;

    gsap.registerPlugin(ScrollTrigger);
    let scrollTween = gsap.to(ref.current, {
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        refreshPriority: 1,
        start: "top 0%",
        end: "+=600%",
        markers: false,
        toggleActions: "play reset play reset",
        // onUpdate: (self) => {
        //   let p = (self.progress * 100).toFixed(1);
        //   setProgress(p);
        // }
      },
    });
    setTween(scrollTween);
  }, []);

  ScrollTrigger.defaults({
    markers: false,
  });

  var pages = gsap.utils.toArray(".page");
  var indicators = gsap.utils.toArray(".anchLink");
  // var ulLinks = gsap.utils.toArray('.ulLink');

  // ulLink anchLink
  var height = 100 * pages.length;
  // gsap.set('.ulLinks', {display: "flex",flexDirection:"col"});

  var tl = gsap.timeline({
    duration: pages.length,
    scrollTrigger: {
      trigger: ".mainContainer",
      start: "top center",
      end: "+=" + height + "%",
      scrub: true,
      id: "pages",
    },
  });


  pages.forEach(function (elem, i) {
    gsap.set(elem, { position: "absolute", top: 0 });

    tl.to(indicators[i], { color: "black", duration: 0.25 }, i);
    tl.from(elem.querySelector("img"), { autoAlpha: 0 }, i);
    tl.from(
      elem.querySelector(".designRight"),
      { autoAlpha: 0, translateY: 100 },
      i
    );

    if (i != pages.length - 1) {
      tl.to(indicators[i], { color: "#0000009e", duration: 0.25 }, i + 0.75);
      tl.to(
        elem.querySelector(".designRight"),
        { autoAlpha: 0, translateY: -100 },
        i + 0.75
      );
      tl.to(elem.querySelector("img"), { autoAlpha: 0 }, i + 0.95);
    }
  });
  //   pages.forEach(page =>{
  //     let text =page.querySelectorAll('anim')
  //     gsap.from(text,{
  //       y:-100,
  //       ease:"true",
  // stagger:0.1,
  // duration:2,
  // scrollTrigger:{
  //   trigger:page,
  //   containerAnimation:scrollTween,
  //   start:"left center",
  // }
  //   })
  // })
  // gsap.to(".rightHeadStyle", {
  //   duration: 1,
  //   ease: "power1.in",
  //   x: "-50px",
  //   repeat: -1,
  //   repeatDelay: 1,
  //   repeat
  // });

  // var pinner = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".maincontainer .designMain",
  //     start: "top top",
  //     end: "+=" + height + "%",
  //     scrub: true,
  //     // pin: ".maincontainer .designMain",
  //     // pinSpacing: true,
  //     // id: "pinning",
  //     markers: true,
  //   },
  // });



  // useEffect(() => {
  //     const scrollingDiv = document.getElementById("scrollContainer");
  //     const img1 = document.getElementById("img1");
  //     // const[iscolor,setiscolor]=useState(false);

  //     scrollingDiv.onscroll=function(){
  //         if(scrollingDiv.scrollTop<250){
  //             img1.src="speedy.png"
  //             console.log(scrollingDiv.scrollTop)
  //         }
  //         if(scrollingDiv.scrollTop>539.4){
  //             img1.src="expansive.png"
  //             console.log(scrollingDiv.scrollTop)
  //         }
  //         if(scrollingDiv.scrollTop>1078.8){
  //             img1.src="collaborative.png"
  //             console.log(scrollingDiv.scrollTop)
  //         }
  //         if(scrollingDiv.scrollTop>1618.2){
  //             img1.src="anytime.png"
  //             console.log(scrollingDiv.scrollTop)
  //         }
  //         if(scrollingDiv.scrollTop>2157.6){
  //             img1.src="adobe.png"
  //             console.log(scrollingDiv.scrollTop)
  //         }
  //         if(scrollingDiv.scrollTop>2697){
  //             img1.src="elite.png"
  //             console.log(scrollingDiv.scrollTop)
  //         }
  //         if(scrollingDiv.scrollTop>3236.4){
  //             img1.src="elite.png"
  //             console.log(scrollingDiv.scrollTop)
  //         }
  //     }
  // })

  // const changeColor=()=>{
  //     if(scrollingDiv.scrollTop<250){
  //         setiscolor(true)
  //     }
  //     if(scrollingDiv.scrollTop>539.4){
  //         setiscolor(true)
  //     }
  //     if(scrollingDiv.scrollTop>1078.8){
  //         setiscolor(true)
  //     }
  //     if(scrollingDiv.scrollTop>1618.2){
  //         setiscolor(true)
  //     }
  //     if(scrollingDiv.scrollTop>2157.6){
  //         setiscolor(true)
  //     }
  //     if(scrollingDiv.scrollTop>2697){
  //         setiscolor(true)
  //     }
  //     if(scrollingDiv.scrollTop>3236.4){
  //         img1.src="elite.png"
  //         console.log(scrollingDiv.scrollTop)
  //     }
  // }
  // const[contentScroll,setcontentScroll]=useState(false)

  // const changeContent=()=>{
  //     if(window.scrollY>1500){
  //         setcontentScroll(true)
  //         console.log(window.scrollY)
  //     }
  //     else{
  //         setcontentScroll(false)
  //         console.log(window.scrollY)
  //     }
  // }
  // window.addEventListener('scroll',changeContent)

  return (
    <>
      <div
        className="mainContainer"
        ref={ref}
        id="viewport"
        style={{ backgroundColor: "white" }}
      >
        <div className="designMain" id="content">
          <div className="designLeft">
            <div className="designLeftContainer">
              <div className="designLeftSpacing">
                <div className="designLinks">
                  <ul className="ulLink">
                    <li className="liLink">
                      <a className="anchLink">Speedy Design Sprint</a>
                    </li>
                    <li className="liLink">
                      <a className="anchLink">Expansive Design Options</a>
                    </li>
                    <li className="liLink">
                      <a className="anchLink">Collabarative Artistry</a>
                    </li>
                    <li className="liLink">
                      <a className="anchLink">Anytime Design Aid</a>
                    </li>
                    <li className="liLink">
                      <a className="anchLink">Adobe Cloud Design Experts</a>
                    </li>
                    <li className="liLink">
                      <a className="anchLink">Design Elite Force</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="designrightMain">
            <div className="page">
              <div className="designMiddle">
                <div className="middleMain">
                  <img className="middleImg" src="speedy.png" id="img1" />
                </div>
              </div>

              <div className="designRight" id="scrollContainer">
                <div className="rightContainer">
                  <div className="rightSpacing">
                    <div className="rightDesignMain" id="service_1">
                      <div className="rightHead">
                        <h2 className="rightHeadStyle anim">
                          Speedy Design Sprint
                        </h2>
                      </div>
                      <div className="rightDisc">
                        <p className="rightDiscStyle">
                          Design at the speed of light-simple projects in 1-2
                          days, complex projects in 3-4 days, all with
                          uncompromising quality.
                        </p>
                      </div>
                      <div className="subTypeMain">
                        <div className="typeDiv">
                          <p className="typestyle">+ UI/UX Design</p>
                        </div>
                        <div className="typeDiv">
                          <p className="typestyle">+ Broucher Design</p>
                        </div>
                        <div className="typeDiv">
                          <p className="typestyle">+ Flyer Design</p>
                        </div>
                        <div className="typeDiv">
                          <p className="typestyle">+ Branding & Logo Design</p>
                        </div>
                        <div className="typeDiv">
                          <p className="typestyle">+ Website Design</p>
                        </div>
                      </div>
                      <div className="whiteMoonDiv">
                        <div className="whiteMainknowStyle">
                          <div className="whiteknowStyle">Get Free</div>
                          <div className="whiteknowStyle">Quotes</div>
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

            <div className="page">
              <div className="designMiddle">
                <div className="middleMain">
                  <img className="middleImg" src="expansive.png" id="img1" />
                </div>
              </div>

              <div className="designRight" id="scrollContainer">
                <div className="rightContainer">
                  <div className="rightSpacing">
                    <div className="rightDesignMain" id="service_2">
                      <div className="rightHead">
                        <h2 className="rightHeadStyle anim">
                          Expansive Design Options
                        </h2>
                      </div>
                      <div className="rightDisc">
                        <p className="rightDiscStyle">
                          Elevate your projects to new heights with our 50+
                          specialized services, we have the perfect designer for
                          any task.
                        </p>
                      </div>
                      <div className="subTypeMain">
                        <div className="typeDiv">
                          <p className="typestyle">+ UI/UX Design</p>
                        </div>
                        <div className="typeDiv">
                          <p className="typestyle">+ Broucher Design</p>
                        </div>
                        <div className="typeDiv">
                          <p className="typestyle">+ Flyer Design</p>
                        </div>
                        <div className="typeDiv">
                          <p className="typestyle">+ Branding & Logo Design</p>
                        </div>
                        <div className="typeDiv">
                          <p className="typestyle">+ Website Design</p>
                        </div>
                      </div>
                      <div className="whiteMoonDiv">
                        <div className="whiteMainknowStyle">
                          <div className="whiteknowStyle">Get Free</div>
                          <div className="whiteknowStyle">Quotes</div>
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

            <div className="page">
              <div className="designMiddle">
                <div className="middleMain">
                  <img
                    className="middleImg"
                    src="collaborative.png"
                    id="img1"
                  />
                </div>
              </div>

              <div className="designRight" id="scrollContainer">
                <div className="rightContainer">
                  <div className="rightSpacing">
                    <div className="rightDesignMain" id="service_3">
                      <div className="rightHead">
                        <h2 className="rightHeadStyle anim">
                          Collaborative Artistry
                        </h2>
                      </div>
                      <div className="rightDisc">
                        <p className="rightDiscStyle">
                          Design excellence awaits! Partner with our team of
                          skilled and experienced designers to elevate your
                          project to new heights of creativity and innovation.
                        </p>
                      </div>
                      <div className="subTypeMain">
                        <div className="typeDiv">
                          <p className="typestyle">+ UI/UX Design</p>
                        </div>
                        <div className="typeDiv">
                          <p className="typestyle">+ Broucher Design</p>
                        </div>
                        <div className="typeDiv">
                          <p className="typestyle">+ Flyer Design</p>
                        </div>
                        <div className="typeDiv">
                          <p className="typestyle">+ Branding & Logo Design</p>
                        </div>
                        <div className="typeDiv">
                          <p className="typestyle">+ Website Design</p>
                        </div>
                      </div>
                      <div className="whiteMoonDiv">
                        <div className="whiteMainknowStyle">
                          <div className="whiteknowStyle">Get Free</div>
                          <div className="whiteknowStyle">Quotes</div>
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

            <div className="page">
              <div className="designMiddle">
                <div className="middleMain">
                  <img className="middleImg" src="anytime.png" id="img1" />
                </div>
              </div>
              <div className="designRight" id="scrollContainer">
                <div className="rightContainer">
                  <div className="rightSpacing">
                    <div className="rightDesignMain" id="service_4">
                      <div className="rightHead">
                        <h2 className="rightHeadStyle anim">
                          Anytime Design Aid
                        </h2>
                      </div>
                      <div className="rightDisc">
                        <p className="rightDiscStyle">
                          Stuck? Don’t worry, we’ve got you covered. Our
                          friendly support team is eager and ready to help you
                          navigate any design obstacles
                        </p>
                      </div>
                      <div className="subTypeMain">
                        <div className="typeDiv">
                          <p className="typestyle">+ UI/UX Design</p>
                        </div>
                        <div className="typeDiv">
                          <p className="typestyle">+ Broucher Design</p>
                        </div>
                        <div className="typeDiv">
                          <p className="typestyle">+ Flyer Design</p>
                        </div>
                        <div className="typeDiv">
                          <p className="typestyle">+ Branding & Logo Design</p>
                        </div>
                        <div className="typeDiv">
                          <p className="typestyle">+ Website Design</p>
                        </div>
                      </div>
                      <div className="whiteMoonDiv">
                        <div className="whiteMainknowStyle">
                          <div className="whiteknowStyle">Get Free</div>
                          <div className="whiteknowStyle">Quotes</div>
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

            <div className="page">
              <div className="designMiddle">
                <div className="middleMain">
                  <img className="middleImg" src="adobe.png" id="img1" />
                </div>
              </div>

              <div className="designRight" id="scrollContainer">
                <div className="rightContainer">
                  <div className="rightSpacing">
                    <div className="rightDesignMain" id="service_5">
                      <div className="rightHead">
                        <h2 className="rightHeadStyle anim">
                          Adobe Cloud Design Experts
                        </h2>
                      </div>
                      <div className="rightDisc">
                        <p className="rightDiscStyle">
                          Our expert team, who harness the power of Adobe Cloud
                          Suite to deliver visually stunning designs that exceed
                          expectations.
                        </p>
                      </div>
                      <div className="subTypeMain">
                        <div className="typeDiv">
                          <p className="typestyle">+ UI/UX Design</p>
                        </div>
                        <div className="typeDiv">
                          <p className="typestyle">+ Broucher Design</p>
                        </div>
                        <div className="typeDiv">
                          <p className="typestyle">+ Flyer Design</p>
                        </div>
                        <div className="typeDiv">
                          <p className="typestyle">+ Branding & Logo Design</p>
                        </div>
                        <div className="typeDiv">
                          <p className="typestyle">+ Website Design</p>
                        </div>
                      </div>
                      <div className="whiteMoonDiv">
                        <div className="whiteMainknowStyle">
                          <div className="whiteknowStyle">Get Free</div>
                          <div className="whiteknowStyle">Quotes</div>
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

            <div className="page">
              <div className="designMiddle">
                <div className="middleMain">
                  <img className="middleImg" src="elite.png" id="img1" />
                </div>
              </div>

              <div className="designRight" id="scrollContainer">
                <div className="rightContainer">
                  <div className="rightSpacing">
                    <div className="rightDesignMain" id="service_6">
                      <div className="rightHead">
                        <h2 className="rightHeadStyle anim">
                          Design Elite Force
                        </h2>
                      </div>
                      <div className="rightDisc">
                        <p className="rightDiscStyle">
                          Design excellence at its finest, our team is curated
                          from the elite 2% of designers, guaranteeing
                          world-class designs every time.
                        </p>
                      </div>
                      <div className="subTypeMain">
                        <div className="typeDiv">
                          <p className="typestyle">+ UI/UX Design</p>
                        </div>
                        <div className="typeDiv">
                          <p className="typestyle">+ Broucher Design</p>
                        </div>
                        <div className="typeDiv">
                          <p className="typestyle">+ Flyer Design</p>
                        </div>
                        <div className="typeDiv">
                          <p className="typestyle">+ Branding & Logo Design</p>
                        </div>
                        <div className="typeDiv">
                          <p className="typestyle">+ Website Design</p>
                        </div>
                      </div>
                      <div className="whiteMoonDiv">
                        <div className="whiteMainknowStyle">
                          <div className="whiteknowStyle">Get Free</div>
                          <div className="whiteknowStyle">Quotes</div>
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
      </div>
    </>
  );
};

export default Design;
