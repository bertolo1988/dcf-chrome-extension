import React from "react";
import Button from "react-bootstrap/Button";

import Constants from "../Constants";

export default function NewWindow() {
  return (
    <div>
      <Button
        style={{ width: "100%" }}
        onClick={() => {
          chrome.windows.create({
            url: "index.html",
            type: "panel",
            width: Constants.NEW_PANEL_WIDTH,
            height: Constants.NEW_PANEL_HEIGHT,
          });
        }}
      >
        New window
      </Button>
    </div>
  );
}
