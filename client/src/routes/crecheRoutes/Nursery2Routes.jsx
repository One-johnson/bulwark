import { Routes, Route } from "react-router-dom";

import Nursery2StudentsList from "../../pages/Nursery2/Nursery2StudentsList";
import Nursery2ViewForm from "../../pages/Nursery2/Nursery2ViewForm";
import Nursery2UpdateForm from "../../pages/Nursery2/Nursery2UpdateForm";

const Nursery1Routes = () => {
  return (
    <Routes>
      <Route path="/Nursery2StudentsList" element={<Nursery2StudentsList />} />
      <Route path="/nursery2/view/:customID" element={<Nursery2ViewForm />} />
      <Route path="/nursery2/edit/:customID" element={<Nursery2UpdateForm />} />
    </Routes>
  );
};

export default Nursery1Routes;
