import { Routes, Route } from "react-router-dom";
import authRoutes from "./app/modules/auth/auth.routes";
import AuthLayout from "./app/modules/auth/auth.layout";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          {authRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </ApolloProvider>
  );
}

export default App;
