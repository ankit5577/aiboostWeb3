import React,{useState} from "react";
import ReactDOM from "react-dom";

const Notification = ({ currentAccount }) => {
  console.log("💚Notification Log💚", currentAccount);
  
  const [error, setError] = useState(false);


  return ReactDOM.createPortal(
    <>
      {!currentAccount && <div>Connect your wallet</div>  }
    </>,
    document.getElementById("notification")
  );
};

export default Notification;
