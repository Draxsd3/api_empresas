import React from "react";
import { createRoot } from "react-dom/client";
import { Sidebar } from "./components/Sidebar.js";
import { ConsultPage } from "./pages/ConsultPage.jsx";
import { CreatePage } from "./pages/CreatePage.jsx";
import { ListPage } from "./pages/ListPage.jsx";

window.__API_BASE__ = "http://localhost:3000";

function App() {
  const [route, setRoute] = React.useState("consult");

  React.useEffect(() => {
    const onKey = (e) => {
      if (e.target.tagName === "INPUT") return;
      if (e.key === "1") setRoute("consult");
      if (e.key === "2") setRoute("create");
      if (e.key === "3") setRoute("list");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="app">
      <Sidebar current={route} onNavigate={setRoute} />
      {route === "consult" && <ConsultPage />}
      {route === "create" && <CreatePage />}
      {route === "list" && <ListPage />}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);