import React, { useContext } from "react";
import { Grid } from "@mui/material";
import Plugin from "../../components/Plugin/Plugin";
import { SidePanelContext } from "../../context/sidepanelContext";
import { GlobalStateContext } from "../../context/globalStateContext";

const Plugins = () => {
  const { activeTab, tabs } = useContext(SidePanelContext);

  const { allDisabled } = useContext(GlobalStateContext);

  const plugins =
    !!activeTab && tabs?.filter(({ id }) => id === activeTab)[0]?.tabPlugins;

  return (
    <Grid container spacing={2}>
      {!!plugins &&
        plugins.length &&
        plugins.map(({ title, description, type }) => (
          <Grid item xs={4}>
            <Plugin
              title={title}
              description={description}
              type={allDisabled ? "disabled" : type}
            />
          </Grid>
        ))}
    </Grid>
  );
};

export default Plugins;
