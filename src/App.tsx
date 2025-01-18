import { ConfigProvider, Layout, theme } from "antd";
import MainRouter from "./router/mainRouter";
import { useEffect, useState } from "react";
import Hader from "./components/Header/Hader";



function App() {
  useEffect(() => {

  }, []);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const { darkAlgorithm, compactAlgorithm } = theme;
  return (
    <ConfigProvider
      theme={{ algorithm: darkMode ? darkAlgorithm : compactAlgorithm }}
    >
      <div className="app ">
        {/* <Hader DarkMode={darkMode} setDarkMode={setDarkMode} /> */}
        <MainRouter />
      </div>
    </ConfigProvider>
  );
}

export default App;
