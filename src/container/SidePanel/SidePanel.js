import React, { useContext } from "react";
import { Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import EggAltIcon from "@mui/icons-material/EggAlt";
import BottomSwitch from "../../components/BottomSwitch";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { SidePanelContext } from "../../context/sidepanelContext";

const StyledList = styled("ul")(() => ({
  width: "100%",
  listStyle: "none",
  padding: 0,
  "& > li": {
    objectFit: "fill",
    padding: "20px 10px",
    display: "flex",
    alignItems: "center",
    "&.active": {
      backgroundColor: "#fff",
      borderLeft: "5px solid red",
    },
  },
}));

const SidePanel = () => {
  const { activeTab, setActiveTab, tabs } = useContext(SidePanelContext);

  const renderIcon = (type) => {
    if (type === "icon-marketing") {
      return <ViewComfyIcon style={{ marginRight: 5 }} />;
    }

    if (type === "icon-finance") {
      return <EggAltIcon style={{ marginRight: 5 }} />;
    }

    if (type === "icon-people") {
      return <ListAltIcon style={{ marginRight: 5 }} />;
    }
  };

  return (
    <Box display="flex" flex={1} flexDirection="column">
      <Box padding={4}>
        <Typography fontSize={30}>
          Data
          <Box component="span" fontWeight="bolder">
            Gaurd
          </Box>
        </Typography>
      </Box>
      <Box flex={1}>
        <StyledList>
          {tabs?.map(({ id, title, icon }) => {
            return (
              <li
                className={activeTab === id ? "active" : ""}
                onClick={() => setActiveTab(id)}
              >
                {renderIcon(icon)}
                {title}
              </li>
            );
          })}
        </StyledList>
      </Box>
      <BottomSwitch />
    </Box>
  );
};

export default SidePanel;
