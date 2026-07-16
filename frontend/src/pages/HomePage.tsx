import { useEffect, useState } from "react";

import { getHealthStatus } from "../services/api";

export default function HomePage() {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    async function loadStatus() {
      try {
        const data = await getHealthStatus();

        setStatus(data.status);
      } catch {
        setStatus("offline");
      }
    }

    loadStatus();
  }, []);

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial"
      }}
    >
      <h1>
        Minimal AI Meeting Assistant MVP
      </h1>

      <p>
        React frontend successfully connected
        to FastAPI.
      </p>

      <h2>
        Backend Status: {status}
      </h2>
    </div>
  );
}
