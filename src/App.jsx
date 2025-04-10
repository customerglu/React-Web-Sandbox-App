// import {CustomerGluComponent} from "@customerglu/react-web-sdk";
import "./styles.css";
 import { CustomerGluComponent } from "@customerglu/react-web-sdk";
 import { AppLauncher } from '@capacitor/app-launcher';
// import CustomerGluComponent from "./component/CustomerGluComponent";
import { Route, Routes } from "react-router-dom";
import Cgtest from "./component/Cgtest";
import Error from "./component/Error";
import React, { useEffect } from 'react';
import FloatingButton from './component/FloatingButton';
import { EventEmitter } from "events";
import { useNavigate } from "react-router-dom";


function Main() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <FloatingButton />
      <button
        onClick={() => navigate("/test")}
        style={{
          padding: "10px 20px",
          margin: "20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Go to Test Page
      </button>
      <div
        id="embedIdv4"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
              <CustomerGluComponent
       gluToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJnbHV0ZXN0LXYwMjU4IiwiZ2x1SWQiOiIxYmE3MTZhMS1kN2RlLTRlZTctYTc3MC1jOTBlY2M0ZTRhZjEiLCJjbGllbnQiOiI3YjE5MTBhNC03MzFhLTQyZjYtOTI4NC0yZTY0ZGE0YzkxNGQiLCJkZXZpY2VJZCI6ImdsdXRlc3QtdjAyNThfZGVmYXVsdCIsImRldmljZVR5cGUiOiJkZWZhdWx0IiwiaXNMb2dnZWRJbiI6dHJ1ZSwidmVyc2lvbiI6InYyIiwidGltZVpvbmUiOiJBbWVyaWNhL0xvc19BbmdlbGVzIiwiaXNSZXdhcmRJbml0RW5hYmxlZCI6dHJ1ZSwiaWF0IjoxNzQ0MjkwNzM0LCJleHAiOjE3NzU4MjY3MzR9.HuMgdqkwq7asAPUTzX4HiaLf8ytiTDNIeppjd-maa8I"
          userId="glutest-v0258"
          region="us"
        >
          <div></div>
        </CustomerGluComponent>
      </div>
    </div>
  );
}


// Attach the event listener using the stored reference



export default function App() {
  useEffect(() => {
   
    const messageHandler = (event) => {
      

      try {
        const eventData = typeof event.data === 'string' 
          ? JSON.parse(event.data) 
          : event.data;


        if (eventData.eventName) {
          switch (eventData.eventName) {
            case "ANALYTICS":
              console.log("Handling ANALYTICS event:", eventData);
              console.log(JSON.stringify(eventData));
              // Your analytics handling code
              break;
           
          
          }
        }
      } catch (error) {
        console.error("Error processing message:", error);
      }
    };

    // Log when listener is attached
    window.addEventListener("message", messageHandler, false);



    return () => {
      console.log("Removing message listener...");
      window.removeEventListener("message", messageHandler, false);
    };
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/kw/en/list/men/context/fragrances-buy-1-get-1-free-m" element={<Cgtest />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <FloatingButton />
    </>
  );
}
