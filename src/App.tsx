
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./components/home/dashboard";
import  SiteAdmin  from "./components/home/site-admin/page";
import Settings from "./components/home/settings/page";
import Transactions from "./components/Transaction/page";
import Notifications from "./components/notifications/page";
import UserList from "./components/userList/page";
import UserDetails from "./components/userList/user/page";
import AdminBankAccount from "./components/bank-account/page";
import Login from "@/components/onboarding/signIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/site-admin" element={<SiteAdmin />}/>
        <Route path="/settings" element={<Settings />} />
        <Route path="/transactions" element={<Transactions />}/>
        <Route path="/notifications" element={<Notifications />}/>
        <Route path="/bank-account" element={<AdminBankAccount />} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/user-list/:userId" element={<UserDetails />} />
        <Route path="/sign-in" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
