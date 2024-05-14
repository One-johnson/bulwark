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

//nursery 1 crud
import Nursery1StudentsList from "./pages/Nursery1/Nursery1StudentsList";
import Nursery1ViewForm from "./pages/Nursery1/Nursery1ViewForm";
import Nursery1UpdateForm from "./pages/Nursery1/Nursery1UpdateForm";

//nursery 2 crud
import Nursery2StudentsList from "./pages/Nursery2/Nursery2StudentsList";
import Nursery2UpdateForm from "./pages/Nursery2/Nursery2UpdateForm";
import Nursery2ViewForm from "./pages/Nursery2/Nursery2ViewForm";

//kg 1 crud
import Kg1StudentsList from "./pages/Kg1/Kg1StudentsList";
import Kg1ViewForm from "./pages/Kg1/Kg1ViewForm";
import Kg1UpdateForm from "./pages/Kg1/Kg1UpdateForm";

//kg 2 crud
import Kg2StudentsList from "./pages/Kg2/Kg2StudentsList";
import Kg2ViewForm from "./pages/Kg2/Kg2ViewForm";
import Kg2UpdateForm from "./pages/Kg2/Kg2UpdateForm";

// basic 1 crud
import Basic1StudentsList from "./pages/Basic1/Basic1StudentsList";
import Basic1ViewForm from "./pages/Basic1/Basic1ViewForm";
import Basic1UpdateForm from "./pages/Basic1/Basic1UpdateForm";

// basic 2 crud
import Basic2StudentsList from "./pages/Basic2/Basic2StudentsList";
import Basic2ViewForm from "./pages/Basic2/Basic2ViewForm";
import Basic2UpdateForm from "./pages/Basic2/Basic2UpdateForm";

// basic 3 crud
import Basic3StudentsList from "./pages/Basic3/Basic3StudentsList";
import Basic3ViewForm from "./pages/Basic3/Basic3ViewForm";
import Basic3UpdateForm from "./pages/Basic3/Basic3UpdateForm";

// basic 4 crud
import Basic4StudentsList from "./pages/Basic4/Basic4StudentsList";
import Basic4ViewForm from "./pages/Basic4/Basic4ViewForm";
import Basic4UpdateForm from "./pages/Basic4/Basic4UpdateForm";

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

              {/* basic 1 route */}
              <Route
                path="/Basic1StudentsList"
                element={<Basic1StudentsList />}
              />
              <Route path="/basic1/view/:id" element={<Basic1ViewForm />} />
              <Route path="/basic1/edit/:id" element={<Basic1UpdateForm />} />

              {/* basic 2 route */}
              <Route
                path="/Basic2StudentsList"
                element={<Basic2StudentsList />}
              />
              <Route path="/basic2/view/:id" element={<Basic2ViewForm />} />
              <Route path="/basic2/edit/:id" element={<Basic2UpdateForm />} />

              {/* basic 3 route */}
              <Route
                path="/Basic3StudentsList"
                element={<Basic3StudentsList />}
              />
              <Route path="/basic3/view/:id" element={<Basic3ViewForm />} />
              <Route path="/basic3/edit/:id" element={<Basic3UpdateForm />} />

              {/* basic 4 route */}
              <Route
                path="/Basic4StudentsList"
                element={<Basic4StudentsList />}
              />
              <Route path="/basic4/view/:id" element={<Basic4ViewForm />} />
              <Route path="/basic4/edit/:id" element={<Basic4UpdateForm />} />

              {/* kg 2 route */}
              <Route path="/Kg2StudentsList" element={<Kg2StudentsList />} />
              <Route path="/kg2/view/:id" element={<Kg2ViewForm />} />
              <Route path="/kg2/edit/:id" element={<Kg2UpdateForm />} />

              {/* kg route */}
              <Route path="/Kg1StudentsList" element={<Kg1StudentsList />} />
              <Route path="/kg1/view/:id" element={<Kg1ViewForm />} />
              <Route path="/kg1/edit/:id" element={<Kg1UpdateForm />} />

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
