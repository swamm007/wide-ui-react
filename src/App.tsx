import React from "react";
import "./App.css";
import "styles/index.scss";
import TestButton from './pages/Button'
import TestAlert from './pages/Alert'
const App: React.FC = () => {
  return (
    <div className="App">
      <TestButton/>
      <TestAlert/>
    </div>
  );
};

export default App;
