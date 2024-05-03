import { useState } from "react";
import FormButton from "../../Components/FormButton";
import Basic6Form from "./Basic6Form";



const Basic6Detail = () => {
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
      {isFormVisible && <Basic6Form onClose={handleCloseForm} />}
    </div>
  );
};

export default Basic6Detail;
