import { useState } from "react";
import FormButton from "../../../Components/FormButton";
import MainForm from "../../../assets/MainForm";

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
      {isFormVisible && <MainForm onClose={handleCloseForm} />}
    </div>
  );
};

export default Basic2Detail;
