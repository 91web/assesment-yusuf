import React from "react";
import RetailProduct from "./components/retail-product";
import Box from "@mui/material/Box";
import ProductNews from "./components/product-news";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import WatchList from "./components/watch-list";
import ListNews from "./components/watch-listnews";

const DashHome = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Grid
        container
        spacing={2}
        direction={{ xs: "column", md: "row" }}
        // alignItems="stretch"
      >
        <Grid size={{ xs: 12, sm: 6, md: 3.5 }}>
          <RetailProduct />
          <WatchList />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3.5 }}>
          <ProductNews />
          <ListNews />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3.5 }}>
          <Box>
            <Typography>Hello</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashHome;
