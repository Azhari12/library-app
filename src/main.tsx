import ReactDOM from "react-dom/client";
<<<<<<< HEAD
<<<<<<< HEAD
import App from "@/routes";
=======
import App from "./pages/MyBook";
>>>>>>> a3aefaf (slicing: my-book-page)
=======
import App from "./pages/MyBook";
>>>>>>> a3aefaf6b19cf111e4c5bc405d76bc33dce038c9
import "@/styles/index.css";

import { Provider } from "react-redux";
import store from "./utils/redux/store/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
