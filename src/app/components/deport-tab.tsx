import * as React from "react";
import Tabs from "@mui/material/Tabs";
import MuiTab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const StyledTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    top: 1,
    backgroundColor: "#009688",
  },
  "& .MuiTabs-flexContainer": {
    gap: "2px", // Reduced gap between tabs
    alignItems: "flex-end", // Align tabs to the bottom
  },
  "& .MuiTabs-scrollable": {
    scrollbarWidth: "thin",
    scrollbarColor: "#fff #f0f0f0",
    "&::-webkit-scrollbar": {
      height: "2px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#fff",
      borderRadius: "2px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "#f0f0f0",
    },
  },
});

const StyledTab = styled((props: React.ComponentProps<typeof MuiTab>) => (
  <MuiTab {...props} />
))({
  color: "#fff",
  fontFamily: "Inter",
  fontSize: "6px",
  textTransform: "none",
  minWidth: 0,
    paddingTop: "0px",
    paddingDown: "0px",
    paddingLeft:"4px",
    mt:"-2px",
  
  "&.Mui-selected": {
    color: "#009688",
  },
});

export default function DeportTab() {
  const [value, setValue] = React.useState(0);
  const handleChange = (_: unknown, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "250px" }}>
      <StyledTabs
        onChange={handleChange}
        value={value}
        aria-label="Custom styled tabs"
      >
        <StyledTab label="PMS" />
        <StyledTab label="AGO" />
        <StyledTab label="DPK" />
        <StyledTab label="ICE" />
        <StyledTab label="LPG" />
      </StyledTabs>
    </Box>
  );
}
