import React, { useState } from "react";

export const SidePanelContext = React.createContext(1);

const SidePanelProvidor = (props) => {
  // this state will be shared with all components
  const [activeTab, setActiveTab] = useState(null);

  const [tabs, setTabs] = useState([]);

  return (
    // this is the provider providing state
    <SidePanelContext.Provider
      value={{ activeTab, setActiveTab, tabs, setTabs }}
    >
      {props.children}
    </SidePanelContext.Provider>
  );
};

export default SidePanelProvidor;
