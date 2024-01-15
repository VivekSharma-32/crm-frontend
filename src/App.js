import "./App.css";
import DefaultLayout from "./Layout/DefaultLayout";
// import Dashboard from "./pages/dashboard/Dashboard";
import AddTicket from "./pages/new-ticket/AddTicket";
import TicketLists from "./pages/ticket-list/TicketLists";
import Ticket from "./pages/ticket/Ticket";

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        {/* <Entry /> */}
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        {/* <TicketLists /> */}
        <Ticket />
      </DefaultLayout>
    </div>
  );
}

export default App;
