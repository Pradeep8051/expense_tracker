import React, { useEffect } from "react";
import { GlobalStyle } from "../Styles/GlobalStyle";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Wrapper } from "./Styles";
import { useFormik } from "formik";
import { LoginSchema } from "../schemas";
import { database } from "../Config/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';

const initialValues = {
  email: "",
  password: "",
};


const Login = () => {
  const navigate = useNavigate();
  const handleSignIn = async (data) => {
    // e.preventDefault();
    try {
      const autFunc = signInWithEmailAndPassword(database, data?.email, data?.password).then((userCredential) => {
        const user = userCredential.user
        console.log(user, ".......user");
        if (user) {
          localStorage.setItem("userId", user.uid);
          navigate("/home")
          toast.success("User Is Logged In Succesfully ", {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          return;
        }

      }).catch((err) => {
        console.log(err, "errror from then catcxh part");
        if (err.code === "auth/user-not-found") {
          toast.error("User not found. Please check your email or Password.");
        } else {
          toast.error("An error occurred. Please try again later."
          );
        }
      })
      autFunc();
      // User signed up successfully
    } catch (error) {
      console.log(error.message);
    }
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: LoginSchema,
      onSubmit: (values, action) => {
        console.log(" login values", values);
        <ToastContainer />

        handleSignIn(values)
        action.resetForm();
        console.log(values, "values...");
      },
    });

  useEffect(() => {
    AOS.init({ duration: 2000 })

  }, [])
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <div className="container">
          <div className="modal" data-aos="fade-left">
            <div className="modal-container">
              <div className="modal-left">
                <h1 className="modal-title">Welcome!</h1>
                <p className="modal-desc">
                  To the Expense Tracker website.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="input-block">
                    <label htmlFor="email" className="input-label">
                      Email
                    </label>
                    <input
                      type="email"
                      autoComplete="off"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="password" className="input-label">
                      Password
                    </label>
                    <input
                      type="password"
                      autoComplete="off"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <p className="form-error">{errors.password}</p>
                    ) : null}
                  </div>

                  <div className="modal-buttons">
                    <button className="input-button" type="submit">
                      Login
                    </button>
                  </div>
                </form>
                <p className="sign-up">
                  Want to go Signup? <a href="/signup">Sign In now</a>
                </p>
              </div>
              <div className="modal-right">
                <img
                  src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?size=626&ext=jpg&ga=GA1.1.1076981982.1692675030&semt=ais"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};



export default Login;