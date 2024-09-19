// import {CustomerGluComponent} from "@customerglu/react-web-sdk";
import "./styles.css";
 import { CustomerGluComponent } from "@customerglu/react-web-sdk";

//import CustomerGluComponent from "./component/CustomerGluComponent";
import { Route, Routes } from "react-router-dom";
import Cgtest from "./component/Cgtest";
import Error from "./component/Error";

function Main() {
  return(
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
        gluToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJnbHV0ZXN0LVNlcDMyMjIxIiwiZ2x1SWQiOiJjYzhlZTY5Ny1lNjczLTRjNzAtYTI4NC1kMzhlOGNkNzU1N2EiLCJjbGllbnQiOiIxNzA1OGIxNS1hYzc0LTQ4NjktYjlhNC1iOTJkNjRlMWI3NzUiLCJkZXZpY2VJZCI6ImdsdXRlc3QtU2VwMzIyMjFfZGVmYXVsdCIsImRldmljZVR5cGUiOiJkZWZhdWx0IiwiaXNMb2dnZWRJbiI6dHJ1ZSwiaWF0IjoxNzI2NzMzMDc5LCJleHAiOjE3NTgyNjkwNzl9.F_a2yW9V6F3dD-4hBdG5kbNgp6oPdT1A3lPlq0mov3M"
        userId="glutest-Sep32221"
        region="us"
      >
        <div></div>
      </CustomerGluComponent>
    </div>
  </div>
  );
}

export default function App() {
  return (
    // <div className="App">
    //   <div
    //     id="embedId"
    //     style={{
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "center",
    //       cursor: "pointer",
    //     }}
    //   >
    //     <CustomerGluComponent
    //       gluToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJnbHV0ZXN0LTI1OCIsImdsdUlkIjoiNmUwZTUwZDItMzQ1Mi00YTE1LTljMTMtM2YzZTJmZDA2NGQ3IiwiY2xpZW50IjoiN2IxOTEwYTQtNzMxYS00MmY2LTkyODQtMmU2NGRhNGM5MTRkIiwiZGV2aWNlSWQiOiJnbHV0ZXN0LTI1OF9kZWZhdWx0IiwiZGV2aWNlVHlwZSI6ImRlZmF1bHQiLCJpc0xvZ2dlZEluIjp0cnVlLCJpYXQiOjE3MjQ3NDEwOTksImV4cCI6MTc1NjI3NzA5OX0.q4CnB-foMnkVsQQgm7ijK8YcxskDLENDNTkwtgrZztQ"
    //       userId="glutest-258"
    //       region="us"
    //     >
    //       <div></div>
    //     </CustomerGluComponent>
    //   </div>
    // </div>
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Cgtest />} />
        <Route path="*" element={<Error /> } />
      </Routes>
    </>
  );
}
