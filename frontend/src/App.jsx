import {

  BrowserRouter,
  Routes,
  Route

} from "react-router-dom";

import Login from "./pages/Login";

import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";

import CreateRequest from "./pages/CreateRequest";

import ServicesPage from "./pages/ServicesPage";

import ProtectedRoute from "./components/ProtectedRoute";

import AIChatbot from "./components/AIChatbot";

import {

  ToastContainer

} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {

  return (

    <BrowserRouter>

      {/* Toast Notifications */}
      <ToastContainer

        position="top-right"

        autoClose={3000}

      />

      {/* AI CHATBOT */}
      <AIChatbot />

      {/* Routes */}
      <Routes>

        {/* Public Routes */}
        <Route

          path="/"

          element={<Login />}

        />

        <Route

          path="/register"

          element={<Register />}

        />

        {/* Dashboard */}
        <Route

          path="/dashboard"

          element={

            <ProtectedRoute>

              <Dashboard />

            </ProtectedRoute>

          }

        />

        {/* Create Request */}
        <Route

          path="/create-request"

          element={

            <ProtectedRoute>

              <CreateRequest />

            </ProtectedRoute>

          }

        />

        {/* Services */}
        <Route

          path="/services/:serviceType"

          element={

            <ProtectedRoute>

              <ServicesPage />

            </ProtectedRoute>

          }

        />

      </Routes>

    </BrowserRouter>

  )

}

export default App;