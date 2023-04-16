import React from "react";

const MyComponet = (props) => {
  const { heading, buttonText } = props;
  return (
    <>
      <h1>{heading}</h1>
      <button>{buttonText}</button>
    </>
  );
};

export default MyComponet;
