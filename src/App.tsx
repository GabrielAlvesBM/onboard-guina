import { Routes, Route } from "react-router-dom";
import "./App.css";
import authRoutes from "./app/modules/auth/auth.routes";

function App() {
  return (
    <Routes>
      <Route path="/auth">
        {authRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
