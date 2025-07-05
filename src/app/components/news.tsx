"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import News1 from "../../assets/svg/news1.svg";
import News2 from "../../assets/svg/news2.svg";
import Van2 from "../../assets/svg/van2.svg";
import NewsBg from "../../assets/img/newsbg.png";

const NewsOverview = () => (
  <Box
    sx={{
      width: 80,
      height: 130,
      bgcolor: "#171717",
      borderRadius: "10px",
      p: 1,
      backgroundImage: `url(${NewsBg.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: 1,
    }}
  >
    {/* Top box */}
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Image src={News1} alt="PMS Logo" height={12} width={8} />
      <Image src={News2} alt="PMS Logo" height={6} width={4} />
    </Box>
    {/* Bottom box */}
    <Box display="flex" flexDirection="column" alignItems="flex-start">
      <Image src={Van2} alt="PMS Logo" height={11} width={18} />
      <Typography
        fontFamily={"inter"}
        fontSize={"6px"}
        fontWeight={500}
        color="#FFFFFF"
        mt={0.5}
      >
        Shareholders Enjoy a Massive Windfall as BP Expands Global Operations
      </Typography>
    </Box>
  </Box>
);
export default NewsOverview;
