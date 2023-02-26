
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import HomePage from "./components/home-page/Homepage";
import Login from './components/login/Login'
import Signup from './components/signup/Signup'


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
