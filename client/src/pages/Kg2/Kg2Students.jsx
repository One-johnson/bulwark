import { useState } from "react";
import FormButton from "../../Components/FormButton";
import Kg2Form from "./Kg2Form";

const Kg2Detail = () => {
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
      {isFormVisible && <Kg2Form onClose={handleCloseForm} />}
    </div>
  );
};

export default Kg2Detail;
