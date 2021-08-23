import AOS from "aos";

import Resume from "./components/resume";

import "./App.css";

function App() {
  AOS.init({
    once: true,
  });

  return <Resume />;
}

export default App;
