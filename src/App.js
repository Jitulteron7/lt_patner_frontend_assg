import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login"
import Register from "./pages/register"
import PageNotFound from "./pages/pageNotFound"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export const Toastify = (type, msg) => {

  switch (type) {
    case "success":
      toast.success(msg);
      break;
    case "warning":
      toast.warn(msg);
      break;
    case "error":
      toast.error(msg);
      break;
    case "info":
      toast.info(msg);
      break;
  }

}
function App() {

  toast.configure({ hideProgressBar: true })

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
