import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { EventEmitter } from "events";

const CustomerGluComponent = ({
  userId = "",
  anonymousId = "",
  gluToken,
  children,
  region = "in",
}) => {
  const eventEmitter = new EventEmitter();
  const scriptLoadedRef = useRef(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleSDKStatusCompleted = () => {
    console.log("SDK_STATUS_COMPLETED",isLoading);
    setIsLoading(false);
    console.log("SDK_STATUS",isLoading);

  };

  useEffect(() => {
    const writeKey = "";
   
    eventEmitter.on("SDK_STATUS_COMPLETED", handleSDKStatusCompleted);

    if (!scriptLoadedRef.current) {
      const script = document.createElement("script");
      region === "us"
        ? (script.src =
            "http://192.168.29.184:8081/sdk.js")
        : region === 'me'
        ? (script.src ='https://assets-me.customerglu.com/scripts/sdk/v0.0.1/sdk.js')
        : (script.src =
            "http://127.0.0.1:8081/sdk.js");
      script.async = true;

      script.onload = () => {
        scriptLoadedRef.current = true;

        if (window.CustomerGlu) {
          const userToken = gluToken;
          new window.CustomerGlu(writeKey, { userId ,anonymousId ,userToken }, {});
          console.log("CustomerGlu initialized");
        } else {
          console.error("CustomerGlu is not available");
        }
      };

      script.onerror = (error) => {
        console.error("Error loading script:", error);
      };

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
        scriptLoadedRef.current = false;
        eventEmitter.off("SDK_STATUS_COMPLETED", handleSDKStatusCompleted);
      };
    } else {
      if (window.CustomerGlu) {
        new window.CustomerGlu(writeKey || undefined, { userId, anonymousId ,gluToken }, {});
        console.log("CustomerGlu initialized");
      } else {
        console.error("CustomerGlu is not available");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoading ? <div></div> : <></>;
};

CustomerGluComponent.propTypes = {
  userId: PropTypes.string,
  gluToken: PropTypes.string.isRequired,
  children: PropTypes.node,
  region: PropTypes.oneOf(["in", "us"]),
};

export default CustomerGluComponent;