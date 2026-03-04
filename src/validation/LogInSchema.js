  import * as yup from "yup"
export const loginSchema = yup.object({
    email: yup
        .string()
        .email("Invalid email format")
        .required("Email is required"),

    password: yup
        .string()
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Password must be minimum 8 chars, at least one letter, one number, and one special char"
        )
        .required("Password is required"),
});