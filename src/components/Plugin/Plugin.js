import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Switch from "../Switch";

const Plugin = ({ title, description, type }) => {
  const [checked, setChecked] = useState(type === "active");

  const onChange = () => {
    setChecked(!checked);
  };

  const opacity = () => {
    return type === "disabled" ? 0.5 : 1;
  };

  return (
    <Box
      padding={2}
      border={1}
      borderColor="gray"
      borderRadius={2}
      style={{
        opacity: opacity(),
      }}
    >
      <Box display="flex" flex={1} marginBottom={2}>
        <Typography flex={1} fontFamily="Roboto" fontWeight={600}>
          {title}
        </Typography>
        <Box>
          <Switch
            checked={checked}
            onChange={onChange}
            disabled={type === "disabled"}
            dek={true}
          />
        </Box>
      </Box>
      <Box>
        <Typography fontFamily="Roboto">{description}</Typography>
      </Box>
    </Box>
  );
};

export default Plugin;
