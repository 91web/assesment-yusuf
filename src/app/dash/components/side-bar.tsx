"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname, useRouter } from "next/navigation";
import { NavItem } from "./static-data/data";
import Image from "next/image";
import Menu from "../../../assets/svg/menu.svg";
import { useMediaQuery, useTheme } from "@mui/material";
import SearchBar from "./search";

const drawerWidth = 120;
const collapsedWidth = 40;

export default function ResponsiveDrawer() {
  const [collapsed, setCollapsed] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Toggle functions
  const toggleCollapse = () => setCollapsed((prev) => !prev);
  const toggleMobileDrawer = () => setMobileOpen((prev) => !prev);

  const handleNavigation = (url: string) => {
    router.push(url);
    if (isMobile) setMobileOpen(false); // Close mobile drawer after navigation
  };

  // Shared drawer content
  const drawerContent = (
    <Box>
      <List>
        {!isMobile && ( // Collapse button only on desktop
          <IconButton onClick={toggleCollapse} sx={{ color: "#ffffff" }}>
            <MenuIcon />
          </IconButton>
        )}
        <SearchBar />
        {NavItem.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              onClick={() => handleNavigation(item.url)}
              selected={pathname === item.url}
              sx={{
                justifyContent: collapsed && !isMobile ? "center" : "initial",
                px: 1,
                color: "#ffffff",
                "&.Mui-selected": {
                  backgroundColor: "#404040",
                  borderRadius: 5,
                  height: "36px",
                  my: 1,
                },
                "&:hover": {
                  backgroundColor: "#424242",
                  borderRadius: 5,
                  // my: 2,
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: collapsed && !isMobile ? "auto" : 1,
                  justifyContent: "center",
                  color: pathname === item.url ? "#FF8D64" : "#ffffff",
                }}
              >
                <Image
                  src={item.icon || Menu.src}
                  alt={item.text}
                  width={15}
                  height={15}
                />
              </ListItemIcon>
              {(!collapsed || isMobile) && ( // Always show text on mobile
                <ListItemText
                  primary={item.text}
                  slotProps={{
                    primary: {
                      sx: {
                        fontSize: pathname === item.url ? 8 : 10,
                        fontWeight: pathname === item.url ? "bold" : "normal",
                        fontFamily: "inter",
                        color: "#ffffff",
                      },
                    },
                  }}
                />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      {/* Desktop Drawer (Left) */}
      <Box
        sx={{
          width: collapsed ? collapsedWidth : drawerWidth,
          //   backgroundColor: "#262626",
          // height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          ml: 1,
          display: { xs: "none", md: "block" }, // Hidden on mobile
        }}
      >
        {drawerContent}
      </Box>

      {/* Mobile Menu Button (Right) */}
      {isMobile && (
        <IconButton
          onClick={toggleMobileDrawer}
          sx={{
            position: "fixed",
            right: 16,
            top: 16,
            zIndex: 1200,
            color: "#ffffff",
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Mobile Drawer (Right) */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleMobileDrawer}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "#262626",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
}
