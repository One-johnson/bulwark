import { Routes, Route } from "react-router-dom";

import Nursery1StudentsList from "../../pages/Nursery1/Nursery1StudentsList";
import Nursery1ViewForm from "../../pages/Nursery1/Nursery1ViewForm";
import Nursery1UpdateForm from "../../pages/Nursery1/Nursery1UpdateForm";

const Nursery1Routes = () => {
  return (
    <Routes>
      <Route path="/Nursery1StudentsList" element={<Nursery1StudentsList />} />
      <Route path="/nursery1/view/:customID" element={<Nursery1ViewForm />} />
      <Route path="/nursery1/edit/:customID" element={<Nursery1UpdateForm />} />
    </Routes>
  );
};

export default Nursery1Routes;
