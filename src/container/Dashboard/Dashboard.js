import React, { useContext, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Axios from "axios";
import SidePanel from "../SidePanel/SidePanel";
import { SidePanelContext } from "../../context/sidepanelContext";
import Plugins from "../Plugins";
import { parseTabsData } from "../../utils/parser";

const Dashboard = () => {
  const { setTabs, setActiveTab } = useContext(SidePanelContext);

  useEffect(() => {
    const url =
      "https://dataguard.blob.core.windows.net/challenges/plugins/fe-challenge.json";

    Axios.get(url).then((response) => {
      const {
        data: { tabs, tabdata, plugins },
      } = response.data;

      const parsedTabsData = parseTabsData({ tabs, tabdata, plugins });

      setActiveTab(tabs[0]);

      setTabs(parsedTabsData);
    });
  }, []);

  return (
    <Box display="flex" width="100vw" height="100vh">
      <Box display="flex" bgcolor="lightgray" height="100vh">
        <SidePanel />
      </Box>
      <Box flex="1" padding={3}>
        <Box paddingY={2}>
          <Typography fontFamily="Roboto">Marketing Plugins</Typography>
        </Box>
        <Plugins />
      </Box>
    </Box>
  );
};

export default Dashboard;
