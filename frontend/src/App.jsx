import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ResourcesPage from "./components/login/ResourcesPage";

function App() {
  const [count, setCount] = useState(0);

  return <ResourcesPage courseId={2} />;
}

export default App;
