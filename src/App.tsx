import React, { useEffect } from "react";
import "./App.css";
import { Button } from "compontents/Button";
import "styles/index.scss";
const App: React.FC = () => {
  useEffect(() => {});
  const goConsole = (e: any) => {
    console.log("zhixing", e);
  };
  return (
    <div className="App">
      <Button type="primary" size="large" onClick={goConsole}>
        点击开始
      </Button>
      <Button type="default" disabled size="large" onClick={goConsole}>
        点击开始
      </Button>
      <Button type="text" onClick={goConsole}>
        点点击开始击
      </Button>
      <Button type="primary" disabled onClick={goConsole}>
        点击开始
      </Button>
      <Button type="link" onClick={goConsole}>
        点击开始
      </Button>
    </div>
  );
};

export default App;
