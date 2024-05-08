// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Creche from "./pages/Class-Creche/Creche";
import Primary from "./pages/Class-Primary/Primary";
import Jhs from "./pages/Class-Jhs/Jhs";
import Dashboard from "./Components/Dashboard";
import Register from "./pages/LoginRegister/Register";
import Login from "./pages/LoginRegister/Login";
import Basic1Students from "./pages/Basic1/Basic1Students";
import Basic2Students from "./pages/Basic2/Basic2Students";
import Basic3Students from "./pages/Basic3/Basic3Students";
import Basic4Students from "./pages/Basic4/Basic4Students";
import Basic5Students from "./pages/Basic5/Basic5Students";
import Basic6Students from "./pages/Basic6/Basic6Students";
import Basic7Students from "./pages/Basic7/Basic7Students";
import Basic8Students from "./pages/Basic8/Basic8Students";
import KG1Students from "./pages/Kg1/Kg1Students";
import KG2Students from "./pages/Kg2/Kg2Students";
import Nursery1Students from "./pages/Nursery1/Nursery1Students";

import Basic9Students from "./pages/Basic9/Basic9Students";

//nursery 2 crud
import Nursery2Students from "./pages/Nursery2/Nursery2Students";
import Update from "./pages/Nursery2/Update";
import ViewForm from "./pages/Nursery2/ViewForm";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <div className="flex flex-col flex-1">
          <div className="overflow-y-auto h-full">
            <ToastContainer />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/Creche" element={<Creche />} />
              <Route path="/Primary" element={<Primary />} />
              <Route path="/Jhs" element={<Jhs />} />

              <Route path="/Basic1Students" element={<Basic1Students />} />
              <Route path="/Basic2Students" element={<Basic2Students />} />
              <Route path="/Basic3Students" element={<Basic3Students />} />
              <Route path="/Basic4Students" element={<Basic4Students />} />
              <Route path="/Basic5Students" element={<Basic5Students />} />
              <Route path="/Basic6Students" element={<Basic6Students />} />
              <Route path="/Basic7Students" element={<Basic7Students />} />
              <Route path="/Basic8Students" element={<Basic8Students />} />
              <Route path="/Basic9Students" element={<Basic9Students />} />
              <Route path="/Kg1Students" element={<KG1Students />} />
              <Route path="/Kg2Students" element={<KG2Students />} />
              <Route path="/Nursery1Students" element={<Nursery1Students />} />

              <Route path="/nursery2Students" element={<Nursery2Students />} />
              <Route path="/nursery2/view/:id" element={<ViewForm />} />
              <Route path="/nursery2/edit/:id" element={<Update />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
