import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import PartnersList from "../pages/PartnersList";
import PartnerDetails from "../pages/PartnerDetails";
import CreatePartner from "../pages/CreatePartner";
import Login from "../pages/Login";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/partners" element={<PartnersList />} />
        <Route path="/partners/details" element={<PartnerDetails />} />
        <Route path="/partners/create" element={<CreatePartner />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;