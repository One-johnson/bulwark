import { useState } from "react";
import FormButton from "../../Components/FormButton";
import Basic2Form from "./Basic2Form";



const Basic2Detail = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };
  console.log("isFormVisible:", isFormVisible);

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="relative mr-16">
      <FormButton onClick={toggleFormVisibility} />
      {isFormVisible && <Basic2Form onClose={handleCloseForm} />}
    </div>
  );
};

export default Basic2Detail;
