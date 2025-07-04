import Box from "@mui/material/Box";
import SideDrawer from "./components/side-bar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <Box
    sx={{
      display: "flex", // Use Flexbox for row layout
      // height: "100vh", // Full viewport height
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {/* Sidebar */}
    <Box width= {180} >
      <SideDrawer />
    </Box>

    {/* Main Content */}
    <Box
      component="main"
      sx={{
        flexGrow: 1, // Take up remaining space
        height: "100vh",
        pt: 2,
      //  overflow: "auto", // Add scroll if content overflows
      }}
    >
      {children}
    </Box>
  </Box>
);

export default Layout;
