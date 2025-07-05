import * as React from "react";
import Tabs from "@mui/material/Tabs";
import MuiTab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const StyledTabs = styled(Tabs)({
  bgcolor: "#fff",
  "& .MuiTabs-indicator": {
    top: 1,
    backgroundColor: "#009688",
  
  },
});

const StyledTab = styled((props: React.ComponentProps<typeof MuiTab>) => (
  <MuiTab {...props} />
))({
  color: "#fff",
  fontFamily: "inter",
  fontSize: "10px", // Set font size to 12px
  textTransform: "none", // Disable uppercase transformation
  "&.Mui-selected": {
    color: "#009688",
  },
  "& .MuiTab-wrapper": {
    fontSize: "12px", // Ensure label text is also 12px
  },
});

export default function RateTab() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "250px" }}>
      <StyledTabs
        onChange={handleChange}
        value={value}
        aria-label="Custom styled tabs"
      >
        <StyledTab label="Official rate" />
        <StyledTab label="Black market" />
      </StyledTabs>
    </Box>
  );
}
