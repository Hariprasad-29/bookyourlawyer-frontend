import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import LawyerLandingPage from "./lawyer/LawyerLandingPage";

function App() {
  return (
    <div className="App">
      <Login />
      <Register />
      {/* <LawyerLandingPage/> */}
    </div>
  );
}

export default App;
