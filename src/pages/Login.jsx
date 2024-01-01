import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useUserLoginMutation } from "../redux/api/authApi";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { loginSchema } from "../schemas/login";

const Login = () => {
  const [userLogin ,] = useUserLoginMutation();
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log(values);
    let loadingToast = null;
    try {
      loadingToast = toast.loading("login account...");
      const response = await userLogin(values);
      if(response){
        toast.success("Account login successfully", { id: loadingToast });
        navigate("/");
      }
      setSubmitting(false);
    } catch (error) {
      console.error("API Error:", error.message);
      setSubmitting(false);
    } finally {
      // Stop loading (if it's still active)
      // if (loadingToast !== null) {
      //   toast.stop(loadingToast);
      // }
    }
  };
  return (
    <section className="bg-gray-500 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="./src/assets/logo.png"
            alt="logo"
          />
           Read Right
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={loginSchema}
            >
            <Form className="space-y-4 md:space-y-6" >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                 
                />
                    <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            
                />
                    <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm"
                  />
              </div>
           
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href="/signup"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </a>
              </p>
            </Form>
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
