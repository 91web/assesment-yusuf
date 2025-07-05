import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DeportOverview from "./deport";
import ReportOverview from "./report";
import NewsOverview from "./news";
import FlightOverview from "./flight";
import ProductOverview from "./product";
import { Button } from "@mui/material";
const Overview = () => {
  return (
    <Box>
      <Grid container spacing={1}>
        {/* First row */}

        <Grid size={"auto"}>
          <Box
            display={"flex"}
            justifyContent={"right"}
            alignItems={"right"}
            gap={1}
          >
            <ProductOverview />
            <DeportOverview />
          </Box>
        </Grid>

        {/* Second row */}

        <Grid size={"auto"}>
          <Box
            display={"flex"}
            justifyContent={"right"}
            alignItems={"right"}
            gap={1}
          >
            <ReportOverview />

            <NewsOverview />

            <FlightOverview />
          </Box>
        </Grid>
      </Grid>
      <Box textAlign={"center"}>
        <Button
          sx={{
                      width: "64px",
              my:2,
            height: "36px",
            backgroundColor: "#525252", // Grey/500
            border: "1px solid #737373", // Grey/400
            boxShadow: "0px 1px 2px rgba(255, 255, 255, 0.05)", // Shadow/xs
            borderRadius: "36px",
            color: "#fff", // Assuming text color is white
            textTransform: "none", // Prevents uppercase transformation
            "&:hover": {
              backgroundColor: "#404040", // Optional: Add hover effect
            },
          }}
        >
          Done
        </Button>
      </Box>
    </Box>
  );
};

export default Overview;
