import { Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import EditPage from "./screens/EditPage";
import { ToastContainer } from "react-toastify";
import LoginPage from "./screens/LoginPage";
import RegisterPage from "./screens/RegisterPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit/:id" element={<EditPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
