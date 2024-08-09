import "./styles.css";
import { CustomerGluComponent } from "@customerglu/react-web-sdk";

export default function App() {
  return (
    <div className="App">
      <div
        id="embedId"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <CustomerGluComponent
          gluToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJnbHV0ZXN0LTUxNGI3YzBmLTliYWEtNDJiOC05YTM5LTIyOThlMjU0ZTYxNiIsImdsdUlkIjoiOWYyNDczNDctMmM1OS00MGQ4LTlmMzUtOTA1NzNmYzA0N2NkIiwiY2xpZW50IjoiMGE1YTU0M2MtZDkyOS00YmYzLWI3ZjMtZWFhYzQ2N2UxYjk4IiwiZGV2aWNlSWQiOiJnbHV0ZXN0LTUxNGI3YzBmLTliYWEtNDJiOC05YTM5LTIyOThlMjU0ZTYxNl9kZWZhdWx0IiwiZGV2aWNlVHlwZSI6ImRlZmF1bHQiLCJpc0xvZ2dlZEluIjp0cnVlLCJpYXQiOjE3MjMxOTg0MjksImV4cCI6MTc1NDczNDQyOX0.PctZs7Wxd_m0nBcG5fDcZvNGAE3T-7nhtWjXtN9JD8U"
          userId="glutest-514b7c0f-9baa-42b8-9a39-2298e254e616"
        >
          <div></div>
        </CustomerGluComponent>
      </div>
    </div>
  );
}
