import React, { useState, createContext, ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
}
interface UserType {
  email: string;
  password: string;
  loggedIn: boolean;
  posts?: { sender: UserType; text?: string; media?: Object }[];
}
const initialUser: UserType = {
  email: "",
  password: "",
  loggedIn: false,
};
const USER: UserType | null =
  typeof window !== "undefined" && JSON.parse(localStorage.getItem("USER")!);

export const UserContext = createContext<UserType | null>(null);
export const SetUserContext = createContext<React.Dispatch<
  React.SetStateAction<UserType>
> | null>(null);

const Store: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<UserType>(USER || initialUser);

  useEffect(() => {
    localStorage.setItem("USER", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={user}>
      <SetUserContext.Provider value={setUser}>
        {children}
      </SetUserContext.Provider>
    </UserContext.Provider>
  );
};

export default Store;
