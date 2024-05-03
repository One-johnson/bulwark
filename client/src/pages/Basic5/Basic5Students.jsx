import { useState } from "react";
import FormButton from "../../Components/FormButton";
import Basic5Form from "./Basic5Form";



const Basic5Detail = () => {
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
      {isFormVisible && <Basic5Form onClose={handleCloseForm} />}
    </div>
  );
};

export default Basic5Detail;
