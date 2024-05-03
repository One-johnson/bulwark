import { useState } from "react";
import FormButton from "../../Components/FormButton";
import Nursery1Form from "./Nursery1Form";


const Nursery1Detail = () => {
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
      {isFormVisible && <Nursery1Form onClose={handleCloseForm} />}
    </div>
  );
};

export default Nursery1Detail;