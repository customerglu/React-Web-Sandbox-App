import React from 'react'
import { CustomerGluComponent } from "@customerglu/react-web-sdk";

const Cgtest = () => {
  return (
    <div
    id="embedIdv3"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    }}
  >
          <CustomerGluComponent
      gluToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJnbHV0ZXN0LTEyMzM0MmV3cSIsImdsdUlkIjoiNjVkMzhiZTQtNmQxNC00ZTRiLTkzMGUtY2Q0N2ZiZDI4NmIzIiwiY2xpZW50IjoiNGRiZTkxMTctNjkwMi00NTFhLWE2NDEtZGM1ZjFlZWE3YjE4IiwiZGV2aWNlSWQiOiJnbHV0ZXN0LTEyMzM0MmV3cV9kZWZhdWx0IiwiZGV2aWNlVHlwZSI6ImRlZmF1bHQiLCJpc0xvZ2dlZEluIjp0cnVlLCJpYXQiOjE3NDE2NzE1MzYsImV4cCI6MTc3MzIwNzUzNn0.DcDMxobcqiXw9V9ahdYwfJ8EKUf348KoY28Tl6je5y8"
      userId="glutest-123342ewq"
      region="me"
    >
      <div></div>
    </CustomerGluComponent>
  </div>
    )
}

export default Cgtest