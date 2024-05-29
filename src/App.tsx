import { ConfigProvider, Layout, theme } from "antd";
import MainRouter from "./router/mainRouter";
import { useState } from "react";
import Hader from "./components/Header/Hader";
import { Content } from "antd/es/layout/layout";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const { darkAlgorithm, compactAlgorithm } = theme;
  return (
    <ConfigProvider
      theme={{ algorithm: darkMode ? darkAlgorithm : compactAlgorithm }}
    >
      <div className={darkMode ? "dark-mode App" : "Light-mode App "}>
        <Hader DarkMode={darkMode} setDarkMode={setDarkMode} />
        <MainRouter />
      </div>
    </ConfigProvider>
  );
}

export default App;
