import { useState, useEffect, createContext, ReactNode } from "react";
import axios from "../configs/axios";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utils/local-storage";

interface User {
  id: string;
  username: string;
}

interface AuthContextType {
  login: (credential: LoginCredentials) => Promise<void>;
  authUser: User | null;
  register: (registerInputObj: RegisterInput) => Promise<void>;
  logout: () => void;
  initialLoading: boolean;
  getUser: () => Promise<void>;
}

interface LoginCredentials {
  username: string;
  password: string;
}

interface RegisterInput {
  username: string;
  password: string;
  email: string;
}

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthContextProviderProps {
  children: ReactNode;
}

export default function AuthContextProvider({
  children,
}: AuthContextProviderProps) {
  const [initialLoading, setInitialLoading] = useState(true);
  const [authUser, setAuthUser] = useState<User | null>(null);

  const getUser = async () => {
    try {
      const response = await axios.get("/auth/me");
      if (response.status !== 200) {
        throw new Error("Network response was not 200");
      }
      setAuthUser(response.data.user);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    const accessToken = getAccessToken();
    if (accessToken) {
      getUser().finally(() => {
        setInitialLoading(false);
      });
    } else {
      setInitialLoading(false);
    }
  }, []);

  const login = async (credential: LoginCredentials) => {
    try {
      const res = await axios.post("/auth/login", credential);
      addAccessToken(res.data.accessToken);
      setAuthUser(res.data.user);
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  };

  const register = async (registerInputObj: RegisterInput) => {
    try {
      const res = await axios.post("/auth/register", registerInputObj);
      addAccessToken(res.data.accessToken);
      setAuthUser(res.data.user);
    } catch (error) {
      console.error("Error registering:", error);
      throw error;
    }
  };

  const logout = () => {
    removeAccessToken();
    setAuthUser(null);
    window.location.replace("/welcome");
  };

  const authContextValue: AuthContextType = {
    login,
    authUser,
    register,
    logout,
    initialLoading,
    getUser,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
