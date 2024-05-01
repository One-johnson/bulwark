import * as Yup from "yup";

// Define validation schema using Yup
export const validationSchema = Yup.object().shape({
  studentId: Yup.string().required("Required"),
  registrationDate: Yup.date().required("Date is required"),
  firstName: Yup.string().required("Required"),
  middleName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  dateOfBirth: Yup.date().required("Required"),
  age: Yup.string().optional("Optional"),
  sex: Yup.string().required("Required"),
  nationality: Yup.string().required("Required"),
  hometown: Yup.string().required("Required"),
  parentGuardian: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  occupation: Yup.string().required("Required"),
  religiousDenomination: Yup.string().required("Required"),
  houseNumber: Yup.string().optional("Optional"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must contain only numbers")
    .required("Phone number is required"),

  // Add validation rules for other fields as needed
});

// Initial form values
export const initialValues = {
  studentId: "",
  registrationDate: "",
  firstName: "",
  middleName: "",
  lastName: "",
  dateOfBirth: "",
  age: "",
  sex: "",
  nationality: "",
  hometown: "",
  parentGuardian: "",
  address: "",
  occupation: "",
  religiousDenomination: "",
  houseNumber: "",
  phoneNumber: "",

  // Initialize other fields here
};

// Form submission handler
export const handleSubmit = (values) => {
  // Handle form submission here, for example:
  console.log("Submitting form with values:", values);
};
