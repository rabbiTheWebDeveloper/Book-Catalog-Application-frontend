// ../schemas/login.js

import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});
