import Home from "./pages/home/Home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import styles from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import ProtectedRoute from "./components/Auth/protectedRoute/ProtectedRoute";

function App() {
  return (
    <div className={`${styles.App}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<ProtectedRoute element={Main} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
