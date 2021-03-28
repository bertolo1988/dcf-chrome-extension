import react from "react";

const DEFAULT_CONTEXT = {
  dcfHistory: [],
  addDcf: () => {},
};

export default react.createContext(DEFAULT_CONTEXT);
