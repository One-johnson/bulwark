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
// import Basic1StudentsList  from "./pages/Basic1/Basic1Studentslist";
// import Basic2StudentsList from "./pages/Basic2/Basic2StudentsList";
// import Basic3StudentsList from "./pages/Basic3/Basic3StudentsList";
// import Basic4StudentsList from "./pages/Basic4/Basic4StudentsList";
// import Basic5StudentsList from "./pages/Basic5/Basic5StudentsList";
// import Basic6StudentsList from "./pages/Basic6/Basic6StudentsList";
// import Basic7StudentsList from "./pages/Basic7/Basic7StudentsList";
// import Basic8StudentsList from "./pages/Basic8/Basic8StudentsList";
// import Basic9StudentsList from "./pages/Basic9/Basic9StudentsList";
// import KG1StudentsList from "./pages/Kg1/Kg1StudentsList";
// import KG2StudentsList from "./pages/Kg2/Kg2StudentsList";

//nursery 1 crud
import Nursery1StudentsList from "./pages/Nursery1/Nursery1StudentsList";
import Nursery1ViewForm from "./pages/Nursery1/Nursery1ViewForm";
import Nursery1UpdateForm from "./pages/Nursery1/Nursery1UpdateForm";

//nursery 2 crud
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

              {/* <Route path="/Basic2StudentsList" element={<Basic2StudentsList />} />
              <Route path="/Basic1StudentsList" element={<Basic1StudentsList />} />
              <Route path="/Basic3StudentsList" element={<Basic3StudentsList />} />
              <Route path="/Basic4StudentsList" element={<Basic4StudentsList />} />
              <Route path="/Basic5StudentsList" element={<Basic5StudentsList />} />
              <Route path="/Basic6StudentsList" element={<Basic6StudentsList />} />
              <Route path="/Basic7StudentsList" element={<Basic7StudentsList />} />
              <Route path="/Basic8StudentsList" element={<Basic8StudentsList />} />
              <Route path="/Basic9StudentsList" element={<Basic9StudentsList />} />
              <Route path="/Kg1StudentsList" element={<KG1StudentsList />} />
              <Route path="/Kg2StudentsList" element={<KG2StudentsList />} /> */}

              {/* nursery1 route */}
              <Route
                path="/Nursery1StudentsList"
                element={<Nursery1StudentsList />}
              />
              <Route path="/nursery1/view/:id" element={<Nursery1ViewForm />} />
              <Route
                path="/nursery1/edit/:id"
                element={<Nursery1UpdateForm />}
              />

              {/* nursery2 route */}
              <Route
                path="/Nursery2StudentsList"
                element={<Nursery2StudentsList />}
              />
              <Route path="/nursery2/view/:id" element={<Nursery2ViewForm />} />
              <Route
                path="/nursery2/edit/:id"
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
