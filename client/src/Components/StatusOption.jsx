const StatusOptions = () => {
  return (
    <>
      <option value="" className="text-gray-200">
        Select Status
      </option>
      <option value="fresher" className="text-red-600 font-bold">
        Fresher
      </option>
      <option value="continuing" className="text-orange-600 font-bold">
        Continuing
      </option>
      <option value="completed" className="text-green-600 font-bold">
        Completed
      </option>
    </>
  );
};

export default StatusOptions;
