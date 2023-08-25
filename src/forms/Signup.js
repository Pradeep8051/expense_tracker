import React, { useEffect } from "react";
import { GlobalStyle } from "../Styles/GlobalStyle";
import { Wrapper } from "./Styles";
import { useFormik } from "formik";
import { signupSchema } from "../schemas";
import AOS from 'aos'
    
import 'aos/dist/aos.css'
import { database } from "../Config/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
};

const Signup = () => {
    const navigate = useNavigate();
    const handleSignup = async (data) => {
        // e.preventDefault();
        try {
            const autFunc = createUserWithEmailAndPassword(database, data?.email, data?.password)
            console.log("data....", autFunc);
            navigate("/")
            // User signed up successfully
        } catch (error) {
            console.log(error.message);
        }
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            validationSchema: signupSchema,
            onSubmit: (values, action) => {
                console.log("Registration values", values);
                handleSignup(values)
                action.resetForm();
                console.log(values);
            
            },
        
        });
        console.log(
            "Registration errors",
            errors
        );
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div>
            <GlobalStyle />
            <Wrapper >
                <div className="container">
                    <div className="modal" data-aos="fade-right">
                        <div className="modal-container">
                            <div className="modal-left">
                                <h1 className="modal-title">Welcome!</h1>
                                <p className="modal-desc">
                                    To the Expense Tracker website.
                                </p>
                                <form onSubmit={handleSubmit}>
                                    <div className="input-block">
                                        <label htmlFor="name" className="input-label">
                                            Name
                                        </label>
                                        <input
                                            type="name"
                                            autoComplete="off"
                                            name="name"
                                            id="name"
                                            placeholder="Name"
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.name && touched.name ? (
                                            <p className="form-error">{errors.name}</p>
                                        ) : null}
                                    </div>
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
                                    <div className="input-block">
                                        <label htmlFor="confirm_password" className="input-label">
                                            Confirm Password
                                        </label>
                                        <input
                                            type="password"
                                            autoComplete="off"
                                            name="confirm_password"
                                            id="confirm_password"
                                            placeholder="Confirm Password"
                                            value={values.confirm_password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.confirm_password && touched.confirm_password ? (
                                            <p className="form-error">{errors.confirm_password}</p>
                                        ) : null}
                                    </div>
                                    <div className="modal-buttons">
                                        <button className="input-button" type="submit">
                                            Registration
                                        </button>
                                    </div>
                                </form>
                                <p className="sign-up">
                                    Already have an account? <a href="/">Login now</a>
                                </p>
                            </div>
                            <div className="modal-right">
                                <img
                                    src="https://img.freepik.com/premium-vector/isometric-design-modern-male-using-mobile-phone-modern-shopping-application-choosing-t-shirt-isolated-blue-background_241107-773.jpg?size=626&ext=jpg&ga=GA1.1.1076981982.1692675030&semt=ais"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
};


export default Signup;