import { Routes, Route } from "react-router-dom";
import authRoutes from "./app/modules/auth/auth.routes";
import AuthLayout from "./app/modules/auth/auth.layout";

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthLayout />}>
        {authRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
