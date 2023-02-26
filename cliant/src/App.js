import QRScanner from "./componnet/pages/scanner/QrScanner";
import Summery from "./componnet/pages/home/Summery";
import Registration from "./componnet/pages/account/Registration";
import Login from "./componnet/pages/Login/Login";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom/umd/react-router-dom.development";
import ProtectedRout from "./componnet/ProtrctedRout";
import Dashboard from "./componnet/pages/admin/Dashboard";
import ProtectedUserRoute from "./componnet/ProtectedUserRoute";
import EditUser from "./componnet/pages/admin/EditUser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            {" "}
            <Route path="/account" element={<Registration />}>
              {" "}
            </Route>
            <Route path="/login" element={<Login />}>
              {" "}
            </Route>
            <Route element={<ProtectedUserRoute />}>
              <Route path="/" element={<Summery />}>
                {" "}
              </Route>
              <Route path="/scanner" element={<QRScanner />}>
                {" "}
              </Route>
            </Route>
          </Route>
          <Route element={<ProtectedRout />}>
            <Route path="/dashboard" element={<Dashboard />}>
              {" "}
            </Route>
            <Route path="/edit" element={<EditUser />}>
              {" "}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
