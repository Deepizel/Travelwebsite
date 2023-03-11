import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router,Navigate, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Navigate>
          <Route path="/" exact />
        </Navigate>
      </Router>
    </>
  );
}

export default App;
