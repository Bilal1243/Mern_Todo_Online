import { Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import EditPage from "./screens/EditPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit" element={<EditPage />} />
      </Routes>
    </>
  );
}

export default App;
