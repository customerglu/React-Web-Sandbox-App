import { CustomerGluComponent } from "@customerglu/react-web-sdk";
import animationData from "./assets/loader.json";

export default function App() {
  return (
    <div className="App">
      <div
        id="embedId"
        style={{
          margin: "10px",
          border: "1px solid #E2E8F0",
          borderRadius: "8px",
          height: "fit-content",
          width: "380px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <CustomerGluComponent
          userId="super-completed-state-2"
          gluToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJzdXBlci1jb21wbGV0ZWQtc3RhdGUtMiIsImdsdUlkIjoiZWFlYmJkYTItOWFlYS00NjliLThlYjAtOTlmMzVlN2JjMTI1IiwiY2xpZW50IjoiZDA1MTI2OWEtMDVkNy00NzIyLTllMjUtN2UwMzE2NTViNGQwIiwiZGV2aWNlSWQiOiJzdXBlci1jb21wbGV0ZWQtc3RhdGUtMl9kZWZhdWx0IiwiZGV2aWNlVHlwZSI6ImRlZmF1bHQiLCJpc0xvZ2dlZEluIjp0cnVlLCJpYXQiOjE3MTgwNDI0MTEsImV4cCI6MTc0OTU3ODQxMX0.Pm1SQii18y83BWtTmXtLFPPiipSFV6Qv-mR6UBg8Ers"
        />
      </div>
    </div>
  );
}
