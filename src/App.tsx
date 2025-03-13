import { Routes, Route } from "react-router-dom";
import AuthGuard from "./app/guards/auth-guard";
import { AuthLayout, AuthRoutes } from "./app/modules/auth";
import { HomeLayout, HomeRoutes } from "./app/modules/home";
import { BoardLayout, BoardRoutes } from "./app/modules/board";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          {AuthRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>

        <Route element={<AuthGuard />}>
          <Route path="/" element={<HomeLayout />}>
            {HomeRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Route>

          <Route path="/board" element={<BoardLayout />}>
            {BoardRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Route>
        </Route>
      </Routes>
    </ApolloProvider>
  );
}

export default App;
