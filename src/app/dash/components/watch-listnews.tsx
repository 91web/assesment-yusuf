"use client";
import Box from "@mui/material/Box";
import React, { useState } from "react";
//import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import PMS from "../../../assets/svg/pms-logo.svg";
import AGO from "../../../assets/svg/ago.svg";
//import Chart1 from "../../../assets/img/chart1.png";
import Chart2 from "../../../assets/img/chart2.png";
import Chart4 from "../../../assets/img/chart4.png";
import Chart5 from "../../../assets/img/chart5.png";
import Chart6 from "../../../assets/img/chart6.png";
import Chart7 from "../../../assets/img/chart7.png";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Van from "../../../assets/svg/van.svg";
import Product1 from "../../../assets/img/prod1.png";

const SmallCard = () => (
  <Box
    id="s"
    sx={{
      width: { xs: "100%", md: 240 },
      height: { xs: 300, md: 230 },
      bgcolor: "#171717",
      borderRadius: "20px",
      p: 2,
    }}
  >
    <Box>
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
            sx={{ color: "#FAFAFA" }}
          >
            N714.26
          </Typography>
        </Box>
      </Box>

      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box>
          <Typography
            fontFamily={"inter"}
            fontSize={"10px"}
            fontWeight={500}
            color="#A3A3A3"
            // sx={{ marginLeft: 0.5 }}
          >
            Premium Motor Spirit
          </Typography>
        </Box>
        <Box>
          <Typography
            fontFamily={"inter"}
            fontSize={"10px"}
            fontWeight={500}
            sx={{ color: "#12B76A" }}
          >
            +0.37%
          </Typography>
        </Box>
      </Box>
    </Box>
    <Box mt={2}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <Image src={AGO} alt="AAGO logo Logo" height={7} width={7} />
          <Typography
            fontFamily={"inter"}
            fontSize={"12px"}
            fontWeight={600}
            color="#FAFAFA"
            sx={{ marginLeft: 0.5 }}
          >
            AGS
          </Typography>
        </Box>
        <Box>
          <Typography
            fontFamily={"inter"}
            fontSize={"10px"}
            fontWeight={500}
            sx={{ color: "#FAFAFA" }}
          >
            N1249.06
          </Typography>
        </Box>
      </Box>

      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box>
          <Typography
            fontFamily={"inter"}
            fontSize={"10px"}
            fontWeight={500}
            color="#A3A3A3"
            // sx={{ marginLeft: 0.5 }}
          >
            Automotive Gas Oil
          </Typography>
        </Box>
        <Box>
          <Typography
            fontFamily={"inter"}
            fontSize={"10px"}
            fontWeight={500}
            sx={{ color: "#F04438" }}
          >
            -9.01
          </Typography>
        </Box>
      </Box>
    </Box>
    <Box mt={2}>
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
            ICE
          </Typography>
        </Box>
        <Box>
          <Typography
            fontFamily={"inter"}
            fontSize={"10px"}
            fontWeight={500}
            sx={{ color: "#FAFAFA" }}
          >
            N0.00
          </Typography>
        </Box>
      </Box>

      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box>
          <Typography
            fontFamily={"inter"}
            fontSize={"10px"}
            fontWeight={500}
            color="#A3A3A3"
            // sx={{ marginLeft: 0.5 }}
          >
            ICE Brent Crude
          </Typography>
        </Box>
        <Box>
          <Typography
            fontFamily={"inter"}
            fontSize={"10px"}
            fontWeight={500}
            sx={{ color: "#12B76A" }}
          >
            0.00
          </Typography>
        </Box>
      </Box>
    </Box>
    <Box mt={2}>
      <Box width={180}>
        <Image src={Van} alt="PMS Logo" height={72} width={215} />
        <Typography
          fontFamily={"inter"}
          fontSize={"12px"}
          fontWeight={500}
          color="#FFFFFF"
          mt={1}
        >
          Heirs Energies doubles oil production – Official...
        </Typography>
      </Box>
    </Box>
  </Box>
);

