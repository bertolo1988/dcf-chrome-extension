import react from "react";

const DEFAULT_CONTEXT = {
  dcfHistory: [],
  addDcf: () => {},
  removeDcf: () => {},
};

export default react.createContext(DEFAULT_CONTEXT);
