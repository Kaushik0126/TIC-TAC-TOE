// VibrationComponent.js
import React from "react";

class VibrationComponent extends React.Component {
  handleVibrate = () => {
    // Check if the Vibration API is supported by the browser
    if ("vibrate" in navigator) {
      // Vibrate for 200 milliseconds
      navigator.vibrate(200);
    } else {
      console.log("Vibration API is not supported in this browser.");
    }
  };

  render() {
    return null; // Since this component doesn't need to render anything visible
  }
}

export default VibrationComponent;
