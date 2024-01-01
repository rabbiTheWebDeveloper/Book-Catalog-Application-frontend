import * as Yup from "yup";
export const signupSchema = Yup.object({
  name: Yup.string().required('Enter you Name'),
  mobile: Yup.string().required('Enter your mobile number'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
});