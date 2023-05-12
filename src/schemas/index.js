import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(20).required("Please Enter Your Name"),
  email: Yup.string().email().required("Please Enter Your Email"),
  phone: Yup.string().max(10).required("Please Enter Contact Number"),
  subject: Yup.string().max(20).required("Please Enter Subject"),
  message: Yup.string().max(100).required("Please Enter Message"),
});
