"use client";
import Box from "@mui/material/Box";
import React, { useState } from "react";
//import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import PMS from "../../../assets/svg/pms-logo.svg";
import Chart1 from "../../../assets/img/chart1.png";
import Chart2 from "../../../assets/img/chart2.png";
//import Chart3 from "../../../assets/img/chart3.png";
import Product1 from "../../../assets/img/prod1.png";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Van from "../../../assets/svg/van.svg";
import Divider from "@mui/material/Divider";
import News1 from "../../../assets/svg/news1.svg";

import News3 from "../../../assets/img/news1.png";
import News4 from "../../../assets/img/news2.png";
import News2 from "../../../assets/svg/news2.svg";
import Van2 from "../../../assets/svg/van2.svg";
import NewsBg from "../../../assets/img/newsbg.png";

const SmallCard = () => (
  <Box
    id="s"
    sx={{
      width: 240,
      height: 240,
      bgcolor: "#171717",
      borderRadius: "20px",
      p: 2,
      backgroundImage: `url(${NewsBg.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: 2,
    }}
  >
    {/* Top box */}
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Image src={News1} alt="PMS Logo" height={25} width={17} />
      <Image src={News2} alt="PMS Logo" height={12} width={7} />
    </Box>
    {/* Bottom box */}
    <Box display="flex" flexDirection="column" alignItems="flex-start">
      <Image src={Van2} alt="PMS Logo" height={22} width={37} />
      <Typography
        fontFamily={"inter"}
        fontSize={"12px"}
        fontWeight={500}
        color="#FFFFFF"
        mt={1}
      >
        Shareholders Enjoy a Massive Windfall as BP Expands Global Operations
      </Typography>
    </Box>
  </Box>
);

const MediumCard = () => (
  <Box
    id="m"
    sx={{
      width: 312,
      height: 170,
      bgcolor: "#171717",
      borderRadius: "20px",
      p: 1,
    }}
  >
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Typography
        fontFamily="Inter"
        fontSize="8px"
        fontWeight={600}
        color="#F04438"
        sx={{ ml: 0.5 }}
      >
        Top Story
      </Typography>
      <Image src={News2} alt="PMS Logo" height={12} width={7} />
    </Box>
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box px={1}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Image src={Van2} alt="PMS Logo" height={25} width={27} />
          <Image src={News1} alt="PMS Logo" height={12} width={17} />
        </Box>
        <Typography
          fontFamily="Inter"
          fontSize="7px"
          fontWeight={600}
          color="#FAFAFA"
        >
          Shareholders Enjoy a Massive Windfall as BP Expands Global Operations
        </Typography>
        <Typography
          fontFamily="Inter"
          fontSize="5px"
          fontWeight={500}
          color="#A3A3A3"
        >
          BP’s shareholders can expect a multibillion-dollar payout this year
          after the oil giant reported better than expected quarterly profits of
          almost $2.8 billion and set out plans to develop a new oil hub in the
          Gulf of Mexico.
        </Typography>
      </Box>
      <Image src={News3} alt="PMS Logo" height={40} width={45} />
    </Box>

    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box px={1}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Image src={Van2} alt="PMS Logo" height={25} width={27} />
          <Image src={News1} alt="PMS Logo" height={12} width={17} />
        </Box>
        <Typography
          fontFamily="Inter"
          fontSize="7px"
          fontWeight={600}
          color="#FAFAFA"
        >
          Eni granted regulator consent for NAOC sales to Oando
        </Typography>
        <Typography
          fontFamily="Inter"
          fontSize="5px"
          fontWeight={500}
          color="#A3A3A3"
        >
          Eni received formal consent from the Nigerian Upstream Petroleum
          Regulatory Commission (NUPRC) for the sale of Nigerian Agip Oil Co.
          (NAOC) Ltd. to Oando Plc. Having already obtained all other relevant
          local and regulatory authorities’ authorizations, the consent allows
          Eni to proceed to the completion of the deal, the company said in a
          release July 24.
        </Typography>
      </Box>
      <Image src={News4} alt="PMS Logo" height={40} width={45} />
    </Box>
  </Box>
);

const LargeCard = () => (
  <Box
    id="L"
    sx={{
      width: 312,
      height: 325,
      bgcolor: "#171717",
      borderRadius: "20px",
      p: 1,
    }}
  >
    <Box display="flex" alignItems="center" gap={2}>
      {/* Icon + Texts */}
      <Box display="flex" flexDirection="column">
        <Box display="flex" alignItems="center">
          <Image src={PMS} alt="PMS Logo" height={7} width={7} />
          <Typography
            fontFamily="Inter"
            fontSize="14px"
            fontWeight={600}
            color="#FAFAFA"
            sx={{ ml: 0.5 }}
          >
            PMS
          </Typography>
        </Box>
        <Typography
          fontFamily="Inter"
          fontSize="8px"
          fontWeight={500}
          color="#A3A3A3"
        >
          Premium Motor Spirit
        </Typography>
      </Box>

      {/* Chart Image */}
      <Box mt={0}>
        <Image src={Chart2} alt="Chart" height={25} width={75} />
      </Box>

      {/* Price Section */}
      <Box display="flex" flexDirection="column">
        <Typography
          fontFamily="Inter"
          fontSize="12px"
          fontWeight={500}
          color="#FAFAFA"
        >
          N714.26
        </Typography>
        <Typography
          fontFamily="Inter"
          fontSize="12px"
          fontWeight={500}
          color="#12B76A"
        >
          +0.37
        </Typography>
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
      // mt={2}
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
      //  mt={1}
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
      //  mt={1}
    >
      <Box width={180}>
        <Image src={Van} alt="PMS Logo" height={72} width={215} />
        <Typography
          fontFamily={"inter"}
          fontSize={"6px"}
          fontWeight={500}
          color="#FFFFFF"
          //   mt={1}
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
          //   mt={1}
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

const ProductNews = () => {
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
            News widget
          </Typography>

          <Typography
            fontFamily={"inter"}
            fontSize="11px"
            color="#D4D4D4"
            mb={2}
          >
            Get the latest industry news and updates
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

export default ProductNews;
