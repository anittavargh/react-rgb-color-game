import React from "react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import ColorGame from "./components/ColorGame";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <LoginButton></LoginButton>
      <LogoutButton></LogoutButton>
      <ColorGame></ColorGame>
    </div>
  );
}

export default App;
