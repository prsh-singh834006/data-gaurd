import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import Switch from "../Switch";
import { GlobalStateContext } from "../../context/globalStateContext";
import styled from "@emotion/styled";

const StyledDiv = styled(Box)(({ checked }) => {
  if (checked) {
    return {
      background:
        "linear-gradient(180deg, rgba(46,202,69,0) 40%, rgba(46,202,69,0.43323266806722693) 52%)",
    };
  }

  return {
    background:
      "linear-gradient(180deg, rgba(46,202,69,0) 40%, rgba(237,71,71,0.309983368347339) 52%)",
  };
});

const BottomSwitch = () => {
  const { allDisabled, setAllDisabled } = useContext(GlobalStateContext);

  const onChange = () => {
    setAllDisabled(!allDisabled);
  };

  return (
    <StyledDiv
      display="flex"
      padding={2}
      alignItems="center"
      justifyContent="center"
      checked={!allDisabled}
    >
      <Typography fontSize={13} flex={1} fontFamily="Roboto" fontWeight={600}>
        All Plugins enabled
      </Typography>
      <Switch checked={!allDisabled} onChange={onChange} />
    </StyledDiv>
  );
};

export default BottomSwitch;
