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
            width: 650,
            height: 900,
          });
        }}
      >
        New window
      </Button>
    </div>
  );
}
