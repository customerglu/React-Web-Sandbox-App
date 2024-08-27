// import {CustomerGluComponent} from "@customerglu/react-web-sdk";
import "./styles.css";
// import { CustomerGluComponent } from "@customerglu/react-web-sdk";

import CustomerGluComponent from "./component/CustomerGluComponent";
import { Route, Routes } from "react-router-dom";
import Cgtest from "./component/Cgtest";
import Error from "./component/Error";

function Main() {
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
        gluToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJnbHV0ZXN0LTI1OCIsImdsdUlkIjoiNmUwZTUwZDItMzQ1Mi00YTE1LTljMTMtM2YzZTJmZDA2NGQ3IiwiY2xpZW50IjoiN2IxOTEwYTQtNzMxYS00MmY2LTkyODQtMmU2NGRhNGM5MTRkIiwiZGV2aWNlSWQiOiJnbHV0ZXN0LTI1OF9kZWZhdWx0IiwiZGV2aWNlVHlwZSI6ImRlZmF1bHQiLCJpc0xvZ2dlZEluIjp0cnVlLCJpYXQiOjE3MjQ3NDEwOTksImV4cCI6MTc1NjI3NzA5OX0.q4CnB-foMnkVsQQgm7ijK8YcxskDLENDNTkwtgrZztQ"
        userId="glutest-258"
        region="us"
      >
        <div></div>
      </CustomerGluComponent>
    </div>
  </div>;
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
