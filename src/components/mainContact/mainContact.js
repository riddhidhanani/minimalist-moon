import React from "react";
import "./mainContact.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};
const MainContact = () => {
  //formik handles the form
  // error, handleBlur, handleChange, handleSubmit,touched

  //yup is for data validation

  const { values, touched, handleBlur, handleChange, handleSubmit, errors } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });


//   function refreshHome() {
//     setTimeout(()=>{
//         window.location.reload(false);
//     }, 100);
// }
  return (
    <div>
      <div className="pathOf">
        <ol className="pathServiceOl">
          <li className="pathServiceLi">
            <span className="homeAnchService">
              <Link to="/" className="pathServiceHome">
                Home
              </Link>
            </span>
          </li>

          <li className="pathServiceLi">
            <span className="slashMargin">/</span>
          </li>

          <li className="pathServiceLi">
            <span className="ourServiceTop">Contact Us</span>
          </li>
        </ol>
      </div>
      <div className="contactContainer">
        <div className="contactSpacing">
          <div className="inTouchMain">
            <div className="inTouchLeft">
              <h2 className="inTouchHead">Let's get in touch</h2>
            </div>
            <div className="inTouchRight">
              <div className="inquerydiv">
                <p className="inquiryStyle">
                  Great! We're excited to hear from you and let's start
                  something special togerter. call us for any inquery.
                </p>
              </div>
            </div>
          </div>

          <div className="inTouchBottom">
            <div className="afraidMain">
              <h3 className="afraidHead">Don't be afraid man ! Say Hello</h3>
              <ul className="afraidUl">
                <li className="afraidLi">
                  <a className="afraidAnch" href="tel:+1 (815) 515-9250">
                    +1 (815) 515-9250
                  </a>
                </li>
                <li className="afraidLi">
                  <a
                    className="afraidAnch"
                    href="mailto:Minimalistmoon116@Gmail.Com"
                  >
                    Minimalistmoon116@gmail.Com
                  </a>
                </li>
                <li className="afraidLi">
                  <span className="spanafraid">Chicago, USA - 60131</span>
                </li>
              </ul>
            </div>
            <div className="formMain">
              <div className="innerForm">
                <form onSubmit={handleSubmit}>
                  <div className="nameEmailMain">
                    <div className="nameDiv">
                      <input
                        type="name"
                        autoComplete="off"
                        name="name"
                        id="name"
                        placeholder="Name*"
                        className="nameInput"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.name && touched.name ? (
                        <p className="errorStyling">{errors.name}</p>
                      ) : null}
                    </div>
                    <div className="emailDiv">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email*"
                        className="emailInput"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.email && touched.email ? (
                        <p className="errorStyling">{errors.email}</p>
                      ) : null}
                    </div>
                  </div>

                  <div className="phoneSubjectMain">
                    <div className="nameDiv">
                      <input
                        type="number"
                        name="phone"
                        id="phone"
                        placeholder="Phone*"
                        className="phoneInput"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.phone && touched.phone ? (
                        <p className="errorStyling">{errors.phone}</p>
                      ) : null}
                    </div>
                    <div className="emailDiv">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Subject*"
                        className="subjectInput"
                        value={values.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.subject && touched.subject ? (
                        <p className="errorStyling">{errors.subject}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="messageDiv">
                    <input
                      type="text"
                      placeholder="Messages*"
                      name="message"
                      id="message"
                      className="messageInput"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.message && touched.message ? (
                      <p className="errorStyling">{errors.message}</p>
                    ) : null}
                  </div>

                  <button className="whiteMoonDiv" type="submit">
                    <div className="whiteMainknowStyle">
                      <div className="whiteknowStyle">Send</div>
                      <div className="whiteknowStyle">Messages</div>
                    </div>

                    <div className="slantArrow">
                      <img src="slant.png" />
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContact;
