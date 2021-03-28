import "jquery/dist/jquery.min";
import "bootstrap/dist/js/bootstrap.min";
import "./assets/css/style.css";
import ReactDOM from "react-dom";
import React from "react";
import ControlledTabs from "./ControlledTabs";

import DcfHistoryContext from "./context/DcfHistoryContext";

const DCF_HISTORY_LIMIT = 20;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dcfHistory: [],
    };
  }

  componentDidMount() {
    chrome.storage.local.get(["dcfHistory"], (data) => {
      const { dcfHistory } = data;
      if (dcfHistory && dcfHistory.length > 0) this.setState({ dcfHistory });
    });
  }

  removeDcf(key) {
    const dcfHistory = this.state.dcfHistory.filter(
      (entry) => entry.key !== key
    );
    this.setState({ dcfHistory });
    chrome.storage.local.set({ dcfHistory });
  }

  addDcf(newEntry) {
    let { dcfHistory } = this.state;
    dcfHistory.push(newEntry);
    if (dcfHistory && dcfHistory.length > DCF_HISTORY_LIMIT) {
      dcfHistory.shift();
    }
    this.setState({ dcfHistory });
    chrome.storage.local.set({ dcfHistory });
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
