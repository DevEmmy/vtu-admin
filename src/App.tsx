
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./components/home/dashboard";
import  SiteAdmin  from "./components/home/site-admin/siteAdmin"
import Settings from "./components/home/settings/settings";
import Transactions from "./components/Transaction/page";
import Notifications from "./components/notifications/page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/site-admin" element={<SiteAdmin />}/>
        <Route path="/settings" element={<Settings />} />
        <Route path="/transactions" element={<Transactions />}/>
        <Route path="/notifications" element={<Notifications />}/>
      </Routes>
    </Router>
  );
}

export default App;
