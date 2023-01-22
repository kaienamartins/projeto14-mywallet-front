import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider ({ children }){
  const [entries, setEntries] = useState([]);
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");

  return (
    <AuthContext.Provider value={{ entries, setEntries, token, setToken, username, setUsername}}>
      {children}
    </AuthContext.Provider>
  );
};


export default AuthProvider;