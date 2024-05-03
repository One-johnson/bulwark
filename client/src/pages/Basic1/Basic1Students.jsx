import { useState } from "react";
import FormButton from "../../Components/FormButton";
import Basic1Form from "./Basic1Form";




const Basic1Detail = () => {
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
      {isFormVisible && <Basic1Form onClose={handleCloseForm} />}
    </div>
  );
};

export default Basic1Detail;
