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
          gluToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJnbHV0ZXN0LWNkZTJkZTU3LTNiNzEtNGJhOC1hODk4LWU3NDBlZjZiYmE4YSIsImdsdUlkIjoiNDA1N2M4OTYtMTc2MC00OGM3LThkYTUtNWZlN2I0OWExZDc3IiwiY2xpZW50IjoiN2IxOTEwYTQtNzMxYS00MmY2LTkyODQtMmU2NGRhNGM5MTRkIiwiZGV2aWNlSWQiOiJnbHV0ZXN0LWNkZTJkZTU3LTNiNzEtNGJhOC1hODk4LWU3NDBlZjZiYmE4YV9kZWZhdWx0IiwiZGV2aWNlVHlwZSI6ImRlZmF1bHQiLCJpc0xvZ2dlZEluIjp0cnVlLCJpYXQiOjE3MjM2NTczNzAsImV4cCI6MTc1NTE5MzM3MH0.2lApseyR7BW1UhqxDOAX3v7DrLT38KaUyB9deVH15kU"
          userId="glutest-514b7c0f-9baa-42b8-9a39-2298e254e616"
          region="us"
        >
          <div></div>
        </CustomerGluComponent>
      </div>
    </div>
  );
}
