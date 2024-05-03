import { useState } from "react";
import FormButton from "../../Components/FormButton";
import Kg1Form from "./Kg1Form";



const Kg1Detail = () => {
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
      {isFormVisible && <Kg1Form onClose={handleCloseForm} />}
    </div>
  );
};

export default Kg1Detail;
