
import React from "react";
import "./styles.css";

export const Message = (props) => {
    return (
      <h3 className="Message">{props.message}</h3>
    );
  };