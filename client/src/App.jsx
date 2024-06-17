import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Creche from "./pages/Class-Creche/Creche";
import Primary from "./pages/Class-Primary/Primary";
import Jhs from "./pages/Class-Jhs/Jhs";
import Dashboard from "./Components/Dashboard";
import Register from "./pages/LoginRegister/Register";
import Login from "./pages/LoginRegister/Login";

//Nursery1
import Nursery1StudentsList from "./pages/Nursery1/Nursery1StudentsList";
import Nursery1UpdateForm from "./pages/Nursery1/Nursery1UpdateForm";
import Nursery1ViewForm from "./pages/Nursery1/Nursery1ViewForm";

//Nursery2
import Nursery2StudentsList from "./pages/Nursery2/Nursery2StudentsList";
import Nursery2UpdateForm from "./pages/Nursery2/Nursery2UpdateForm";
import Nursery2ViewForm from "./pages/Nursery2/Nursery2ViewForm";

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

              {/* Nursery1 routes */}
              <Route
                path="/Nursery1StudentsList"
                element={<Nursery1StudentsList />}
              />
              <Route
                path="/nursery1/view/:customID"
                element={<Nursery1ViewForm />}
              />
              <Route
                path="/nursery1/edit/:customID"
                element={<Nursery1UpdateForm />}
              />

              {/* Nursery2 routes */}
              <Route
                path="/Nursery2StudentsList"
                element={<Nursery2StudentsList />}
              />
              <Route
                path="/nursery2/view/:customID"
                element={<Nursery2ViewForm />}
              />
              <Route
                path="/nursery2/edit/:customID"
                element={<Nursery2UpdateForm />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
