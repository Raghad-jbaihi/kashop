  import * as yup from "yup"
  export const registerSchema = yup.object({
  userName: yup
    .string()
    .matches(/^[a-zA-Z0-9]{3,20}$/, "User Name must be 3-20 chars, letters and numbers only")
    .required("User Name is required"),

  fullName: yup
    .string()
    .matches(/^[a-zA-Z\s]{3,50}$/, "Full Name must be 3-50 chars, letters and spaces only")
    .required("Full Name is required"),

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

  phoneNumber: yup
    .string()
    .matches(/^\+?\d{10,15}$/, "Phone Number must be 10-15 digits, optional leading +")
    .required("Phone Number is required"),
});