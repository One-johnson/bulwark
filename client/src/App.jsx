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

// basic 5 crud
import Basic5tudentsList from "./pages/Basic5/Basic5StudentsList";
import Basic5ViewForm from "./pages/Basic5/Basic5ViewForm";
import Basic5UpdateForm from "./pages/Basic5/Basic5UpdateForm";

// basic 6 crud
import Basic6tudentsList from "./pages/Basic6/Basic6StudentsList";
import Basic6ViewForm from "./pages/Basic6/Basic6ViewForm";
import Basic6UpdateForm from "./pages/Basic6/Basic6UpdateForm";

// basic 7 crud
import Basic7tudentsList from "./pages/Basic7/Basic7StudentsList";
import Basic7ViewForm from "./pages/Basic7/Basic7ViewForm";
import Basic7UpdateForm from "./pages/Basic7/Basic7UpdateForm";

// basic 8 crud
import Basic8tudentsList from "./pages/Basic8/Basic8StudentsList";
import Basic8ViewForm from "./pages/Basic8/Basic8ViewForm";
import Basic8UpdateForm from "./pages/Basic8/Basic8UpdateForm";

// basic 9 crud
import Basic9tudentsList from "./pages/Basic9/Basic9StudentsList";
import Basic9ViewForm from "./pages/Basic9/Basic9ViewForm";
import Basic9UpdateForm from "./pages/Basic9/Basic9UpdateForm";

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

              {/* basic 5 route */}
              <Route
                path="/Basic5StudentsList"
                element={<Basic5tudentsList />}
              />
              <Route path="/basic5/view/:id" element={<Basic5ViewForm />} />
              <Route path="/basic5/edit/:id" element={<Basic5UpdateForm />} />

              {/* basic 6 route */}
              <Route
                path="/Basic6StudentsList"
                element={<Basic6tudentsList />}
              />
              <Route path="/basic6/view/:id" element={<Basic6ViewForm />} />
              <Route path="/basic6/edit/:id" element={<Basic6UpdateForm />} />

              {/* basic 7 route */}
              <Route
                path="/Basic7StudentsList"
                element={<Basic7tudentsList />}
              />
              <Route path="/basic7/view/:id" element={<Basic7ViewForm />} />
              <Route path="/basic7/edit/:id" element={<Basic7UpdateForm />} />

              {/* basic 8 route */}
              <Route
                path="/Basic8StudentsList"
                element={<Basic8tudentsList />}
              />
              <Route path="/basic8/view/:id" element={<Basic8ViewForm />} />
              <Route path="/basic8/edit/:id" element={<Basic8UpdateForm />} />

              {/* basic 9 route */}
              <Route
                path="/Basic9StudentsList"
                element={<Basic9tudentsList />}
              />
              <Route path="/basic9/view/:id" element={<Basic9ViewForm />} />
              <Route path="/basic9/edit/:id" element={<Basic9UpdateForm />} />

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
              <Route
                path="/nursery1/view/:customID"
                element={<Nursery1ViewForm />}
              />
              <Route
                path="/nursery1/edit/:customID"
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
