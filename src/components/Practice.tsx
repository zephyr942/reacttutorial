import React, { useEffect, useRef } from "react";

const Practice = () => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "My Nice App";
  });

  return <input ref={ref} type="text" className="form-control" />;
};

export default Practice;
