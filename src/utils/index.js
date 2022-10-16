import * as Yup from "yup";

export const validation1 =Yup.object({
    email:Yup.string()
    .email("Email is invalid")
    .required(),
    password:Yup.string()
    .min(8,"Password must be at least 8 characters")
    .required(),
    name:Yup.string()
    .required()
})


export const validation2 =Yup.object({
    email:Yup.string()
    .email("Email is invalid")
    .required(),
    password:Yup.string()
    .min(8,"Password must be at least 8 characters")
    .required(),
})


export const validation3 = Yup.object({
    account_number: Yup.number()
    .required("Account number is required"),
    ifsc: Yup.string()
    .required("IFSC number is required"),
});


export const validation4 =Yup.object({
    email:Yup.string()
    .email("Email is invalid")
    .required(),
})


export const validation5 =Yup.object({
    password:Yup.string()
    .min(8,"Password must be at least 8 characters")
    .required(),
})

export const validation6 =Yup.object({
    account_id:Yup.string()
    // .min(8,"Password must be at least 8 characters")
    .required(),
})