const MediumCard = () => (
  <Box
    id="m"
    sx={{
      width: { xs: "100%", md: 312 },
      height: 180,
      bgcolor: "#171717",
      borderRadius: "20px",
      p: 1,
    }}
  >
    <Box display="flex" alignItems="center" gap={{xs:2, sm:3, md:6}}>
      {/* Price Section  and  Icon + Texts in row*/}
      <Box display="flex" alignItems="center" gap={2}>
        {/* Icon + Texts */}
        <Box display="flex" flexDirection="column">
          <Box display="flex" alignItems="center">
            <Image src={PMS} alt="PMS Logo" height={7} width={7} />
            <Typography
              fontFamily="Inter"
              fontSize={{ xs: "8px", md: "12px" }}
              fontWeight={500}
              color="#FAFAFA"
              sx={{ ml: 0.5 }}
            >
              PMS
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Image src={PMS} alt="PMS Logo" height={7} width={7} />
            <Typography
              fontFamily="Inter"
              fontSize="12px"
              fontWeight={600}
              color="#FAFAFA"
              sx={{ ml: 0.5 }}
            >
              ICE
            </Typography>
          </Box>
        </Box>

        {/* Price Section */}
        <Box display="flex" flexDirection="column">
          <Typography
            fontFamily="Inter"
            fontSize="10px"
            fontWeight={500}
            color="#FAFAFA"
          >
            N714.26
          </Typography>
          <Typography
            fontFamily="Inter"
            fontSize="10px"
            fontWeight={500}
            color="#FAFAFA"
          >
            0.00
          </Typography>
        </Box>
      </Box>
   {/* Price Section  and  Icon + Texts in row*/}
      <Box display="flex" alignItems="center" gap={4}>
        {/* Icon + Texts */}
        <Box display="flex" flexDirection="column">
          <Box display="flex" alignItems="center">
            <Image src={AGO} alt="PMS Logo" height={7} width={7} />
            <Typography
              fontFamily="Inter"
              fontSize="10px"
              fontWeight={600}
              color="#FAFAFA"
              sx={{ ml: 0.5 }}
            >
              AGO
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Image src={AGO} alt="PMS Logo" height={7} width={7} />
            <Typography
              fontFamily="Inter"
              fontSize="10px"
              fontWeight={600}
              color="#FAFAFA"
              sx={{ ml: 0.5 }}
            >
              DPK
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Image src={AGO} alt="PMS Logo" height={7} width={7} />
            <Typography
              fontFamily="Inter"
              fontSize="10px"
              fontWeight={600}
              color="#FAFAFA"
              sx={{ ml: 0.5 }}
            >
              LPG
            </Typography>
          </Box>
        </Box>

        {/* Price Section */}
        <Box display="flex" flexDirection="column">
          <Typography
            fontFamily="Inter"
            fontSize="8px"
            fontWeight={500}
            color="#FAFAFA"
            textAlign={"right"}
          >
            N1249.06
          </Typography>
          <Typography
            fontFamily="Inter"
            fontSize="8px"
            fontWeight={500}
            color="#FAFAFA"
            textAlign={"right"}
          >
            N1088.92
          </Typography>
          <Typography
            fontFamily="Inter"
            fontSize="8px"
            fontWeight={500}
            color="#FAFAFA"
            textAlign={"right"}
          >
            N1087.66
          </Typography>
        </Box>
      </Box>
    </Box>

    <Divider sx={{ bgcolor: "#36353A", my: 0.5 }} />
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      //  mt={2}
    >
      <Box width={180}>
        <Image src={Van} alt="PMS Logo" height={72} width={215} />
        <Typography
          fontFamily={"inter"}
          fontSize={"6px"}
          fontWeight={500}
          color="#FFFFFF"
          mt={1}
        >
          Heirs Energies doubles oil production – Official
        </Typography>
        <Typography
          fontFamily={"inter"}
          fontSize={"5px"}
          fontWeight={400}
          color="#A3A3A3"
        >
          Heirs Energies manages five per cent of Nigeria’s oil production and a
          similar share of domestic gas production.
        </Typography>
      </Box>
      <Box>
        <Image src={Product1} alt="Chart" height={45} width={45} />
      </Box>
    </Box>
    <Divider sx={{ bgcolor: "#36353A", my: 0.5 }} />
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      //  mt={2}
    >
      <Box width={180}>
        <Image src={Van} alt="PMS Logo" height={72} width={215} />
        <Typography
          fontFamily={"inter"}
          fontSize={"6px"}
          fontWeight={500}
          color="#FFFFFF"
          mt={1}
        >
          Heirs Energies doubles oil production – Official
        </Typography>
        <Typography
          fontFamily={"inter"}
          fontSize={"5px"}
          fontWeight={400}
          color="#A3A3A3"
        >
          Heirs Energies manages five per cent of Nigeria’s oil production and a
          similar share of domestic gas production.
        </Typography>
      </Box>
      <Box>
        <Image src={Product1} alt="Chart" height={45} width={45} />
      </Box>
    </Box>
  </Box>
);

