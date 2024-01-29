import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import TaskFormPage from "./pages/TaskFormPage";
import TasksPage from "./pages/TasksPage";
import Footer from "./components/Footer";

import ProtectedRoute from "./ProtectedRoute";
import { TaskProvider } from "./context/TasksContext";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <Navbar />
          <main className="container mx-auto px-10 md:px-16 fixed top-0 left-0 right-0 bottom-0 overflow-auto my-16 z-10">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/about" element={<AboutPage />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/tasks" element={<TasksPage />} />
                <Route path="/add-task" element={<TaskFormPage />} />
                <Route path="/tasks/:id" element={<TaskFormPage />} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
