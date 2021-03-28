import React from "react";
import Button from "react-bootstrap/Button";

export default function NewWindow() {
  return (
    <div>
      <Button
        style={{ width: "100%" }}
        onClick={() => {
          chrome.windows.create({
            url: "index.html",
            type: "panel",
            width: 400,
            height: 800,
          });
        }}
      >
        New window
      </Button>
    </div>
  );
}
