
import React, { useState, useRef } from "react";
import "./portfolio.css";
import { Routes, Route, useNavigate } from "react-router-dom";


const Portfolio = () => {

  const navigate = useNavigate();
  const navigateToportfolio = () => {
    navigate("/subPortfolio");
  };
  function refreshPortfolio() {
    setTimeout(()=>{
        window.location.reload(false);  
    }, 100);
  }
  const buttonList = [
    {
      buttonNum: 1,
      buttonData: "All",
    },
    {
      buttonNum: 2,
      buttonData: "Business Cards",
    },
    {
      buttonNum: 3,
      buttonData: "Book Cover",
    },
    {
      buttonNum: 4,
      buttonData: "E-Books Design",
    },
    {
      buttonNum: 5,
      buttonData: "Email Template",
    },
    {
      buttonNum: 6,
      buttonData: "Flyers & Posters Design",
    },
    {
      buttonNum: 7,
      buttonData: "Brochure Designs",
    },
    {
      buttonNum: 8,
      buttonData: "Logo Design",
    },
    {
      buttonNum: 9,
      buttonData: "Mobile App UI/UX",
    },
    {
      buttonNum: 10,
      buttonData: "Packaging & Label Design",
    },
    {
      buttonNum: 11,
      buttonData: "Website / UI/UX",
    },
    {
      buttonNum: 12,
      buttonData: "Social Media Post",
    },
    {
      buttonNum: 13,
      buttonData: "Tri-Fold/Bi-Fold Brochure",
    },
    {
      buttonNum: 14,
      buttonData: "Magazine / Cook Book",
    },
    {
      buttonNum: 15,
      buttonData: "Look Book",
    },
    {
      buttonNum: 16,
      buttonData: "Rollup Banner",
    },
    {
      buttonNum: 17,
      buttonData: "Booth / Sign Board",
    },
    {
      buttonNum: 18,
      buttonData: "Door Hanger / Email Signature",
    },
  ];

  const fourButtonList = [
    {
      buttonId: 1,
      buttonName: "All",
    },
    {
      buttonId: 2,
      buttonName: "Food And Beverage",
    },
    {
      buttonId: 3,
      buttonName: "Real Estate",
    },
    {
      buttonId: 4,
      buttonName: "Others",
    },
  ];




const allImageDetail =[
  {
    category: "All",
    imgSrc: "burger.png",
    imageId: 1,
  },
  {
    category: "All",
    imgSrc: "all2.png",
    imageId: 2,
  },
  {
    category: "All",
    imgSrc: "all3.png",
    imageId: 3,
  },
  {
    category: "All",
    imgSrc: "all4.png",
    imageId: 4,
  },
  {
    category: "All",
    imgSrc: "all5.png",
    imageId: 5,
  },
  {
    category: "All",
    imgSrc: "all6.png",
    imageId: 6,
  },
  {
    category: "All",
    imgSrc: "all7.png",
    imageId: 7,
  },
  {
    category: "All",
    imgSrc: "all8.png",
    imageId: 8,
  },
  {
    category: "All",
    imgSrc: "all9.png",
    imageId: 9,
  }
]




  const imageDetail = [
    
    {
      category: "All",
      imgSrc: "burger.png",
      imageId: 1,
    },
    {
      category: "All",
      imgSrc: "all2.png",
      imageId: 2,
    },
    {
      category: "All",
      imgSrc: "all3.png",
      imageId: 3,
    },
    {
      category: "All",
      imgSrc: "all4.png",
      imageId: 4,
    },
    {
      category: "All",
      imgSrc: "all5.png",
      imageId: 5,
    },
    {
      category: "All",
      imgSrc: "all6.png",
      imageId: 6,
    },
    {
      category: "All",
      imgSrc: "all7.png",
      imageId: 7,
    },
    {
      category: "All",
      imgSrc: "all8.png",
      imageId: 8,
    },
    {
      category: "All",
      imgSrc: "all9.png",
      imageId: 9,
    },
    
    {
      category: "food and beverage",
      imgSrc: "fb1.png",
      imageId: 10,
    },
    {
      category: "food and beverage",
      imgSrc: "fb2.png",
      imageId: 11,
    },
    {
      category: "food and beverage",
      imgSrc: "fb3.png",
      imageId: 12,
    },
    {
      category: "food and beverage",
      imgSrc: "fb4.png",
      imageId: 13,
    },
    {
      category: "food and beverage",
      imgSrc: "fb5.png",
      imageId: 14,
    },
    {
      category: "food and beverage",
      imgSrc: "fb6.png",
      imageId: 15,
    },
    {
      category: "food and beverage",
      imgSrc: "fb7.png",
      imageId: 16,
    },
    {
      category: "food and beverage",
      imgSrc: "fb8.png",
      imageId: 17,
    },
    {
      category: "food and beverage",
      imgSrc: "fb9.png",
      imageId: 18,
    },
    {
      category: "real estate",
      imgSrc: "re1.png",
      imageId: 19,
    },
    {
      category: "real estate",
      imgSrc: "re2.png",
      imageId: 20,
    },
    {
      category: "real estate",
      imgSrc: "re3.png",
      imageId: 21,
    },
    {
      category: "real estate",
      imgSrc: "re4.png",
      imageId: 22,
    },
    {
      category: "real estate",
      imgSrc: "re5.png",
      imageId: 23,
    },
    {
      category: "real estate",
      imgSrc: "re6.png",
      imageId: 24,
    },
    {
      category: "real estate",
      imgSrc: "re7.png",
      imageId: 25,
    },
    {
      category: "real estate",
      imgSrc: "re8.png",
      imageId: 26,
    },
    {
      category: "real estate",
      imgSrc: "re9.png",
      imageId: 27,
    },
    {
      category: "others",
      imgSrc: "o1.png",
      imageId: 28,
    },
    {
      category: "others",
      imgSrc: "o2.png",
      imageId: 29,
    },

    {
      category: "others",
      imgSrc: "o3.png",
      imageId: 30,
    },

    {
      category: "others",
      imgSrc: "o4.png",
      imageId: 31,
    },

    {
      category: "others",
      imgSrc: "o5.png",
      imageId: 32,
    },

    {
      category: "others",
      imgSrc: "o6.png",
      imageId: 33,
    },
    {
      category: "business",
      imgSrc: "business1.png",
      imageId: 34,
    },
    {
      category: "business",
      imgSrc: "b2.png",
      imageId: 35,
    },
    {
      category: "business",
      imgSrc: "b3.png",
      imageId: 36,
    },
    {
      category: "business",
      imgSrc: "b4.png",
      imageId: 37,
    },
    {
      category: "business",
      imgSrc: "b5.png",
      imageId: 38,
    },
    {
      category: "business",
      imgSrc: "b6.png",
      imageId: 39,
    },
    {
      category: "business",
      imgSrc: "b7.png",
      imageId: 40,
    },
    {
      category: "business",
      imgSrc: "b8.png",
      imageId: 41,
    },
    {
      category: "business",
      imgSrc: "b9.png",
      imageId: 42,
    },
    {
      category: "book",
      imgSrc: "book1.png",
      imageId: 43,
    },
    {
      category: "book",
      imgSrc: "book2.png",
      imageId: 44,
    },
    {
      category: "book",
      imgSrc: "book3.png",
      imageId: 45,
    },
    {
      category: "book",
      imgSrc: "book4.png",
      imageId: 46,
    },
    {
      category: "book",
      imgSrc: "book5.png",
      imageId: 47,
    },
    {
      category: "book",
      imgSrc: "book6.png",
      imageId: 48,
    },
    {
      category: "book",
      imgSrc: "book7.png",
      imageId: 49,
    },
    {
      category: "book",
      imgSrc: "book8.png",
      imageId: 50,
    },
    {
      category: "book",
      imgSrc: "book9.png",
      imageId: 51,
    },
    {
      category: "ebook",
      imgSrc: "ebook1.png",
      imageId: 52,
    },
    {
      category: "ebook",
      imgSrc: "ebook2.png",
      imageId: 53,
    },
    {
      category: "ebook",
      imgSrc: "ebook3.png",
      imageId: 54,
    },
    {
      category: "ebook",
      imgSrc: "ebook4.png",
      imageId: 55,
    },
    {
      category: "ebook",
      imgSrc: "ebook5.png",
      imageId: 56,
    },
    {
      category: "ebook",
      imgSrc: "ebook6.png",
      imageId: 57,
    },
    {
      category: "ebook",
      imgSrc: "ebook7.png",
      imageId: 58,
    },
    {
      category: "ebook",
      imgSrc: "ebook8.png",
      imageId: 59,
    },
    {
      category: "ebook",
      imgSrc: "ebook9.png",
      imageId: 60,
    },
    {
      category: "email",
      imgSrc: "email1.png",
      imageId: 61,
    },
    {
      category: "email",
      imgSrc: "email2.png",
      imageId: 62,
    },
    {
      category: "email",
      imgSrc: "email3.png",
      imageId: 63,
    },
    {
      category: "email",
      imgSrc: "email4.png",
      imageId: 64,
    },
    {
      category: "email",
      imgSrc: "email5.png",
      imageId: 65,
    },
    {
      category: "email",
      imgSrc: "email6.png",
      imageId: 66,
    },
    {
      category: "email",
      imgSrc: "email7.png",
      imageId: 67,
    },
    {
      category: "email",
      imgSrc: "email8.png",
      imageId: 68,
    },
    {
      category: "email",
      imgSrc: "email9.png",
      imageId: 69,
    },
  ];



  const [imageList, setImageList] = useState(allImageDetail);
  const [clicked, setClicked] = useState(false);

  const filterItem = (catgItem) => {
    const updatedItems = imageDetail.filter((curElem) => {
      return curElem.category == catgItem;
    });
    
    setImageList(updatedItems);
  };
  // const delay = index*500 + "ms";
  return (
    <div>
      <div className="portfolioContainer">
        <div className="portfolioSpacing">
          <div className="portfolioMain">
            <div className="portfolioHead">
              <h1 className="portfolioHeadStyle">Our Portfolio</h1>
            </div>

            <div className="portfolioBottom">
              <div className="portfolioLeft">
                <div className="portfolioLeftInner">
                  <div className="activeLink"></div>
                  <div className="allButtons">
                    <button
                      className="singleButton"
                      onClick={() => {
                        
                        filterItem("All");
                        setClicked(true);
                      }}
                    >
                      All
                    </button>
                    <button
                      className="singleButton"
                      onClick={() => {
                        filterItem("business");
                        setClicked(true);
                      }}
                    >
                      Business Cards
                    </button>
                    <button
                      className="singleButton"
                      onClick={() => {
                        filterItem("book");
                        setClicked(true);
                      }}
                    >
                      Book Cover
                    </button>
                    <button
                      className="singleButton"
                      onClick={() => {
                        filterItem("ebook");
                        setClicked(true);
                      }}
                    >
                      E-Book Designs
                    </button>
                    <button
                      className="singleButton"
                      onClick={() => {
                        filterItem("email");
                        setClicked(true);
                      }}
                    >
                      Email Template
                    </button>
                    <button className="singleButton">
                      Flyers And Posters Design
                    </button>
                    <button className="singleButton">Brochure Designs</button>
                    <button className="singleButton">Logo Design</button>
                    <button className="singleButton">Mobile App UI/UX</button>
                    <button className="singleButton">
                      Packaging & Label Design
                    </button>
                    <button className="singleButton">Website/UI/UX</button>
                    <button className="singleButton">Social Media Post</button>
                    <button className="singleButton">
                      Tri-Fold/Bi-Fold Brochure
                    </button>
                    <button className="singleButton">
                      Magazine / Cook Book
                    </button>
                    <button className="singleButton">Look Book</button>
                    <button className="singleButton">Rollup Banner</button>
                    <button className="singleButton">Booth/Sign Board</button>
                    <button className="singleButton">
                      Door Hanger / Email Signature
                    </button>
                    {/* );
                    })} */}
                  </div>
                </div>
              </div>
              <div className="portfolioRight">
                <div className="innerPortfolioRight">
                  <div className="fourTypesMain">
                   
                    <button
                      className="fourTypeButton"
                      onClick={() => {
                        filterItem("All");
                        setClicked(true);
                      }}
                    >
                      All
                    </button>
                    <button
                      className="fourTypeButton"
                      onClick={() => {
                        setImageList(imageDetail);
                    
                        filterItem("food and beverage");
                        setClicked(true);
                      }}
                    >
                      Food And Beverages
                    </button>
                    <button
                      className="fourTypeButton"
                      onClick={() => {
                        filterItem("real estate");
                        setClicked(true);
                      }}
                    >
                      Real Estate
                    </button>
                    <button
                      className="fourTypeButton"
                      onClick={() => {
                        filterItem("others");
                        setClicked(true);
                      }}
                    >
                      Others
                    </button>
                    {/* );
                    })} */}
                  </div>

                  <div className="allImages">
                    {imageList.map((el,index) => {
                      const { imageId, imgSrc, category } = el;
                    
                      return (
                        
                        <img
                          className={
                            clicked === true
                              ? "typeImage typeImageStyle"
                              : "typeImageStyle"
                          }
                          // style={{animationDelay:index*5000 + "ms" }}
                          onAnimationEnd={() => setClicked(false)}
                          src={imgSrc}
                          key={index}
                        />
                      );
                    })}
                  </div>
                </div>
              </div> 
            </div>

            <div className="moonMain" onClick={function(event){navigateToportfolio(); refreshPortfolio();}}>
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

export default Portfolio;
