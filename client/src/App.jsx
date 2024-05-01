// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Sidebar from "./Components/Sidebar";
import Creche from "./pages/Class-Creche/Creche";
import Primary from "./pages/Class-Primary/Primary";
import Jhs from "./pages/Class-Jhs/Jhs";
import Dashboard from "./Components/Dashboard";
import Register from "./pages/LoginRegister/Register";
import Login from "./pages/LoginRegister/Login";
import Basic1Detail from "./pages/DetailPage/Basic1/Basic1Detail";
import Basic2Detail from "./pages/DetailPage/Basic2/Basic2Detail";
import Basic3Detail from "./pages/DetailPage/Basic3/Basic3Detail";
import Basic4Detail from "./pages/DetailPage/Basic4/Basic4Detail";
import Basic5Detail from "./pages/DetailPage/Basic5/Basic5Detail";
import Basic6Detail from "./pages/DetailPage/Basic6/Basic6Detail";
import Basic7Detail from "./pages/DetailPage/Basic7/Basic7Detail";
import Basic8Detail from "./pages/DetailPage/Basic8/Basic8Detail";
import Basic9Detail from "./pages/DetailPage/Basic9/Basic9Detail";
import KG1Detail from "./pages/DetailPage/Kg1/Kg1Detail";
import KG2Detail from "./pages/DetailPage/Kg2/Kg2Detail";
import Nursery1Detail from "./pages/DetailPage/Nursery1/Nursery1Detail";
import Nursery2Detail from "./pages/DetailPage/Nursery2/Nursery2Detail";

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        {/* <Sidebar /> */}
        <div className="flex flex-col flex-1">
          <div className="overflow-y-auto h-full">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/Creche" element={<Creche />} />
              <Route path="/Primary" element={<Primary />} />
              <Route path="/Jhs" element={<Jhs />} />

              {/* <Route path="/Login" element={<AdminLogin />} /> */}
              <Route path="/Basic1Detail" element={<Basic1Detail />} />
              <Route path="/Basic2Detail" element={<Basic2Detail />} />
              <Route path="/Basic3Detail" element={<Basic3Detail />} />
              <Route path="/Basic4Detail" element={<Basic4Detail />} />
              <Route path="/Basic5Detail" element={<Basic5Detail />} />
              <Route path="/Basic6Detail" element={<Basic6Detail />} />
              <Route path="/Basic7Detail" element={<Basic7Detail />} />
              <Route path="/Basic8Detail" element={<Basic8Detail />} />
              <Route path="/Basic9Detail" element={<Basic9Detail />} />
              <Route path="/Kg1Detail" element={<KG1Detail />} />
              <Route path="/Kg2Detail" element={<KG2Detail />} />
              <Route path="/Nursery1Detail" element={<Nursery1Detail />} />
              <Route path="/Nursery2Detail" element={<Nursery2Detail />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
