import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Main = () => {
  const { message, isSuccess } = useSelector((state: any) => state.message);
  useEffect(() => {

    //  if(!message ){
    //  toast.dismiss()
    //  }
    //  else if (isSuccess && message) {
    //   toast.success(message);
    // } else toast.error(message);
  },[]);

  return (
    <div className="main" >
      <Outlet />
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Main;
