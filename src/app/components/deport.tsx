"use client";
import Box from "@mui/material/Box";
import React from "react";

import Typography from "@mui/material/Typography";
import Image from "next/image";
import Deport from "../../assets/svg/deport1.svg";

import Deport1 from "../../assets/img/deport1.png";
import Deport2 from "../../assets/img/deport2.png";
import Deport3 from "../../assets/img/deport3.png";
import PMS from "../../assets/svg/pms-logo.svg";
import DeportTab from "./deport-tab";
import Grid from "@mui/material/Grid";

const DeportOverview = () => (
  <Box
    sx={{
      width: 180,
      height: 130,
      bgcolor: "#171717",
      borderRadius: "20px",
      p: { xs: 3, md: 1 },
    }}
  >
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      py={0.3}
    >
      <Box display="flex" alignItems="center">
        <Image src={Deport} alt="PMS Logo" height={17} width={17} />
        <Typography
          fontFamily={"inter"}
          fontSize={"6px"}
          fontWeight={500}
          color="#FAFAFA"
          sx={{ marginLeft: 0.2 }}
        >
          Depot
        </Typography>
      </Box>
    </Box>

    <Grid container spacing={2} py={0.1}>
      <Grid size={4}>
        {/* Left Section: Icon + Texts */}
        <Box display="flex" flexDirection="column">
          <Box display="flex" alignItems="center">
            <Image src={PMS} alt="PMS Logo" height={7} width={7} />
            <Typography
              fontFamily="Inter"
              fontSize="6px"
              fontWeight={600}
              color="#FAFAFA"
              sx={{ ml: 0.2 }}
            >
              NIPCO
            </Typography>
          </Box>
          <Typography
            fontFamily="Inter"
            fontSize="4px"
            fontWeight={500}
            color="#A3A3A3"
          >
            Lagos
          </Typography>
        </Box>
      </Grid>
      <Grid size={4}>
        {/* Middle Section: Chart Image */}
        <Box mt={0}>
          <Image src={Deport1} alt="Chart" height={13} width={45} />
        </Box>
      </Grid>
      <Grid size={4}>
        {/* Right Section: Price Section */}
        <Box display="flex" flexDirection="column">
          <Typography
            fontFamily="Inter"
            fontSize="6px"
            fontWeight={500}
            color="#FAFAFA"
            textAlign={"right"}
          >
            N714.26
          </Typography>
          <Typography
            fontFamily="Inter"
            fontSize="6px"
            fontWeight={500}
            color="#12B76A"
            textAlign={"right"}
          >
            +0.37
          </Typography>
        </Box>
      </Grid>
    </Grid>

    <Grid container spacing={2} py={0.1}>
      <Grid size={4}>
        {/* Left Section: Icon + Texts */}
        <Box display="flex" flexDirection="column">
          <Box display="flex" alignItems="center">
            <Image src={PMS} alt="PMS Logo" height={7} width={7} />
            <Typography
              fontFamily="Inter"
              fontSize="6px"
              fontWeight={600}
              color="#FAFAFA"
              sx={{ ml: 0.2 }}
            >
              Oando PLC
            </Typography>
          </Box>
          <Typography
            fontFamily="Inter"
            fontSize="4px"
            fontWeight={500}
            color="#A3A3A3"
          >
            Rivers
          </Typography>
        </Box>
      </Grid>
      <Grid size={4}>
        {/* Middle Section: Chart Image */}
        <Box mt={0}>
          <Image src={Deport2} alt="Chart" height={13} width={45} />
        </Box>
      </Grid>
      <Grid size={4}>
        {/* Right Section: Price Section */}
        <Box display="flex" flexDirection="column">
          <Typography
            fontFamily="Inter"
            fontSize="6px"
            fontWeight={500}
            color="#FAFAFA"
            textAlign={"right"}
          >
            N714.26
          </Typography>
          <Typography
            fontFamily="Inter"
            fontSize="6px"
            fontWeight={500}
            color="#12B76A"
            textAlign={"right"}
          >
            +0.37
          </Typography>
        </Box>
      </Grid>
    </Grid>
    <Grid container spacing={2} py={0.1}>
      <Grid size={4}>
        {/* Left Section: Icon + Texts */}
        <Box display="flex" flexDirection="column">
          <Box display="flex" alignItems="center">
            <Image src={PMS} alt="PMS Logo" height={7} width={7} />
            <Typography
              fontFamily="Inter"
              fontSize="6px"
              fontWeight={500}
              color="#FAFAFA"
              sx={{ ml: 0.2 }}
            >
              MRS Oil Nigeria P.
            </Typography>
          </Box>
          <Typography
            fontFamily="Inter"
            fontSize="4px"
            fontWeight={500}
            color="#A3A3A3"
          >
            Oyo
          </Typography>
        </Box>
      </Grid>
      <Grid size={4}>
        {/* Middle Section: Chart Image */}
        <Box mt={0}>
          <Image src={Deport3} alt="Chart" height={13} width={45} />
        </Box>
      </Grid>
      <Grid size={4}>
        {/* Right Section: Price Section */}
        <Box display="flex" flexDirection="column">
          <Typography
            fontFamily="Inter"
            fontSize="6px"
            fontWeight={500}
            color="#FAFAFA"
            textAlign={"right"}
          >
            N714.26
          </Typography>
          <Typography
            fontFamily="Inter"
            fontSize="4px"
            fontWeight={500}
            color="#12B76A"
            textAlign={"right"}
          >
            +0.37
          </Typography>
        </Box>
      </Grid>
    </Grid>

    <DeportTab />
  </Box>
);
export default DeportOverview;
