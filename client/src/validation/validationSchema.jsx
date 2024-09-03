import * as Yup from "yup";
export const StudentValidationSchema = Yup.object().shape({
  registrationDate: Yup.date().required("Required"),
  firstName: Yup.string().required("Required"),
  middleName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  dateOfBirth: Yup.date().required("Required"),
  age: Yup.number().positive("Must be a positive number").required("Required"),
  sex: Yup.string()
    .oneOf(["male", "female"], "Invalid sex")
    .required("Required"),
  nationality: Yup.string().required("Required"),
  hometown: Yup.string().required("Required"),
  parentGuardian: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  occupation: Yup.string().required("Required"),
  religiousDenomination: Yup.string().required("Required"),
  houseNumber: Yup.string().required("Required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Must be a number")
    .min(10, "Must be at least 10 digits")
    .required("Required"),
  status: Yup.number().required("Required"),
});

export const TeacherValidationSchema = Yup.object().shape({
  fullName: Yup.string().required("required"),
  dateOfBirth: Yup.date().required("Required"),
  gender: Yup.string()
    .oneOf(["male", "female"], "Invalid sex")
    .required("Required"),
  nationality: Yup.string().required("Required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Must be a number")
    .min(10, "Must be at least 10 digits")
    .required("Required"),
  email: Yup.email().required("Email is invalid"),
  address: Yup.string().required("Required"),
  qualification: Yup.string().required("Required"),
  experience: Yup.string().required("Required"),
  position: Yup.string().required("Required"),
  startDate: Yup.date().required("Required"),
  salary: Yup.number()
    .positive("Must be a positive number")
    .required("Required"),
  emergencyContact: Yup.string()
    .matches(/^[0-9]+$/, "Must be a number")
    .min(10, "Must be at least 10 digits")
    .required("Required"),
  status: Yup.number().required("Required"),
});
