import Router from "./router/Router";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.body.classList.add(
      "bg-gray-500",
      "h-screen",
      "overflow-x-hidden")
  })

  return (
    <Router />
  );
}

export default App;
