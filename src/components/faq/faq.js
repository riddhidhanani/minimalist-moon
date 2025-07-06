import React, { useState } from "react";
import "./faq.css";

const Faq = () => {
  const faqQuestion = [
    {
      id: 1,
      question: "What types of graphic design services do you offer?",
      answer:
        "As a graphic design agency with over 10+ years of experience, we offer a wide range of design services, including logo design, brand identity design, ui/ux design, printing and packaging design, social media graphics, and much more. Our satisfied clients are a testament to the quality of our work and our commitment to providing exceptional design solutions.",
    },
    {
      id: 2,
      question:
        " How long does it typically take to complete a graphic design project?",
      answer:
        "The timeline for a project can vary depending on the complexity and scope of the project. We will work with you to establish a timeline that works for both parties.",
    },
    {
      id: 3,
      question: " Can you provide a portfolio of your previous work?",
      answer:
        "Yes, we have a portfolio of our previous work available on our website. We are also happy to provide additional examples upon request.",
    },
    {
      id: 4,
      question:
        " How do you communicate with clients during the design process? ",
      answer:
        " We work closely with clients throughout the design process to ensure that the final product meets their expectations. We also offer revisions and changes to designs to ensure client satisfaction.",
    },
    {
      id: 5,
      question: " What is your pricing structure for graphic design services?  ",
      answer:
        "Our pricing structure varies depending on the project scope and complexity. We will provide a detailed proposal outlining the costs and scope of the project before beginning any work.",
    },
    {
      id: 6,
      question:
        " How do you ensure that the final design meets the client's expectations?",
      answer:
        "We work closely with clients throughout the design process to ensure that the final product meets their expectations. We also offer revisions and changes to designs to ensure client satisfaction.",
    },
    {
      id: 7,
      question:
        " What sets your graphic design agency apart from others in the industry?  ",
      answer:
        "Our graphic design agency sets itself apart from others in the industry by providing high-quality designs that align with our clients' brand and messaging. We also prioritize communication and collaboration throughout the design process to ensure client satisfaction.",
    },
    {
      id: 8,
      question:
        " What types of files will I receive at the end of the project?   ",
      answer:
        "We will provide you with the final design files in a format that is suitable for your needs. This can include vector files, high-resolution images, and web-ready files.",
    },
    {
      id: 9,
      question: "What are your payment terms and methods?  ",
      answer:
        "Our payment terms and methods vary depending on the project scope and complexity. We will provide you with a detailed proposal outlining the payment terms and methods before beginning any work.",
    },
  ];
  const [isFaq,setIsFaq] = useState(faqQuestion)
  const [selected, setSelected] = useState(null);

/**
 * The function toggles the selected state of an item based on its index.
 * @param i - The parameter "i" is a variable that represents the index of the item that is being
 * toggled.
 * @returns The `toggle` function is returning `null` if the `selected` state is equal to the passed in
 * index `i`, otherwise it sets the `selected` state to the passed in index `i`. However, the code
 * snippet does not show the context of the `selected` state and how it is declared and initialized.
 */
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="mainFaq">
      <div className="faqContainer">
        <div className="faqSpacing">
          <div className="faqInner">
            <div className="faqHead">
              <h2 className="faqHeadStyle">FAQ</h2>
            </div>
            <div className="fullform">
              <p className="fullFormstyle">Frequently Asked Questions</p>
            </div>

            <div className="wrapperFaq">
              <div className="accordion">
                {isFaq.map((item, i) => (
                  <div className="item" key={i}>
                    <div className="title" onClick={() => toggle(i)}>
                      <h2 className="titleStyle" key={i}>{item.question} </h2>
                      <span>{selected == i ? "-" : "+"}</span>
                    </div>
                    <div
                      className={
                        selected == i ? "content " : "content showContent"
                      }
                    >
                      <p className="contentStyle" key={i}>{item.answer} </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Faq;
