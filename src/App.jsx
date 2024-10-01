// import {CustomerGluComponent} from "@customerglu/react-web-sdk";
import "./styles.css";
import CustomerGluComponent from "./component/CustomerGluComponent";
import {
    Route,
    Routes
} from "react-router-dom";
import Cgtest from "./component/Cgtest";
import Error from "./component/Error";
import {
    useEffect
} from "react";

function Main() {
  return(
  <div className="App">
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
          gluToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJnbHV0ZXN0LXMtdDcwMyIsImdsdUlkIjoiNWMxYWU1OWEtMDZhNC00ZjhlLWI4NjQtMTJlMmRlZTJjNjE5IiwiY2xpZW50IjoiN2IxOTEwYTQtNzMxYS00MmY2LTkyODQtMmU2NGRhNGM5MTRkIiwiZGV2aWNlSWQiOiJnbHV0ZXN0LXMtdDcwM19kZWZhdWx0IiwiZGV2aWNlVHlwZSI6ImRlZmF1bHQiLCJpc0xvZ2dlZEluIjp0cnVlLCJpYXQiOjE3Mjc3OTc3NjEsImV4cCI6MTc1OTMzMzc2MX0.fZ-u9n5YVJtEmudPIm-Lq-RwCglDbXDpAI8HH3RPjxg"
          userId="glutest-s-t703"
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

  const messageHandler = (event) => {
    try {
    //  console.log(event);
      // Parse the received message
      if (event.origin !== "https://constellation.customerglu.com") {
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
      console.log(event);
     // const eventData = JSON.parse(event.data);
  
      // Process the event data
      if (eventData.eventName) {
        // Handle different event types
        switch (eventData.eventName) {
          case "CLOSE":
            // Handle your close logic
            console.log( "eventData");

            // Check if event.data is a string or an object
            if (typeof event.data === 'string') {
                // Try to parse the string as JSON

                eventData = JSON.parse(event.data);
            } else {
                return
            }
            // const eventData = JSON.parse(event.data);

            // Process the event data
            if (eventData.eventName) {
                // Handle different event types
                switch (eventData.eventName) {
                    case "OPEN_DEEPLINK":
                        // Handle your Navigation logic
                        console.log("eventData", eventData);
                        break;

                }

            }
        } 
      }
    }
    catch (error) {
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
