import { ConfigProvider, theme } from "antd";
import MainRouter from "./router/mainRouter";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";




function App() {
  const { message, isSuccess }: any = useSelector((state: any) => state.message);
  useEffect(() => {
 if (!message) {
      toast.dismiss();
    } else if (isSuccess && message) {
      toast.success(message);
    } else {
      toast.error(message);
    }
  }, []);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const { darkAlgorithm, compactAlgorithm } = theme;
  return (
 
      <div className="app ">

        <MainRouter />
        <ToastContainer />
      </div>

 
  );
}

export default App;
