import Router from "./router/Router";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.body.classList.add("bg-gradient-to-r",
      "from-gray-400",
      "via-gray-600",
      "to-blue-800",
      "h-screen")
  })

  return (
    <Router />
  );
}

export default App;
