import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider ({ children }){
  const [entries, setEntries] = useState([]);

  return (
    <AuthContext.Provider value={{ entries, setEntries }}>
      {children}
    </AuthContext.Provider>
  );
};


export default AuthProvider;