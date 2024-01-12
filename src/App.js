import "./App.css";
import DefaultLayout from "./Layout/DefaultLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Entry from "./pages/entry/Entry.page";

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
      {/* <Entry /> */}
    </div>
  );
}

export default App;
