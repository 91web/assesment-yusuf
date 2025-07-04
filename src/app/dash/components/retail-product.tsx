"use client";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import PMS from "../../../assets/svg/pms-logo.svg";
import Chart1 from "../../../assets/img/chart1.png";
import Chart2 from "../../../assets/img/chart2.png";
import Chart3 from "../../../assets/img/chart3.png";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

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
        <Image src={PMS} alt="PMS Logo" height={7} width={7} />
        <Typography
          fontFamily={"inter"}
          fontSize={"12px"}
          fontWeight={600}
          color="#FAFAFA"
          sx={{ marginLeft: 0.5 }}
        >
          PMS
        </Typography>
      </Box>
      <Box>
        <Typography
          fontFamily={"inter"}
          fontSize={"10px"}
          fontWeight={500}
          sx={{ color: "#12B76A" }}
        >
          +0.37
        </Typography>
      </Box>
    </Box>

    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Typography
        fontFamily={"inter"}
        fontSize={"10px"}
        fontWeight={500}
        color="#A3A3A3"
        // sx={{ marginLeft: 0.5 }}
      >
        Premium Motor Spirit
      </Typography>

      <Box>
        <Typography
          fontFamily={"inter"}
          fontSize={"10px"}
          fontWeight={500}
          sx={{ color: "#12B76A" }}
        >
          +0.09%
        </Typography>
      </Box>
    </Box>

    <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
      <Image src={Chart1} alt="PMS Logo" height={72} width={215} />
    </Box>
    <Box display="flex" justifyContent="center" alignItems="center">
      <Typography
        fontFamily={"inter"}
        fontSize={"45px"}
        fontWeight={500}
        color="#FFFFFF"
      >
        N714.26
      </Typography>
    </Box>
  </Box>
);

const MediumCard = () => (
  <Box
    id="m"
    sx={{
      width: 250,
      height:{xs:180, md:160},
      bgcolor: "#171717",
      borderRadius: "20px",
      p:{xs:3, md:1},
    }}
  >
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box display="flex" alignItems="center">
        <Image src={PMS} alt="PMS Logo" height={7} width={7} />
        <Typography
          fontFamily={"inter"}
          fontSize={"12px"}
          fontWeight={600}
          color="#FAFAFA"
          sx={{ marginLeft: 0.5 }}
        >
          PMS
        </Typography>
      </Box>
      <Box>
        <Typography
          fontFamily={"inter"}
          fontSize={"10px"}
          fontWeight={500}
          sx={{ color: "#12B76A" }}
        >
          +0.37
        </Typography>
      </Box>
    </Box>

    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Typography
        fontFamily={"inter"}
        fontSize={"10px"}
        fontWeight={500}
        color="#A3A3A3"
        // sx={{ marginLeft: 0.5 }}
      >
        Premium Motor Spirit
      </Typography>

      <Box>
        <Typography
          fontFamily={"inter"}
          fontSize={"10px"}
          fontWeight={500}
          sx={{ color: "#12B76A" }}
        >
          +0.09%
        </Typography>
      </Box>
    </Box>

    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      textAlign="center"
      justifyContent="space-between"
      //  px={1.5}
    >
      <Box
        width={135}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        height="100%"
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography
            fontFamily={"inter"}
            fontSize={"8px"}
            fontWeight={500}
            color="#A3A3A3"
          >
            Highest price
          </Typography>
          <Typography
            fontFamily={"inter"}
            fontSize={"8px"}
            fontWeight={500}
            color="#A3A3A3"
          >
            800.12
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mt={0.3}
        >
          <Typography
            fontFamily={"inter"}
            fontSize={"8px"}
            fontWeight={500}
            color="#A3A3A3"
          >
            Median price
          </Typography>
          <Typography
            fontFamily={"inter"}
            fontSize={"8px"}
            fontWeight={500}
            color="#A3A3A3"
          >
            712.49
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mt={0.3}
        >
          <Typography
            fontFamily={"inter"}
            fontSize={"8px"}
            fontWeight={500}
            color="#A3A3A3"
          >
            Lowest price
          </Typography>
          <Typography
            fontFamily={"inter"}
            fontSize={"8px"}
            fontWeight={500}
            color="#A3A3A3"
          >
            700.5
          </Typography>
        </Box>
      </Box>
      <Box
        width={190}
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={42}
        pl={2}
      >
        <Image
          src={Chart2}
          alt="PMS Logo"
          height={100}
          width={185}
          style={{ marginTop: 40 }}
        />
      </Box>
    </Box>
    <Box display="flex" justifyContent="left" alignItems="left" mt={0.5}>
      <Typography
        fontFamily={"inter"}
        fontSize={"23px"}
        fontWeight={500}
        color="#FFFFFF"
        // px={1.5}
      >
        N714.26
      </Typography>
    </Box>
  </Box>
);

const LargeCard = () => (
  <Box
    id="l"
    sx={{
      width: 360,
      height: 240,
      bgcolor: "#171717",
      borderRadius: "20px",
      py: 2,
      px: 2,
    }}
  >
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box display="flex" alignItems="center">
        <Image src={PMS} alt="PMS Logo" height={7} width={7} />
        <Typography
          fontFamily={"inter"}
          fontSize={"12px"}
          fontWeight={600}
          color="#FAFAFA"
          sx={{ marginLeft: 0.5 }}
        >
          PMS
        </Typography>
      </Box>
      <Box>
        <Typography
          fontFamily={"inter"}
          fontSize={"10px"}
          fontWeight={500}
          sx={{ color: "#12B76A" }}
        >
          +0.37
        </Typography>
      </Box>
    </Box>

    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mt={0.5}
    >
      <Typography
        fontFamily={"inter"}
        fontSize={"10px"}
        fontWeight={500}
        color="#A3A3A3"
      >
        Premium Motor Spirit
      </Typography>
      <Typography
        fontFamily={"inter"}
        fontSize={"10px"}
        fontWeight={500}
        sx={{ color: "#12B76A" }}
      >
        +0.09%
      </Typography>
    </Box>

    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mt={2}
    >
      <Box
        width={135}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography
            fontFamily={"inter"}
            fontSize={"8px"}
            fontWeight={500}
            color="#A3A3A3"
          >
            Highest price
          </Typography>
          <Typography
            fontFamily={"inter"}
            fontSize={"8px"}
            fontWeight={500}
            color="#A3A3A3"
          >
            800.12
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mt={0.3}
        >
          <Typography
            fontFamily={"inter"}
            fontSize={"8px"}
            fontWeight={500}
            color="#A3A3A3"
          >
            Median price
          </Typography>
          <Typography
            fontFamily={"inter"}
            fontSize={"8px"}
            fontWeight={500}
            color="#A3A3A3"
          >
            712.49
          </Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mt={0.3}
        >
          <Typography
            fontFamily={"inter"}
            fontSize={"8px"}
            fontWeight={500}
            color="#A3A3A3"
          >
            Lowest price
          </Typography>
          <Typography
            fontFamily={"inter"}
            fontSize={"8px"}
            fontWeight={500}
            color="#A3A3A3"
          >
            700.5
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography
          fontFamily={"inter"}
          fontSize={"15px"}
          fontWeight={500}
          color="#FFFFFF"
        >
          N714.26
        </Typography>
      </Box>
    </Box>
    <Box
      width={"100%"}
      display="flex"
      justifyContent="center"
      alignItems="center"
      height={130}
      mt={-2.5}
    >
      <Image src={Chart3} alt="PMS Logo" height={90} width={320} />
    </Box>
  </Box>
);

const RetailProduct = () => {
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

export default RetailProduct;
