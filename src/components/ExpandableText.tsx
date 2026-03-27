import React, { useState, type ReactNode } from "react";

interface props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 300 }: props) => {
  const [showAllText, setShowAllText] = useState(false);

  const text = showAllText ? children : children.substring(0, maxChars) + "...";

  function handleClick() {
    setShowAllText(!showAllText);
  }

  if (children.length <= maxChars) return <p>{children}</p>;

  return (
    <>
      {text}
      <button onClick={handleClick}>{showAllText ? "Less" : "More"}</button>
    </>
  );
};

export default ExpandableText;
