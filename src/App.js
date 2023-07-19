import React from "react";
import Navigation from "./navigation/Navigation";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: { colorPrimary: "#6e07f3" },
      }}
    >
      <Navigation />
    </ConfigProvider>
  );
}

export default App;
