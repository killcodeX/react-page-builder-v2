import React, { useState } from "react";
import { ConfigProvider, theme } from "antd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Header from "./Modules/Header";
import "./App.css";
import Router from "./Routes";

function App() {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <DndProvider backend={HTML5Backend}>
      <ConfigProvider
        theme={{
          algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        }}
      >
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        <Router />
      </ConfigProvider>
    </DndProvider>
  );
}

export default App;
