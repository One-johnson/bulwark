import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import FormField from "./FormFields";
import { initialValues, validationSchema, handleSubmit } from "./FormLogic";

const MainForm = ({ onClose }) => {
  const formFields = [
    {
      id: "studentId",
      label: "Student ID",
      type: "text",
    },
    { id: "registrationDate", label: "Registration Date", type: "date" },
    { id: "firstName", label: "First Name", type: "text" },
    { id: "middleName", label: "Middle Name", type: "text" },
    { id: "lastName", label: "Last Name", type: "text" },
    { id: "dateOfBirth", label: "Date of Birth", type: "date" },
    { id: "age", label: "Age", type: "text" },
    { id: "sex", label: "Sex", type: "text" },
    { id: "nationality", label: "Nationality", type: "text" },
    { id: "hometown", label: "Hometown", type: "text" },
    { id: " parentGuardian", label: "Parent/Guardian", type: "text" },
    { id: " address", label: "Address", type: "text" },
    { id: " occupation", label: "Occupation", type: "text" },
    {
      id: " religiousDenomination",
      label: "Religious Denomination",
      type: "text",
    },
    { id: " houseNumber", label: "House Number", type: "text" },
    { id: "phoneNumber", label: "Phone Number", type: "text" },
    // Add more fields as needed
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto ml-64">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="relative w-full max-w-2xl mx-auto">
          <div className="bg-white rounded-lg mt-20 mb-10 p-6 shadow-xl border transform transition-transform duration-300 ease-in-out">
            <h2 className="text-lg font-semibold mb-4 text-center">
              Add New Student
            </h2>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <div className="h-[500px] overflow-y-auto ">
                <Form className="grid grid-cols-2 gap-4 pr-4">
                  {/* Render form fields using the FormField component */}
                  {formFields.map((field) => (
                    <FormField
                      key={field.id}
                      id={field.id}
                      label={field.label}
                      type={field.type}
                    />
                  ))}
                  {/* Submit button */}
                  <div className="col-span-full mt-6 flex justify-center font-bold">
                    <button
                      type="submit"
                      className="mr-4 bg-green-600 text-white px-8 py-1 rounded-md hover:bg-green-700 transition-colors duration-300 text-center"
                    >
                      SAVE
                    </button>

                    <button
                      type="button"
                      onClick={onClose}
                      className="ml-4 bg-red-500 text-white px-8 py-1 rounded-md hover:bg-red-600 transition-colors duration-300 text-center"
                    >
                      CLOSE
                    </button>
                  </div>
                </Form>
              </div>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

MainForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default MainForm;
