import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Component/Sidebar";
import Dashboard from "./Component/Dashboard";
import Inbox from "./Sales/Inbox";
import Opportunities from "./Sales/Opportunities";
import General from "./Settings/General";
import Reports from "./Sales/Reports";
import Contacts from "./Sales/Contacts";
import Leads from "./Sales/Leads";
import TeamManagement from "./Settings/TeamManagement";
import Roles from "./Settings/Roles";
import Pipelines from "./Settings/Pipelines";
import TemplateManagement from "./Settings/TemplateManagement";
import Plan from "./Billing/Plan";
import Usage from "./Billing/Usage";
import TopBar from "./Component/TopBar";

import LeadDetails from "./Leads/LeadDetails";
const App = () => {
  return (
    <Router>
        <Sidebar />
        <TopBar/>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/Opportunities" element={<Opportunities />} />
            <Route path="/Leads" element={<Leads />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/Reports" element={<Reports />} />
            <Route path="/General" element={<General />} />
            <Route path="/TeamManagement" element={<TeamManagement />} />
            <Route path="/Roles" element={<Roles />} />
            <Route path="/Pipelines" element={<Pipelines />} />
            <Route path="/TemplateManagement" element={<TemplateManagement />} />
            <Route path="/Plan" element={<Plan />} />
            <Route path="/Usage" element={<Usage />} />
            <Route path="/lead/:id" element={<LeadDetails />} />

           
          </Routes>
    </Router>
  );
};

export default App;
