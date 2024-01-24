import Router from "./router/Router";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.body.classList.add("overflow-hidden")
  })
  
  return (
    <Router />
  );
}

export default App;
