import Box from "@mui/material/Box";
import SideDrawer from "./components/side-bar";
import { ReactNode } from "react";
import Grid from "@mui/material/Grid";
import Overview from "../components/page";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <Box sx={{ width: "100%" }}>
    <Grid container spacing={0}>
      {/* Sidebar - Fixed width */}
      <Grid size={1.5}>
        <SideDrawer />
      </Grid>

      {/* Main Content - Flexible space */}
      <Grid size="auto">
        <Box my={2}>{children}</Box>
      </Grid>

      {/* Right Panel - Fixed width */}
      <Grid size="auto">
        <Box
          p={1}
          position="fixed"
          right={-30} // Positions the Box at the right edge of the screen
          top={0} // Aligns the Box to the top of the screen
          // height="100vh" // Ensures the Box spans the full height of the viewport
          display={{ xs: "none", sm: "none", md: "block" }}
          width="400px"
        >
          <Overview />
        </Box>
      </Grid>
    </Grid>
  </Box>
);

export default Layout;
