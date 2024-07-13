import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Creche from "./pages/Class-Creche/Creche";
import Primary from "./pages/Class-Primary/Primary";
import Jhs from "./pages/Class-Jhs/Jhs";
import Dashboard from "./Components/Dashboard";
import Register from "./pages/LoginRegister/Register";
import Login from "./pages/LoginRegister/Login";
import ClassList from "./pages/MainPages/ClassList";
import Calendar from "./pages/MainPages/Calendar";
import Events from "./pages/MainPages/Events";
import Teachers from "./pages/MainPages/Teachers";
import TimeTable from "./pages/MainPages/TimeTable";
import ExamResults from "./pages/MainPages/ExamResults";
import Attendance from "./pages/MainPages/Attendance";

//Nursery1
import Nursery1StudentsList from "./pages/Nursery1/Nursery1StudentsList";
import Nursery1UpdateForm from "./pages/Nursery1/Nursery1UpdateForm";
import Nursery1ViewForm from "./pages/Nursery1/Nursery1ViewForm";

//Nursery2
import Nursery2StudentsList from "./pages/Nursery2/Nursery2StudentsList";
import Nursery2UpdateForm from "./pages/Nursery2/Nursery2UpdateForm";
import Nursery2ViewForm from "./pages/Nursery2/Nursery2ViewForm";

//kg1
import Kg1StudentsList from "./pages/Kg1/Kg1StudentsList";
import Kg1UpdateForm from "./pages/Kg1/Kg1UpdateForm";
import Kg1ViewForm from "./pages/Kg1/Kg1ViewForm";

//kg2
import Kg2StudentsList from "./pages/Kg2/Kg2StudentsList";
import Kg2UpdateForm from "./pages/Kg2/Kg2UpdateForm";
import Kg2ViewForm from "./pages/Kg2/Kg2ViewForm";

//basic1
import Basic1StudentsList from "./pages/Basic1/Basic1StudentsList";
import Basic1UpdateForm from "./pages/Basic1/Basic1UpdateForm";
import Basic1ViewForm from "./pages/Basic1/Basic1ViewForm";

//basic2
import Basic2StudentsList from "./pages/Basic2/Basic2StudentsList";
import Basic2UpdateForm from "./pages/Basic2/Basic2UpdateForm";
import Basic2ViewForm from "./pages/Basic2/Basic2ViewForm";

//basic3
import Basic3StudentsList from "./pages/Basic3/Basic3StudentsList";
import Basic3UpdateForm from "./pages/Basic3/Basic3UpdateForm";
import Basic3ViewForm from "./pages/Basic3/Basic3ViewForm";

//basic4
import Basic4StudentsList from "./pages/Basic4/Basic4StudentsList";
import Basic4UpdateForm from "./pages/Basic4/Basic4UpdateForm";
import Basic4ViewForm from "./pages/Basic4/Basic4ViewForm";

//basic5
import Basic5StudentsList from "./pages/Basic5/Basic5StudentsList";
import Basic5UpdateForm from "./pages/Basic5/Basic5UpdateForm";
import Basic5ViewForm from "./pages/Basic5/Basic5ViewForm";

//basic6
import Basic6StudentsList from "./pages/Basic6/Basic6StudentsList";
import Basic6UpdateForm from "./pages/Basic6/Basic6UpdateForm";
import Basic6ViewForm from "./pages/Basic6/Basic6ViewForm";

//basic7
import Basic7StudentsList from "./pages/Basic7/Basic7StudentsList";
import Basic7UpdateForm from "./pages/Basic7/Basic7UpdateForm";
import Basic7ViewForm from "./pages/Basic7/Basic7ViewForm";

//basic8
import Basic8StudentsList from "./pages/Basic8/Basic8StudentsList";
import Basic8UpdateForm from "./pages/Basic8/Basic8UpdateForm";
import Basic8ViewForm from "./pages/Basic8/Basic8ViewForm";

//basic9
import Basic9StudentsList from "./pages/Basic9/Basic9StudentsList";
import Basic9UpdateForm from "./pages/Basic9/Basic9UpdateForm";
import Basic9ViewForm from "./pages/Basic9/Basic9ViewForm";
import { AdminProvider } from "./context/AdminContext";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import PropTypes from "prop-types";

