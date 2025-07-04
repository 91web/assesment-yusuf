"use client";
import Box from "@mui/material/Box";
import React, { useState } from "react";
//import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Deport from "../../../assets/svg/deport1.svg";

import AGO from "../../../assets/svg/ago.svg";
import Chart1 from "../../../assets/img/chart1.png";
import Deport1 from "../../../assets/img/deport1.png";
import Deport2 from "../../../assets/img/deport2.png";
import Deport3 from "../../../assets/img/deport3.png";
import Deport4 from "../../../assets/img/deport4.png";
import Deport5 from "../../../assets/img/deport5.png";
import Deport6 from "../../../assets/img/deport6.png";
import Deport7 from "../../../assets/img/deport7.png";
import Deport8 from "../../../assets/img/deport8.png";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import PMS from "../../../assets/svg/pms-logo.svg";
import DeportTab from "./components/tab";
import Grid from "@mui/material/Grid";

const SmallCard = () => (
  <Box
    id="s"
    sx={{
      width: 250,
      height: 240,
      bgcolor: "#171717",
      borderRadius: "20px",
      p: 2,
    }}
  >
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box display="flex" alignItems="center">
        <Image src={Deport} alt="PMS Logo" height={27} width={27} />
        <Typography
          fontFamily={"inter"}
          fontSize={"12px"}
          fontWeight={500}
          color="#FAFAFA"
          sx={{ marginLeft: 0.5 }}
        >
          Depot
        </Typography>
      </Box>
      <Box>
        <Box display="flex" alignItems="center">
          <Image src={PMS} alt="PMS Logo" height={7} width={7} />
          <Typography
            fontFamily={"inter"}
            fontSize={"12px"}
            fontWeight={500}
            color="#FAFAFA"
            sx={{ marginLeft: 0.5 }}
          >
            NIPCO
          </Typography>
        </Box>
        <Box>
          <Typography
            fontFamily={"inter"}
            fontSize={"10px"}
            fontWeight={500}
            sx={{ color: "#A3A3A3", textAlign: "right" }}
          >
            Lagos
          </Typography>
        </Box>
      </Box>
    </Box>

    <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
      <Image src={Chart1} alt="PMS Logo" height={72} width={215} />
    </Box>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
      mt={2}
    >
      <Typography
        fontFamily={"inter"}
        fontSize={"35px"}
        fontWeight={500}
        color="#FFFFFF"
        mr={2}
      >
        N714.26
      </Typography>
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Typography
          fontFamily="Inter"
          fontSize="12px"
          fontWeight={500}
          color="#12B76A"
        >
          +0.37
        </Typography>
        <Typography
          fontFamily="Inter"
          fontSize="12px"
          fontWeight={500}
          color="#12B76A"
        >
          +0.09%
        </Typography>
      </Box>
    </Box>
    <DeportTab />
  </Box>
);

