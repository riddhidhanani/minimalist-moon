import React from "react";
import "./journal.css";
import anime from "animejs";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect, useState, useMemo } from "react";
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>;

const Journal = (props) => {
  const navigate = useNavigate();
  const navigateToBlog = () => {
    navigate("/blog");
  };
  function refreshBlog() {
    setTimeout(() => {
      window.location.reload(false);
    }, 10);
  }

  const ref13 = useRef(null);
  const isInViewport13 = useIsInViewport(ref13);
  const ref14 = useRef(null);
  const isInViewport14 = useIsInViewport(ref14);
  const ref15 = useRef(null);
  const isInViewport15 = useIsInViewport(ref15);
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
    <div className="journalMainContainer">
      <div className="journalContainer">
        <div className="journalSpacing">
          <div className="innerJournal">
            <div className="recent">
              <h2
                className={
                  isInViewport13 ? "recentBlogAnim recentBlog" : "recentBlog"
                }
                ref={ref13}
              >
                RECENT BLOG
              </h2>
              <h3
                className={
                  isInViewport14 ? "readUpdatedAnim readUpdated" : "readUpdated"
                }
                ref={ref14}
              >
                READ UPDATED JOURNAL
              </h3>
              <div className="perspective">
                <p
                  className={
                    isInViewport15
                      ? "perspectiveStyle perspectiveStyleAnim"
                      : "perspectiveStyle"
                  }
                  ref={ref15}
                >
                  Read our blog and try to see everythingfrom every perspective.
                  Our passion lies in making everything accessible and aesthetic
                  for everyone.
                </p>
              </div>
            </div>

            <div className="perspectiveBottom">
              <div className="importanceMain">
                <div className="imageImportance">
                  <img className="importanceImg" src="blog1.png" />
                </div>
                <div className="detailImportance">
                  <h4 className="blogHead">
                    <a className="ourBlog">OUR BLOG</a>. December20, 2022
                  </h4>

                  <h5 className="goodImportance">
                    <a className="anchgoodImportance">
                      The Importance of Good Design for Your Business.
                    </a>
                  </h5>

                  <a className="readMore">Read More</a>
                </div>
              </div>
              <div className="rightdesigner">
                <div className="designerImage">
                  <img className="importanceImg" src="blog2.png" />
                </div>
                <div className="designerDetail">
                  <h4 className="blogHead">
                    <a className="ourBlog">OUR BLOG</a>. December20, 2022
                  </h4>

                  <h5 className="goodImportance">
                    <a className="anchgoodImportance">
                      How to Choose the Right Designer for Your Project.
                    </a>
                  </h5>

                  <a className="readMore">Read More</a>
                </div>
              </div>
            </div>

            <div
              className="moonMain"
              onClick={function (event) {
                {
                  navigateToBlog();
                  refreshBlog();
                }
              }}
            >
              <div className="whiteMoonDivPortfolio">
                <div className="whiteMainknowStyle">
                  <div className="whiteknowStyle">Explore</div>
                  <div className="whiteknowStyle">More</div>
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
  );
};

export default Journal;
