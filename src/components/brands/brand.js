import React from "react";
import { useRef, useEffect, useState, useMemo } from "react";
import "./brand.css";

<link
  href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800;900&display=swap"
  rel="stylesheet"
></link>;

const Brand = () => {
  const ref3 = useRef(null);
  const isInViewport3 = useIsInViewport(ref3);
  const ref8 = useRef(null);
  const isInViewport8 = useIsInViewport(ref8);
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
    <div className="upperDiv">
      <div className="brandContainer">
        <div className="brandSpacing">
          <div className="happyMain">
            <p className={isInViewport3 ? "happyStyle happyStyleAnim" :
             "happyStyle"
              }
              ref={ref3}>
              We worked with global largest brands
            </p>
          </div>
          <div
            className={
              isInViewport8 ? "innerBrand innerBrandAnim" : "innerBrand"
            }
            ref={ref8}
          >
            <div className="row1">
              <img width="100%" src="ted.png" alt="" />
            </div>
            <div className="row1">
              <img width="100%" src="wattsense.png" alt="" />
            </div>
            <div className="row2">
              <img width="100%" src="johmon.png" alt="" />
            </div>
            <div className="row2">
              <img width="100%" src="levrx.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
