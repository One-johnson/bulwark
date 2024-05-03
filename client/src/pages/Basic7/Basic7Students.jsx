import { useState } from "react";
import FormButton from "../../Components/FormButton";
import Basic7Form from "./Basic7Form";


const Basic7Detail = () => {
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
      {isFormVisible && <Basic7Form onClose={handleCloseForm} />}
    </div>
  );
};

export default Basic7Detail;
