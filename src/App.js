import "jquery/dist/jquery.min";
import "bootstrap/dist/js/bootstrap.min";
import "./assets/css/style.css";
import ReactDOM from "react-dom";
import React from "react";
import ControlledTabs from "./ControlledTabs";

import DcfHistoryContext from "./context/DcfHistoryContext";

const DCF_HISTORY_LIMIT = 50;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dcfHistory: [],
    };
  }

  removeDcf(key) {
    const newDcfHistory = this.state.dcfHistory.filter(
      (entry) => entry.key !== key
    );
    this.setState({ dcfHistory: newDcfHistory });
  }

  addDcf(newEntry) {
    let { dcfHistory } = this.state;
    dcfHistory.push(newEntry);
    if (dcfHistory && dcfHistory.length > DCF_HISTORY_LIMIT) {
      dcfHistory.shift();
    }
    this.setState({ dcfHistory });
  }

  render() {
    return (
      <DcfHistoryContext.Provider
        value={{
          dcfHistory: this.state.dcfHistory,
          addDcf: (newEntry) => {
            this.addDcf(newEntry);
          },
          removeDcf: (key) => {
            this.removeDcf(key);
          },
        }}
      >
        <ControlledTabs />
      </DcfHistoryContext.Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
