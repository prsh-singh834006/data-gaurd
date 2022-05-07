import React, { useState } from "react";

export const GlobalStateContext = React.createContext(1);

const GloabalStateProvidor = (props) => {
  const [allDisabled, setAllDisabled] = useState(false);

  return (
    <GlobalStateContext.Provider value={{ allDisabled, setAllDisabled }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GloabalStateProvidor;
