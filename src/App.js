import "./App.css";
import DefaultLayout from "./Layout/DefaultLayout";
// import Dashboard from "./pages/dashboard/Dashboard";
import AddTicket from "./pages/new-ticket/AddTicket";

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        {/* <Entry /> */}
        {/* <Dashboard /> */}
        <AddTicket />
      </DefaultLayout>
    </div>
  );
}

export default App;
