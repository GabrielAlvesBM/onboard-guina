import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { useAuthStore } from "@/app/stores/auth.store";
import { useUserStore } from "@/app/stores/user.store";
import { jwtDecode } from "jwt-decode";

const httpLink = new HttpLink({ uri: import.meta.env.VITE_SERVER_URL });

const isTokenExpired = (token: string | null): boolean => {
  try {
    if (!token) {
      return false;
    }

    const decoded: { exp: number } = jwtDecode(token);

    if (!decoded.exp) {
      return true;
    }

    return decoded.exp * 1000 < Date.now();
  } catch {
    return true;
  }
};

const logoutUser = () => {
  localStorage.removeItem("auth-store");
  localStorage.removeItem("user-store");
  useAuthStore.getState().clearAuth();
  useUserStore.getState().clearUser();

  window.location.href = "/auth/login";
};

const authLink = setContext((_, { headers }) => {
  const token = useAuthStore.getState().token;

  return {
    headers: {
      ...headers,
      Authorization: token,
    },
  };
});

const logoutMiddleware = onError(({ networkError, graphQLErrors }) => {
  const token = useAuthStore.getState().token;

  if (graphQLErrors && isTokenExpired(token)) {
    console.warn("Token expirado. Deslogando usuário...");
    logoutUser();
  }

  if (networkError) {
    console.log(`[Network Error]: ${networkError}`);
  }
});

const client = new ApolloClient({
  link: from([authLink, logoutMiddleware, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
