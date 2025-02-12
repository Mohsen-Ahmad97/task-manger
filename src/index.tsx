
import ReactDOM from "react-dom/client";
// import "./index.scss"
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./Local/I18N";
import store from "./Redux/Store";
import "./index.scss"


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>

    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
