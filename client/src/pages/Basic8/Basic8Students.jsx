import { useState } from "react";
import FormButton from "../../Components/FormButton";
import Basic8Form from "./Basic8Form";


const Basic8Detail = () => {
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
      {isFormVisible && <Basic8Form onClose={handleCloseForm} />}
    </div>
  );
};

export default Basic8Detail;
