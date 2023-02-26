import { useState } from "react";
import "./App.css";
import HomePage from "./components/home-page/Homepage";
import ScanOptions from "./components/home-page/ScanOptions";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Account from "./components/account/Account";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Account/>
    </div>
  );
}

export default App;
