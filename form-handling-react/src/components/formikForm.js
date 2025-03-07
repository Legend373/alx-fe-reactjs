import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const formikForm = () => {
    // Define validation schema using Yup
    const validationSchema = Yup.object({
        username: Yup.string().required("Username is required"),
        email: Yup.string().email("Invalid email format").required("Email is required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    });

    return (
        <Formik
            initialValues={{ username: "", email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                console.log("Form submitted:", values);
                resetForm(); // Clear form after submission
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    {/* Username Field */}
                    <div>
                        <label>Username:</label>
                        <Field type="text" name="username" />
                        <ErrorMessage name="username" component="div" className="error" />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label>Email:</label>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="div" className="error" />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label>Password:</label>
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="div" className="error" />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Register"}
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default formikForm;
