import React, { useEffect, useRef } from "react";

const Practice = () => {
  const connecting = () => console.log("Connecting");

  const disconneting = () => console.log("Disconnecting");

  useEffect(() => {
    connecting();
    return () => disconneting();
  });


  return <></>;
};

export default Practice;
