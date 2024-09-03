import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { StudentFormConfig } from "../../config/FormConfig";

const Basic9ViewForm = () => {
  const { customID } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3002/basic9/view/" + customID)
      .then((res) => {
        setStudent(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, [customID]);

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-300 bg-opacity-75">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="relative w-full max-w-3xl mx-auto">
          <div className="bg-white rounded-lg mt-20 mb-10 p-6 shadow-xl border transform transition-transform duration-300 ease-in-out">
            <h2 className="text-2xl font-bold mb-4 text-center">Student Details</h2>
            {/* Use Formik with StudentConfigForm for read-only display */}
            <Formik
              initialValues={student}
              validationSchema={StudentFormConfig.validationSchema}
            >
              {() => (
                <Form className="mx-auto">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Iterate through each field in the config */}
                    {Object.keys(StudentFormConfig.initialValues).map((fieldKey) => (
                      <div key={fieldKey}>
                        <label htmlFor={fieldKey} className="block mb-2 capitalize">
                          {fieldKey.replace(/([A-Z])/g, " $1")} {/* Format field name */}
                        </label>
                        <Field
                          type="text"
                          id={fieldKey}
                          name={fieldKey}
                          className="border-2 border-gray-300 rounded-lg w-full py-2 px-3 focus:outline-none bg-gray-200"
                          readOnly
                        />
                      </div>
                    ))}
                  </div>
                </Form>
              )}
            </Formik>

            <div className="mt-8 text-center">
              <Link
                to="/Basic9StudentsList"
                className="mr-4 text-white bg-blue-500 py-2 px-4 rounded-md font-bold hover:bg-blue-800 transition duration-300"
              >
                BACK
              </Link>
              <Link
                to={`/basic9/edit/${student.customID}`}
                className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-md transition duration-300"
              >
                EDIT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basic9ViewForm;
