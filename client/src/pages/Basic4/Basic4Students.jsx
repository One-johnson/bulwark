import { useState } from "react";
import FormButton from "../../Components/FormButton";
import Basic9Form from "../Basic9/Basic9Form";


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
      {isFormVisible && <Basic9Form onClose={handleCloseForm} />}
    </div>
  );
};

export default Basic4Detail;
