import { useState } from "react";
import FormButton from "../../Components/FormButton";
import Basic3Form from "./Basic3Form";



const Basic3Detail = () => {
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
      {isFormVisible && <Basic3Form onClose={handleCloseForm} />}
    </div>
  );
};

export default Basic3Detail;
