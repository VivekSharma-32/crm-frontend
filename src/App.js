import "./App.css";
import DefaultLayout from "./Layout/DefaultLayout";
// import Dashboard from "./pages/dashboard/Dashboard";
import AddTicket from "./pages/new-ticket/AddTicket";
import TicketLists from "./pages/ticket-list/TicketLists";

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        {/* <Entry /> */}
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        <TicketLists />
      </DefaultLayout>
    </div>
  );
}

export default App;