function Layout({ children }) {
  const location = useLocation();
  const hideNavbarAndSidebar =
    location.pathname === "/" || location.pathname === "/register";

  return (
    <div className="flex h-screen">
      {!hideNavbarAndSidebar && <Sidebar />}
      <div className="flex flex-col flex-1">
        {!hideNavbarAndSidebar && <Navbar />}
        <div className="overflow-y-auto h-full">{children}</div>
      </div>
    </div>
  );
}

function App() {
  return (
    <AdminProvider>
      <Router>
        <ToastContainer />
        <Layout>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/Creche" element={<Creche />} />
            <Route path="/Primary" element={<Primary />} />
            <Route path="/Jhs" element={<Jhs />} />
            <Route path="/ClassList" element={<ClassList />} />
            <Route path="/Calendar" element={<Calendar />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/TimeTable" element={<TimeTable />} />
            <Route path="/Teachers" element={<Teachers />} />
            <Route path="/ExamResults" element={<ExamResults />} />
            <Route path="/Attendance" element={<Attendance />} />

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

            {/* Kg1 routes */}
            <Route path="/kg1StudentsList" element={<Kg1StudentsList />} />
            <Route path="/kg1/view/:customID" element={<Kg1ViewForm />} />
            <Route path="/kg1/edit/:customID" element={<Kg1UpdateForm />} />

            {/* Kg2 routes */}
            <Route path="/kg2StudentsList" element={<Kg2StudentsList />} />
            <Route path="/kg2/view/:customID" element={<Kg2ViewForm />} />
            <Route path="/kg2/edit/:customID" element={<Kg2UpdateForm />} />

            {/* basic1 routes */}
            <Route
              path="/basic1StudentsList"
              element={<Basic1StudentsList />}
            />
            <Route path="/basic1/view/:customID" element={<Basic1ViewForm />} />
            <Route
              path="/basic1/edit/:customID"
              element={<Basic1UpdateForm />}
            />

            {/* basic2 routes */}
            <Route
              path="/basic2StudentsList"
              element={<Basic2StudentsList />}
            />
            <Route path="/basic2/view/:customID" element={<Basic2ViewForm />} />
            <Route
              path="/basic2/edit/:customID"
              element={<Basic2UpdateForm />}
            />

            {/* basic3 routes */}
            <Route
              path="/basic3StudentsList"
              element={<Basic3StudentsList />}
            />
            <Route path="/basic3/view/:customID" element={<Basic3ViewForm />} />
            <Route
              path="/basic3/edit/:customID"
              element={<Basic3UpdateForm />}
            />

            {/* basic4 routes */}
            <Route
              path="/basic4StudentsList"
              element={<Basic4StudentsList />}
            />
            <Route path="/basic4/view/:customID" element={<Basic4ViewForm />} />
            <Route
              path="/basic4/edit/:customID"
              element={<Basic4UpdateForm />}
            />

            {/* basic5 routes */}
            <Route
              path="/basic5StudentsList"
              element={<Basic5StudentsList />}
            />
            <Route path="/basic5/view/:customID" element={<Basic5ViewForm />} />
            <Route
              path="/basic5/edit/:customID"
              element={<Basic5UpdateForm />}
            />

            {/* basic6 routes */}
            <Route
              path="/basic6StudentsList"
              element={<Basic6StudentsList />}
            />
            <Route path="/basic6/view/:customID" element={<Basic6ViewForm />} />
            <Route
              path="/basic6/edit/:customID"
              element={<Basic6UpdateForm />}
            />

            {/* basic7 routes */}
            <Route
              path="/basic7StudentsList"
              element={<Basic7StudentsList />}
            />
            <Route path="/basic7/view/:customID" element={<Basic7ViewForm />} />
            <Route
              path="/basic7/edit/:customID"
              element={<Basic7UpdateForm />}
            />

            {/* basic8 routes */}
            <Route
              path="/basic8StudentsList"
              element={<Basic8StudentsList />}
            />
            <Route path="/basic8/view/:customID" element={<Basic8ViewForm />} />
            <Route
              path="/basic8/edit/:customID"
              element={<Basic8UpdateForm />}
            />

            {/* basic9 routes */}
            <Route
              path="/basic9StudentsList"
              element={<Basic9StudentsList />}
            />
            <Route path="/basic9/view/:customID" element={<Basic9ViewForm />} />
            <Route
              path="/basic9/edit/:customID"
              element={<Basic9UpdateForm />}
            />
          </Routes>
        </Layout>
      </Router>
    </AdminProvider>
  );
}
Layout.propTypes = {
  children: PropTypes.string.isRequired,
};

export default App;
