import { IoIosArrowBack } from "react-icons/io";
import { useHistory } from "react-router-dom";

const BackArrow = () => {
  const history = useHistory();

  const handleGoBack = () => {
    // Go back to the previous page
    history.goBack();
  };

  return (
    <div className="absolute top-4 left-4">
      <IoIosArrowBack
        onClick={handleGoBack}
        className="text-gray-600 text-2xl cursor-pointer"
      />
    </div>
  );
};

export default BackArrow;
