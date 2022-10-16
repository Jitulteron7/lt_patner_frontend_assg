import React from "react";
import { Form, Formik } from "formik";
import InputField from "../../components/InputField";
import classes from "./register.module.css";
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
import { validation2 } from "../../utils"
import { useNavigate } from "react-router-dom";
import { Toastify } from "../../App"
import apiCall from "../../helper/axios"

const Register = () => {
    let navigate = useNavigate();
    React.useEffect(() => {
        let token = localStorage.getItem('lt_patner_token');
        if (token) {
            navigate('/');
        }

    }, []);


    const registerCall = async (name, email, password) => {
        try {

            // console.log(name, email, password, "word");
            let res = await apiCall().post('/register', {
                name,
                email,
                password
            });
            console.log(res)
            if (res.status === 200) {
                localStorage.setItem('lt_patner_token', res.data.token)
                localStorage.setItem('user', JSON.stringify(res.data.user))
                navigate('/');
                Toastify("success", "Registered successfully");
                return;
            } else {
                Toastify("error", 'Something went wrong');
            }

            console.log("error")

        } catch (e) {
            Toastify("error", `${e.response.data.message}`);
            console.log(e.response.data.message, "error")
        }
    }
    return (
        <div className={classes.container}>
            <div className={classes.div1}>
                <Link to={"/"}>
                    <img src='https://lt.partners/wp-content/uploads/2020/03/LTP-Logo-1.svg'
                        className={classes.logo_brand}
                        alt="LT patners logo"
                    />
                </Link>
                <div className={classes.content_container}>
                    <p>DESIGNED WITH YOUR GOALS IN MIND</p>
                    <p>
                        Marketing and consulting services designed to strategically solve problems of any business with a digital presence.
                    </p>
                </div>
            </div>
            <div className={classes.div2}>
                <div className={classes.submission_form}>
                    <Formik
                        initialValues={{
                            text: "",
                            email: "",
                            password: "",
                        }}
                        validationSchema={validation2}
                        onSubmit={async (values) => {

                            await registerCall(values.text, values.email, values.password);

                        }}
                    >
                        <div className="form_box">
                            <h3>Register</h3>

                            <Form>
                                <InputField
                                    label="Your Name"
                                    // placeholder="example@example.com"
                                    type="text"
                                    name="text"
                                />

                                <InputField
                                    label="Your email"
                                    // placeholder="example@example.com"
                                    type="email"
                                    name="email"
                                />
                                <InputField
                                    label="Choose a password"
                                    // placeholder="example"
                                    type="password"
                                    name="password"
                                />
                                <Button style={{ width: "100%", height: "50px" }} type="submit">Submit</Button>
                                <div className={classes.bottom_form}>
                                    <p>
                                        Forgot Your Password?
                                        <Link to="/forgot"> Click here </Link>
                                    </p>
                                    <p>
                                        Already have an account?
                                        <Link to={"/login"}> Login </Link>
                                    </p>

                                </div>
                            </Form>
                        </div>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Register;