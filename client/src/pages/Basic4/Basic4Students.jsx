import { useState } from "react";
import FormButton from "../../Components/FormButton";
import Basic4Form from "./Basic4Form";



const Basic4Detail = () => {
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
      {isFormVisible && <Basic4Form onClose={handleCloseForm} />}
    </div>
  );
};

export default Basic4Detail;