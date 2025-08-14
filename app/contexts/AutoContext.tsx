import React, { createContext, useContext, useState } from "react";

interface User {
  email: string;
  name: string;
  picture: string;
  sub: string;
  mainCharacterName: string | null;
}

interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  saveMainCharacter: (characterName: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  
  const saveMainCharacter = (characterName: string) => {
    if (user) {
      setUser({
        ...user,
        mainCharacterName: characterName,
      });
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, saveMainCharacter }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
