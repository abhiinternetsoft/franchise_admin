import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Fetch user data from localStorage or API
  useEffect(() => {
    const storedUser = {
      token: localStorage.getItem("token"),
      role: localStorage.getItem("userRole"),
      email: localStorage.getItem("userEmail"),
    };
    setUser(storedUser);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
