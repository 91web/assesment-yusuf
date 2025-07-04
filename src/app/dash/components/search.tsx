import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        bgcolor: "#2c2c2c",
      p:1,
        borderRadius: "24px",
              width: 160,
        height: 35,
      }}
    >
      <SearchIcon sx={{ color: "gray", fontSize: 18, mr: 1 }} />
      <InputBase placeholder="Search…" sx={{ color: "white", flex: 1 }} />
    </Box>
  );
}