const LargeCard = () => (
  <Box
    id="l"
    sx={{
      width: { xs: "100%", md: 350 },
      height: 350,
      bgcolor: "#171717",
      borderRadius: "20px",
      p: 1,
    }}
  >
    <Box display="flex" alignItems="center" gap={{ xs: 2, sm: 3, md: 6 }}>
      {/* Price Section  and  Icon + Texts in row*/}
      <Box display="flex" alignItems="center" gap={2}>
        {/* Icon + Texts */}
        <Box display="flex" flexDirection="column">
          <Box display="flex" alignItems="center">
            <Image src={PMS} alt="PMS Logo" height={7} width={7} />
            <Typography
              fontFamily="Inter"
              fontSize={{ xs: "8px", md: "12px" }}
              fontWeight={500}
              color="#FAFAFA"
              sx={{ ml: 0.5 }}
            >
              PMS
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Image src={PMS} alt="PMS Logo" height={7} width={7} />
            <Typography
              fontFamily="Inter"
              fontSize="12px"
              fontWeight={600}
              color="#FAFAFA"
              sx={{ ml: 0.5 }}
            >
              ICE
            </Typography>
          </Box>
        </Box>

        {/* Price Section */}
        <Box display="flex" flexDirection="column">
          <Typography
            fontFamily="Inter"
            fontSize="10px"
            fontWeight={500}
            color="#FAFAFA"
          >
            N714.26
          </Typography>
          <Typography
            fontFamily="Inter"
            fontSize="10px"
            fontWeight={500}
            color="#FAFAFA"
          >
            0.00
          </Typography>
        </Box>
      </Box>
      {/* Price Section  and  Icon + Texts in row*/}
      <Box display="flex" alignItems="center" gap={4}>
        {/* Icon + Texts */}
        <Box display="flex" flexDirection="column">
          <Box display="flex" alignItems="center">
            <Image src={AGO} alt="PMS Logo" height={7} width={7} />
            <Typography
              fontFamily="Inter"
              fontSize="10px"
              fontWeight={600}
              color="#FAFAFA"
              sx={{ ml: 0.5 }}
            >
              AGO
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Image src={AGO} alt="PMS Logo" height={7} width={7} />
            <Typography
              fontFamily="Inter"
              fontSize="10px"
              fontWeight={600}
              color="#FAFAFA"
              sx={{ ml: 0.5 }}
            >
              DPK
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Image src={AGO} alt="PMS Logo" height={7} width={7} />
            <Typography
              fontFamily="Inter"
              fontSize="10px"
              fontWeight={600}
              color="#FAFAFA"
              sx={{ ml: 0.5 }}
            >
              LPG
            </Typography>
          </Box>
        </Box>

        {/* Price Section */}
        <Box display="flex" flexDirection="column">
          <Typography
            fontFamily="Inter"
            fontSize="8px"
            fontWeight={500}
            color="#FAFAFA"
            textAlign={"right"}
          >
            N1249.06
          </Typography>
          <Typography
            fontFamily="Inter"
            fontSize="8px"
            fontWeight={500}
            color="#FAFAFA"
            textAlign={"right"}
          >
            N1088.92
          </Typography>
          <Typography
            fontFamily="Inter"
            fontSize="8px"
            fontWeight={500}
            color="#FAFAFA"
            textAlign={"right"}
          >
            N1087.66
          </Typography>
        </Box>
      </Box>
    </Box>

    <Divider sx={{ bgcolor: "#36353A", my: 0.5 }} />
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      //  mt={2}
    >
      <Box width={180}>
        <Image src={Van} alt="PMS Logo" height={72} width={215} />
        <Typography
          fontFamily={"inter"}
          fontSize={"6px"}
          fontWeight={500}
          color="#FFFFFF"
          mt={1}
        >
          Heirs Energies doubles oil production – Official
        </Typography>
        <Typography
          fontFamily={"inter"}
          fontSize={"5px"}
          fontWeight={400}
          color="#A3A3A3"
        >
          Heirs Energies manages five per cent of Nigeria’s oil production and a
          similar share of domestic gas production.
        </Typography>
      </Box>
      <Box>
        <Image src={Product1} alt="Chart" height={45} width={45} />
      </Box>
    </Box>
    <Divider sx={{ bgcolor: "#36353A", my: 0.5 }} />
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      //  mt={2}
    >
      <Box width={180}>
        <Image src={Van} alt="PMS Logo" height={72} width={215} />
        <Typography
          fontFamily={"inter"}
          fontSize={"6px"}
          fontWeight={500}
          color="#FFFFFF"
          mt={1}
        >
          Heirs Energies doubles oil production – Official
        </Typography>
        <Typography
          fontFamily={"inter"}
          fontSize={"5px"}
          fontWeight={400}
          color="#A3A3A3"
        >
          Heirs Energies manages five per cent of Nigeria’s oil production and a
          similar share of domestic gas production.
        </Typography>
      </Box>
      <Box>
        <Image src={Product1} alt="Chart" height={45} width={45} />
      </Box>
    </Box>
    <Divider sx={{ bgcolor: "#36353A", my: 0.5 }} />
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      //  mt={2}
    >
      <Box width={180}>
        <Image src={Van} alt="PMS Logo" height={72} width={215} />
        <Typography
          fontFamily={"inter"}
          fontSize={"6px"}
          fontWeight={500}
          color="#FFFFFF"
          mt={1}
        >
          Heirs Energies doubles oil production – Official
        </Typography>
        <Typography
          fontFamily={"inter"}
          fontSize={"5px"}
          fontWeight={400}
          color="#A3A3A3"
        >
          Heirs Energies manages five per cent of Nigeria’s oil production and a
          similar share of domestic gas production.
        </Typography>
      </Box>
      <Box>
        <Image src={Product1} alt="Chart" height={45} width={45} />
      </Box>
    </Box>
    <Divider sx={{ bgcolor: "#36353A", my: 0.5 }} />
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      //  mt={2}
    >
      <Box width={180}>
        <Image src={Van} alt="PMS Logo" height={72} width={215} />
        <Typography
          fontFamily={"inter"}
          fontSize={"6px"}
          fontWeight={500}
          color="#FFFFFF"
          mt={1}
        >
          Heirs Energies doubles oil production – Official
        </Typography>
        <Typography
          fontFamily={"inter"}
          fontSize={"5px"}
          fontWeight={400}
          color="#A3A3A3"
        >
          Heirs Energies manages five per cent of Nigeria’s oil production and a
          similar share of domestic gas production.
        </Typography>
      </Box>
      <Box>
        <Image src={Product1} alt="Chart" height={45} width={45} />
      </Box>
    </Box>
    <Divider sx={{ bgcolor: "#36353A", my: 0.5 }} />
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      //  mt={2}
    >
      <Box width={180}>
        <Image src={Van} alt="PMS Logo" height={72} width={215} />
        <Typography
          fontFamily={"inter"}
          fontSize={"6px"}
          fontWeight={500}
          color="#FFFFFF"
          mt={1}
        >
          Heirs Energies doubles oil production – Official
        </Typography>
        <Typography
          fontFamily={"inter"}
          fontSize={"5px"}
          fontWeight={400}
          color="#A3A3A3"
        >
          Heirs Energies manages five per cent of Nigeria’s oil production and a
          similar share of domestic gas production.
        </Typography>
      </Box>
      <Box>
        <Image src={Product1} alt="Chart" height={45} width={45} />
      </Box>
    </Box>
  </Box>
);

const ListNews = () => {
  const [size, setSize] = useState<"S" | "M" | "L">("S");

  return (
    <Box mb={10}>
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
            Watchlist & news
          </Typography>

          <Typography
            fontFamily={"inter"}
            fontSize="12px"
            color="#D4D4D4"
            mb={2}
          >
            View price quotes, track performance and latest news of watchlist
            throughout the week
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

export default ListNews;
