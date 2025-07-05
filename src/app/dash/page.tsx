import React from "react";
import RetailProduct from "./components/retail-product";
import Box from "@mui/material/Box";
import ProductNews from "./components/product-news";
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
        <Grid size={{ xs: 12, md: 6 }}>
          <RetailProduct />
          <WatchList />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <ProductNews />
          <ListNews />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashHome;
