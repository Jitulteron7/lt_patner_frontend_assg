import React from "react";
import { useField, ErrorMessage } from "formik"
import "./input.css";

const InputField = ({ label, placeholder, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <div class="mb-3 input_field">
                <label htmlFor={field.name} className="form-label">
                    {label}
                </label>
                <input
                    className={`form-control ${meta.touched && meta.error && 'is-invalid'}`}
                    {...field} {...props}
                    autoComplete="off"
                    aria-describedby="emailHelp"
                />
                <ErrorMessage component="div" name={field.name} className="error_form" />
            </div>
        </>
    );
};

export default InputField;
