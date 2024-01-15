import "./App.css";
import { Routes, Route } from "react-router-dom";
import Entry from "./pages/entry/Entry.page";
// import DefaultLayout from "./Layout/DefaultLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import AddTicket from "./pages/new-ticket/AddTicket";
import TicketLists from "./pages/ticket-list/TicketLists";
import Ticket from "./pages/ticket/Ticket";
import PrivateRoute from "./components/private-route/PrivateRoute";
import PageNotFound from "./pages/error-page/PageNotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add-ticket" element={<AddTicket />} />
          <Route path="tickets" element={<TicketLists />} />
          <Route path="ticket/:tId" element={<Ticket />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
