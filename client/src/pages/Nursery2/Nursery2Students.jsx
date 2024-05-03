import { useState } from "react";
import FormButton from "../../Components/FormButton";
import Nursery2Form from "./Nursery2Form";


const Nursery2Detail = () => {
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
      {isFormVisible && <Nursery2Form onClose={handleCloseForm} />}
    </div>
  );
};

export default Nursery2Detail;
