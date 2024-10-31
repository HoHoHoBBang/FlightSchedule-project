import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AirlineContextProvider } from "./context/airlineContext.tsx";

createRoot(document.getElementById("root")!).render(
  <AirlineContextProvider>
    <App />
  </AirlineContextProvider>,
);