const MediumCard = () => (
  <Box
    id="m"
    sx={{
      width: 312,
      height: 200,
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
        <Image src={Deport} alt="PMS Logo" height={27} width={27} />
        <Typography
          fontFamily={"inter"}
          fontSize={"12px"}
          fontWeight={500}
          color="#FAFAFA"
          sx={{ marginLeft: 0.5 }}
        >
          Depot
        </Typography>
      </Box>
    </Box>

    <Grid container spacing={2} py={0.3}>
      <Grid size={4}>
        {/* Left Section: Icon + Texts */}
        <Box display="flex" flexDirection="column">
          <Box display="flex" alignItems="center">
            <Image src={PMS} alt="PMS Logo" height={7} width={7} />
            <Typography
              fontFamily="Inter"
              fontSize="12px"
              fontWeight={600}
              color="#FAFAFA"
              sx={{ ml: 0.5 }}
            >
              NIPCO
            </Typography>
          </Box>
          <Typography
            fontFamily="Inter"
            fontSize="8px"
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
          <Image src={Deport1} alt="Chart" height={25} width={75} />
        </Box>
      </Grid>
      <Grid size={4}>
        {/* Right Section: Price Section */}
        <Box display="flex" flexDirection="column">
          <Typography
            fontFamily="Inter"
            fontSize="12px"
            fontWeight={500}
            color="#FAFAFA"
            textAlign={"right"}
          >
            N714.26
          </Typography>
          <Typography
            fontFamily="Inter"
            fontSize="12px"
            fontWeight={500}
            color="#12B76A"
            textAlign={"right"}
          >
            +0.37
          </Typography>
        </Box>
      </Grid>
    </Grid>

    <Grid container spacing={2} py={0.3}>
      <Grid size={4}>
        {/* Left Section: Icon + Texts */}
        <Box display="flex" flexDirection="column">
          <Box display="flex" alignItems="center">
            <Image src={PMS} alt="PMS Logo" height={7} width={7} />
            <Typography
              fontFamily="Inter"
              fontSize="12px"
              fontWeight={600}
              color="#FAFAFA"
              sx={{ ml: 0.5 }}
            >
              Oando PLC
            </Typography>
          </Box>
          <Typography
            fontFamily="Inter"
            fontSize="8px"
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
          <Image src={Deport2} alt="Chart" height={25} width={75} />
        </Box>
      </Grid>
      <Grid size={4}>
        {/* Right Section: Price Section */}
        <Box display="flex" flexDirection="column">
          <Typography
            fontFamily="Inter"
            fontSize="10px"
            fontWeight={500}
            color="#FAFAFA"
            textAlign={"right"}
          >
            N714.26
          </Typography>
          <Typography
            fontFamily="Inter"
            fontSize="10px"
            fontWeight={500}
            color="#12B76A"
            textAlign={"right"}
          >
            +0.37
          </Typography>
        </Box>
      </Grid>
    </Grid>
    <Grid container spacing={2} py={0.3}>
      <Grid size={4}>
        {/* Left Section: Icon + Texts */}
        <Box display="flex" flexDirection="column">
          <Box display="flex" alignItems="center">
            <Image src={PMS} alt="PMS Logo" height={7} width={7} />
            <Typography
              fontFamily="Inter"
              fontSize="8px"
              fontWeight={500}
              color="#FAFAFA"
              sx={{ ml: 0.5 }}
            >
              MRS Oil Nigeria P.
            </Typography>
          </Box>
          <Typography
            fontFamily="Inter"
            fontSize="8px"
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
          <Image src={Deport3} alt="Chart" height={25} width={75} />
        </Box>
      </Grid>
      <Grid size={4}>
        {/* Right Section: Price Section */}
        <Box display="flex" flexDirection="column">
          <Typography
            fontFamily="Inter"
            fontSize="10px"
            fontWeight={500}
            color="#FAFAFA"
            textAlign={"right"}
          >
            N714.26
          </Typography>
          <Typography
            fontFamily="Inter"
            fontSize="10px"
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

const LargeCard = () => (
  <Box
    id="l"
    sx={{
      width: 312,
      height: 400,
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
        <Image src={Deport} alt="PMS Logo" height={27} width={27} />
        <Typography
          fontFamily={"inter"}
          fontSize={"12px"}
          fontWeight={500}
          color="#FAFAFA"
          sx={{ marginLeft: 0.5 }}
        >
          Depot
        </Typography>
      </Box>
    </Box>

    <Grid container spacing={2} py={0.3}>
      <Grid size={4}>
        {/* Left Section: Icon + Texts */}
        <Box display="flex" flexDirection="column">
          <Box display="flex" alignItems="center">
            <Image src={PMS} alt="PMS Logo" height={7} width={7} />
            <Typography
              fontFamily="Inter"
              fontSize="12px"
              fontWeight={600}
              color="#FAFAFA"
              sx={{ ml: 0.5 }}
            >
              NIPCO
            </Typography>
          </Box>
          <Typography
            fontFamily="Inter"
            fontSize="8px"
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
          <Image src={Deport1} alt="Chart" height={25} width={75} />
        </Box>
      </Grid>
      <Grid size={4}>
        {/* Right Section: Price Section */}
        <Box display="flex" flexDirection="column">
          <Typography
            fontFamily="Inter"
            fontSize="12px"
            fontWeight={500}
            color="#FAFAFA"
            textAlign={"right"}
          >
            N714.26
          </Typography>
          <Typography
            fontFamily="Inter"
            fontSize="12px"
            fontWeight={500}
            color="#12B76A"
            textAlign={"right"}
          >
            +0.37
          </Typography>
        </Box>
      </Grid>
    </Grid>

    <Grid container spacing={2} py={0.3}>
      <Grid size={4}>
        {/* Left Section: Icon + Texts */}
        <Box display="flex" flexDirection="column">
          <Box display="flex" alignItems="center">
            <Image src={PMS} alt="PMS Logo" height={7} width={7} />
            <Typography
              fontFamily="Inter"
              fontSize="12px"
              fontWeight={600}
              color="#FAFAFA"
              sx={{ ml: 0.5 }}
            >
              Oando PLC
            </Typography>
          </Box>
          <Typography
            fontFamily="Inter"
            fontSize="8px"
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
          <Image src={Deport2} alt="Chart" height={25} width={75} />
        </Box>
      </Grid>
      <Grid size={4}>
        {/* Right Section: Price Section */}
        <Box display="flex" flexDirection="column">
          <Typography
            fontFamily="Inter"
            fontSize="10px"
            fontWeight={500}
            color="#FAFAFA"
            textAlign={"right"}
          >
            N714.26
          </Typography>
          <Typography
            fontFamily="Inter"
            fontSize="10px"
            fontWeight={500}
            color="#12B76A"
            textAlign={"right"}
          >
            +0.37
          </Typography>
        </Box>
      </Grid>
    </Grid>
    <Grid container spacing={2} py={0.3}>
      <Grid size={4}>
        {/* Left Section: Icon + Texts */}
        <Box display="flex" flexDirection="column">
          <Box display="flex" alignItems="center">
            <Image src={PMS} alt="PMS Logo" height={7} width={7} />
            <Typography
              fontFamily="Inter"
              fontSize="8px"
              fontWeight={500}
              color="#FAFAFA"
              sx={{ ml: 0.5 }}
            >
              MRS Oil Nigeria P.
            </Typography>
          </Box>
          <Typography
            fontFamily="Inter"
            fontSize="8px"
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
          <Image src={Deport3} alt="Chart" height={25} width={75} />
        </Box>
      </Grid>
      <Grid size={4}>
        {/* Right Section: Price Section */}
        <Box display="flex" flexDirection="column">
          <Typography
            fontFamily="Inter"
            fontSize="10px"
            fontWeight={500}
            color="#FAFAFA"
            textAlign={"right"}
          >
            N714.26
          </Typography>
          <Typography
            fontFamily="Inter"
            fontSize="10px"
            fontWeight={500}
            color="#12B76A"
            textAlign={"right"}
          >
            +0.37
          </Typography>
        </Box>
      </Grid>
    </Grid>
    <Grid container spacing={2} py={0.3}>
      <Grid size={4}>
        {/* Left Section: Icon + Texts */}
        <Box display="flex" flexDirection="column">
          <Box display="flex" alignItems="center">
            <Image src={AGO} alt="PMS Logo" height={7} width={7} />
            <Typography
              fontFamily="Inter"
              fontSize="8px"
              fontWeight={500}
              color="#FAFAFA"
              sx={{ ml: 0.5 }}
            >
              Total Nigeria PLC
            </Typography>
          </Box>
          <Typography
            fontFamily="Inter"
            fontSize="8px"
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
          <Image src={Deport4} alt="Chart" height={25} width={75} />
        </Box>
      </Grid>
      <Grid size={4}>
        {/* Right Section: Price Section */}
        <Box display="flex" flexDirection="column">
          <Typography
            fontFamily="Inter"
            fontSize="10px"
            fontWeight={500}
            color="#FAFAFA"
            textAlign={"right"}
          >
            N714.26
          </Typography>
          <Typography
            fontFamily="Inter"
            fontSize="10px"
            fontWeight={500}
            color="#F04438"
            textAlign={"right"}
          >
            -0.02%
          </Typography>
        </Box>
      </Grid>
    </Grid>
    <Grid container spacing={2} py={0.3}>
      <Grid size={4}>
        {/* Left Section: Icon + Texts */}
        <Box display="flex" flexDirection="column">
          <Box display="flex" alignItems="center">
            <Image src={AGO} alt="PMS Logo" height={7} width={7} />
            <Typography
              fontFamily="Inter"
              fontSize="8px"
              fontWeight={500}
              color="#FAFAFA"
              sx={{ ml: 0.5 }}
            >
              Conoil PLC
            </Typography>
          </Box>
          <Typography
            fontFamily="Inter"
            fontSize="8px"
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
          <Image src={Deport5} alt="Chart" height={25} width={75} />
        </Box>
      </Grid>
      <Grid size={4}>
        {/* Right Section: Price Section */}
        <Box display="flex" flexDirection="column">
          <Typography
            fontFamily="Inter"
            fontSize="10px"
            fontWeight={500}
            color="#FAFAFA"
            textAlign={"right"}
          >
            N714.26
          </Typography>
          <Typography
            fontFamily="Inter"
            fontSize="10px"
            fontWeight={500}
            color="#F04438"
            textAlign={"right"}
          >
            -0.02%
          </Typography>
        </Box>
      </Grid>
    </Grid>
    <Grid container spacing={2} py={0.3}>
      <Grid size={4}>
        {/* Left Section: Icon + Texts */}
        <Box display="flex" flexDirection="column">
          <Box display="flex" alignItems="center">
            <Image src={PMS} alt="PMS Logo" height={7} width={7} />
            <Typography
              fontFamily="Inter"
              fontSize="8px"
              fontWeight={500}
              color="#FAFAFA"
              sx={{ ml: 0.5 }}
            >
              Ardova PLC
            </Typography>
          </Box>
          <Typography
            fontFamily="Inter"
            fontSize="8px"
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
          <Image src={Deport6} alt="Chart" height={25} width={75} />
        </Box>
      </Grid>
      <Grid size={4}>
        {/* Right Section: Price Section */}
        <Box display="flex" flexDirection="column">
          <Typography
            fontFamily="Inter"
            fontSize="10px"
            fontWeight={500}
            color="#FAFAFA"
            textAlign={"right"}
          >
            N714.26
          </Typography>
          <Typography
            fontFamily="Inter"
            fontSize="10px"
            fontWeight={500}
            color="#12B76A"
            textAlign={"right"}
          >
            +0.37
          </Typography>
        </Box>
      </Grid>
    </Grid>
    <Grid container spacing={2} py={0.3}>
      <Grid size={4}>
        {/* Left Section: Icon + Texts */}
        <Box display="flex" flexDirection="column">
          <Box display="flex" alignItems="center">
            <Image src={AGO} alt="PMS Logo" height={7} width={7} />
            <Typography
              fontFamily="Inter"
              fontSize="8px"
              fontWeight={500}
              color="#FAFAFA"
              sx={{ ml: 0.5 }}
            >
              Chipet PLC
            </Typography>
          </Box>
          <Typography
            fontFamily="Inter"
            fontSize="8px"
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
          <Image src={Deport7} alt="Chart" height={25} width={75} />
        </Box>
      </Grid>
      <Grid size={4}>
        {/* Right Section: Price Section */}
        <Box display="flex" flexDirection="column">
          <Typography
            fontFamily="Inter"
            fontSize="10px"
            fontWeight={500}
            color="#FAFAFA"
            textAlign={"right"}
          >
            N714.26
          </Typography>
          <Typography
            fontFamily="Inter"
            fontSize="10px"
            fontWeight={500}
            color="#F04438"
            textAlign={"right"}
          >
            -0.02%
          </Typography>
        </Box>
      </Grid>
    </Grid>
    <Grid container spacing={2} py={0.3}>
      <Grid size={4}>
        {/* Left Section: Icon + Texts */}
        <Box display="flex" flexDirection="column">
          <Box display="flex" alignItems="center">
            <Image src={PMS} alt="PMS Logo" height={7} width={7} />
            <Typography
              fontFamily="Inter"
              fontSize="8px"
              fontWeight={500}
              color="#FAFAFA"
              sx={{ ml: 0.5 }}
            >
              MRS Oil Nigeria P.
            </Typography>
          </Box>
          <Typography
            fontFamily="Inter"
            fontSize="8px"
            fontWeight={500}
            color="#A3A3A3"
          >
            Delta
          </Typography>
        </Box>
      </Grid>
      <Grid size={4}>
        {/* Middle Section: Chart Image */}
        <Box mt={0}>
          <Image src={Deport8} alt="Chart" height={25} width={75} />
        </Box>
      </Grid>
      <Grid size={4}>
        {/* Right Section: Price Section */}
        <Box display="flex" flexDirection="column">
          <Typography
            fontFamily="Inter"
            fontSize="10px"
            fontWeight={500}
            color="#FAFAFA"
            textAlign={"right"}
          >
            N714.26
          </Typography>
          <Typography
            fontFamily="Inter"
            fontSize="10px"
            fontWeight={500}
            color="#12B76A"
            textAlign={"right"}
          >
            +0.37
          </Typography>
        </Box>
      </Grid>
    </Grid>
    <Box my={1}>
      <DeportTab />
    </Box>
  </Box>
);

const DepotWidget = () => {
  const [size, setSize] = useState<"S" | "M" | "L">("S");

  return (
    <Box mb={2}>
      <Card
        sx={{
          maxWidth: 350,
          //  my: 4,

          backgroundColor: "#333",
          borderRadius: 5,
          color: "#fff",
        }}
      >
        <CardContent>
          <Typography fontFamily={"inter"} fontSize="14px" color="#F5F5F5">
            Retail product
          </Typography>

          <Typography
            fontFamily={"inter"}
            fontSize="12px"
            color="#D4D4D4"
            mb={2}
          >
            View price quotes and track performance of a product throughout the
            week
          </Typography>

          {/* Display selected card */}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {size === "S" && <SmallCard />}
            {size === "M" && <MediumCard />}
            {size === "L" && <LargeCard />}
          </Box>

          {/* Button Group */}
          <Box sx={{ mt: 3, textAlign: "center" }}>
            <ButtonGroup
              variant="outlined"
              size="small"
              sx={{
                gap: 1,
                background: "transparent",
                "& .MuiButtonGroup-grouped": {
                  borderRadius: "50% !important",
                  margin: 0,
                },
              }}
            >
              {["S", "M", "L"].map((val) => (
                <Button
                  key={val}
                  onClick={() => setSize(val as "S" | "M" | "L")}
                  sx={{
                    minWidth: 36,
                    width: 36,
                    height: 36,
                    backgroundColor: size === val ? "#000" : "transparent",
                    color: size === val ? "#fff" : "#666",
                    borderColor: "#666",
                    "&:hover": {
                      backgroundColor: size === val ? "#000" : "#333",
                      color: "#fff",
                      borderColor: "#fff",
                    },
                    "&.MuiButton-root": {
                      borderRadius: "50%",
                    },
                  }}
                >
                  {val}
                </Button>
              ))}
            </ButtonGroup>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DepotWidget;
