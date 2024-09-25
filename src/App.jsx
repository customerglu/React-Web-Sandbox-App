// import {CustomerGluComponent} from "@customerglu/react-web-sdk";
import "./styles.css";
 //import { CustomerGluComponent } from "@customerglu/react-web-sdk";
 import { AppLauncher } from '@capacitor/app-launcher';

import CustomerGluComponent from "./component/CustomerGluComponent";
import { Route, Routes } from "react-router-dom";
import Cgtest from "./component/Cgtest";
import Error from "./component/Error";
import React, { useEffect } from 'react';

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
          gluToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJnbHV0ZXN0LTYwOCIsImdsdUlkIjoiNmM1NjVmY2MtYmYwNS00ZWE4LWI4MTQtNTY2MGYxZGJkMThlIiwiY2xpZW50IjoiYjVmODY5OTctYmU0ZS00ZTBiLTk2ZGMtYTcxNzJiMmUxMDI1IiwiZGV2aWNlSWQiOiJnbHV0ZXN0LTYwOF9kZWZhdWx0IiwiZGV2aWNlVHlwZSI6ImRlZmF1bHQiLCJpc0xvZ2dlZEluIjp0cnVlLCJpYXQiOjE3MjcxOTE0OTQsImV4cCI6MTc1ODcyNzQ5NH0.wjuO6IvYHveUwZcGki8XU5yF8ndmH37zG2GGwMayWAo"
          userId="glutest-608"
          region="in"
        >
        <div></div>
      </CustomerGluComponent>
    </div>

  </div>
  );
}


// Attach the event listener using the stored reference



export default function App() {

  const messageHandler = (event) => {
    try {
    //  console.log(event);
      // Parse the received message
      if (event.origin !== "https://constellation-us-staging.customerglu.com") {
        return;
      }
      let eventData;
  
      // Check if event.data is a string or an object
      if (typeof event.data === 'string') {
        // Try to parse the string as JSON
     
        eventData = JSON.parse(event.data);
      } else{
        return
      }
     // const eventData = JSON.parse(event.data);
  
      // Process the event data
      if (eventData.eventName) {
        // Handle different event types
        switch (eventData.eventName) {
          case "CLOSE":
            // Handle your close logic
            console.log( "eventData");

            console.log( eventData);
            break;
            case "OPEN_DEEPLINK":
             // Handle your Navigation logic
              console.log( "eventData");
            console.log( eventData);
            break;
            
      }
  
      }
    } catch (error) {
      console.error("Error parsing event data:", error);
    }
  };


  useEffect(() => {
    // Attach the event listener
    window.addEventListener("message", messageHandler, false);

    // Cleanup function to deregister the event listener when the component is unmounted
    return () => {
      window.removeEventListener("message", messageHandler, false);
    };
  }, []); 


 
  

  return (

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Cgtest />} />
        <Route path="*" element={<Error /> } />
      </Routes>
    
  );
}
