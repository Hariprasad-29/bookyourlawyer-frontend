import "./App.css";
import ClientLandingPage from "./client/ClientLandingPage";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Register from "./components/Register";
import LawyerLandingPage from "./lawyer/LawyerLandingPage";

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>BOOK YOUR LAWYER</h1>
      </div>
      <div className="body">
        <HomePage />
        <Login />
      </div>
      {/* <LawyerLandingPage/> */}
      {/* <ClientLandingPage/> */}
    </div>
  );
}

export default App;
