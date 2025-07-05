"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import PMS from "../../assets/svg/pms-logo.svg";
import AGO from "../../assets/svg/ago.svg";
import Chart2 from "../../assets/img/chart2.png";
import Chart4 from "../../assets/img/chart4.png";
import Chart5 from "../../assets/img/chart8.png";
import Chart6 from "../../assets/img/chart6.png";
import Divider from "@mui/material/Divider";

const ProductOverview = () => (
  <Box
    sx={{
      width: 150,
      height: 130,
      bgcolor: "#171717",
      borderRadius: "10px",
      p: 0.5,
    }}
  >
    {/* PMS Row */}
    <Box display="flex" alignItems="center" gap={2}>
      <Box display="flex" flexDirection="column">
        <Box display="flex" alignItems="center">
          <Image src={PMS} alt="PMS Logo" height={5} width={4} />
          <Typography
            fontFamily="Inter"
            fontSize="9px"
            fontWeight={600}
            color="#FAFAFA"
            sx={{ ml: 0.25 }}
          >
            PMS
          </Typography>
        </Box>
        <Typography
          fontFamily="Inter"
          fontSize="4px"
          fontWeight={500}
          color="#A3A3A3"
        >
          Premium Motor Spirit
        </Typography>
      </Box>
      <Image src={Chart2} alt="Chart" height={12} width={38} />
      <Box>
        <Typography
          fontFamily="Inter"
          fontSize="6px"
          fontWeight={500}
          color="#FAFAFA"
        >
          N714.26
        </Typography>
        <Typography
          fontFamily="Inter"
          fontSize="6px"
          fontWeight={500}
          color="#12B76A"
          textAlign="right"
        >
          +0.37
        </Typography>
      </Box>
    </Box>
    <Divider sx={{ bgcolor: "#36353A", my: 0.25 }} />

    {/* AGO Row */}
    <Box display="flex" alignItems="center" gap={2}>
      <Box display="flex" flexDirection="column">
        <Box display="flex" alignItems="center">
          <Image src={AGO} alt="AGO Logo" height={5} width={4} />
          <Typography
            fontFamily="Inter"
            fontSize="9px"
            fontWeight={600}
            color="#FAFAFA"
            sx={{ ml: 0.25 }}
          >
            AGO
          </Typography>
        </Box>
        <Typography
          fontFamily="Inter"
          fontSize="5px"
          fontWeight={500}
          color="#A3A3A3"
        >
          Automotive Gas Oil
        </Typography>
      </Box>
      <Image src={Chart4} alt="Chart" height={12} width={38} />
      <Box>
        <Typography
          fontFamily="Inter"
          fontSize="6px"
          fontWeight={500}
          color="#FAFAFA"
          textAlign="right"
        >
          N1249.06
        </Typography>
        <Typography
          fontFamily="Inter"
          fontSize="6px"
          fontWeight={500}
          color="#F04438"
          textAlign="right"
        >
          -9.01
        </Typography>
      </Box>
    </Box>
    <Divider sx={{ bgcolor: "#36353A", my: 0.25 }} />

    {/* ICE Row */}
    <Box display="flex" alignItems="center" gap={2}>
      <Box display="flex" flexDirection="column">
        <Box display="flex" alignItems="center">
          <Image src={PMS} alt="ICE Logo" height={5} width={4} />
          <Typography
            fontFamily="Inter"
            fontSize="9px"
            fontWeight={600}
            color="#FAFAFA"
            sx={{ ml: 0.25 }}
          >
            ICE
          </Typography>
        </Box>
        <Typography
          fontFamily="Inter"
          fontSize="5px"
          fontWeight={500}
          color="#A3A3A3"
        >
          ICE Brent Crude
        </Typography>
      </Box>
      <Image src={Chart5} alt="Chart" height={12} width={48} />
      <Box>
        <Typography
          fontFamily="Inter"
          fontSize="6px"
          fontWeight={500}
          color="#FAFAFA"
          textAlign="right"
        >
          N0.00
        </Typography>
        <Typography
          fontFamily="Inter"
          fontSize="6px"
          fontWeight={500}
          color="#12B76A"
          textAlign="right"
        >
          0.00
        </Typography>
      </Box>
    </Box>
    <Divider sx={{ bgcolor: "#36353A", my: 0.25 }} />

    {/* DPK Row */}
    <Box display="flex" alignItems="center" gap={2}>
      <Box display="flex" flexDirection="column">
        <Box display="flex" alignItems="center">
          <Image src={AGO} alt="DPK Logo" height={4} width={4} />
          <Typography
            fontFamily="Inter"
            fontSize="9px"
            fontWeight={600}
            color="#FAFAFA"
            sx={{ ml: 0.25 }}
          >
            DPK
          </Typography>
        </Box>
        <Typography
          fontFamily="Inter"
          fontSize="4px"
          fontWeight={500}
          color="#A3A3A3"
        >
          Dual Purpose Kerosene
        </Typography>
      </Box>
      <Image src={Chart6} alt="Chart" height={12} width={38} />
      <Box>
        <Typography
          fontFamily="Inter"
          fontSize="6px"
          fontWeight={500}
          color="#FAFAFA"
          textAlign="right"
        >
          N1088.92
        </Typography>
        <Typography
          fontFamily="Inter"
          fontSize="6px"
          fontWeight={500}
          color="#F04438"
          textAlign="right"
        >
          -50.90
        </Typography>
      </Box>
    </Box>
  </Box>
);
export default ProductOverview;
