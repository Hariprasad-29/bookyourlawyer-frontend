import "./App.css";
import ClientLandingPage from "./client/ClientLandingPage";
import Login from "./components/Login";
import Register from "./components/Register";
import LawyerLandingPage from "./lawyer/LawyerLandingPage";

function App() {
  return (
    <div className="App">
      {/* <Login />
      <Register /> */}
      <LawyerLandingPage/>
      {/* <ClientLandingPage/> */}
    </div>
  );
}

export default App;
