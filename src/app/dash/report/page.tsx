"use client";
import Box from "@mui/material/Box";
import React, { useState } from "react";
//import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

import Report1 from "../../../assets/svg/report1.svg";
import Report2 from "../../../assets/img/report1.png";
import Grid from "@mui/material/Grid";
const imageData = [
  { src: Report2, alt: "Report 1", label: "PMS - Aug 12-17" },
  { src: Report2, alt: "Report 2", label: "DPK - Aug 12-17" },
  { src: Report2, alt: "Report 3", label: "AGO - Aug 12-17" },
  { src: Report2, alt: "Report 4", label: "ICE - Aug 12-17" },
  { src: Report2, alt: "Report 1", label: "PMS - Aug 12-17" },
  { src: Report2, alt: "Report 2", label: "DPK - Aug 12-17" },
  { src: Report2, alt: "Report 3", label: "AGO - Aug 12-17" },
  { src: Report2, alt: "Report 4", label: "ICE - Aug 12-17" },
  { src: Report2, alt: "Report 1", label: "PMS - Aug 12-17" },
  { src: Report2, alt: "Report 2", label: "DPK - Aug 12-17" },
  { src: Report2, alt: "Report 3", label: "AGO - Aug 12-17" },
  { src: Report2, alt: "Report 4", label: "ICE - Aug 12-17" },
  { src: Report2, alt: "Report 1", label: "PMS - Aug 12-17" },
  { src: Report2, alt: "Report 2", label: "DPK - Aug 12-17" },
  { src: Report2, alt: "Report 3", label: "AGO - Aug 12-17" },
  { src: Report2, alt: "Report 4", label: "ICE - Aug 12-17" },
  { src: Report2, alt: "Report 1", label: "PMS - Aug 12-17" },
  { src: Report2, alt: "Report 2", label: "DPK - Aug 12-17" },
  { src: Report2, alt: "Report 3", label: "AGO - Aug 12-17" },
  { src: Report2, alt: "Report 4", label: "ICE - Aug 12-17" },
  { src: Report2, alt: "Report 1", label: "PMS - Aug 12-17" },
  { src: Report2, alt: "Report 2", label: "DPK - Aug 12-17" },
  { src: Report2, alt: "Report 3", label: "AGO - Aug 12-17" },
  { src: Report2, alt: "Report 4", label: "ICE - Aug 12-17" },
];
const reportData = [
  { src: Report2, title: "PMS", date: "Aug 12 - 17" },
  { src: Report2, title: "DPK", date: "Aug 12-17" },
  { src: Report2, title: "AGO", date: "Aug 12-17" },
  { src: Report2, title: "ICE", date: "Aug 12-17" },
  { src: Report2, title: "LPG", date: "Aug 12-17" },
];

const SmallCard = () => (
  <Box
    id="s"
    sx={{
      width: 300,
      height: 280,
      bgcolor: "#171717",
      borderRadius: "20px",
      p: 1,
    }}
  >
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box display="flex" alignItems="center">
        <Image src={Report1} alt="PMS Logo" height={27} width={27} />
        <Typography
          fontFamily={"inter"}
          fontSize={"12px"}
          fontWeight={500}
          color="#FAFAFA"
          sx={{ marginLeft: 0.5 }}
        >
          Reports - week 31
        </Typography>
      </Box>
    </Box>
    <Box mt={2}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {imageData.slice(0, 4).map((item, idx) => (
          <Grid size={6} key={idx}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              sx={{ p: 1 }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                height={27}
                width={27}
                style={{ marginBottom: 8 }}
              />
              <Typography
                fontFamily="Inter"
                fontSize="12px"
                fontWeight={400}
                color="#A3A3A3"
              >
                {item.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
);

const MediumCard = () => (
  <Box
    id="m"
    sx={{
      width: 452,
      height: 200,
      bgcolor: "#171717",
      borderRadius: "20px",
      p: 1,
    }}
  >
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mb={1}
    >
      <Box display="flex" alignItems="center">
        <Image src={Report1} alt="PMS Logo" height={27} width={27} />
        <Typography
          fontFamily={"inter"}
          fontSize={"10px"}
          fontWeight={500}
          color="#FAFAFA"
          sx={{ marginLeft: 0.5 }}
        >
          Reports - week 31
        </Typography>
      </Box>
    </Box>
    <Grid container spacing={2}>
      {reportData.map((item, idx) => (
        <Grid size={4} key={idx}>
          <Box
            display="flex"
            alignItems="center"
            gap={2}
            bgcolor="#8280803D"
            p={1}
            borderRadius="8px"
            width={105}
          >
            {/* Icon + Texts */}
            <Box display="flex" flexDirection="column">
              <Box display="flex" alignItems="center">
                <Image
                  src={item.src}
                  alt="Report Logo"
                  height={27}
                  width={27}
                />
                <Box display="flex" flexDirection="column" px={1}>
                  <Typography
                    fontFamily="Inter"
                    fontSize="12px"
                    fontWeight={400}
                    color="#FAFAFA"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    fontFamily="Inter"
                    fontSize="8px"
                    fontWeight={400}
                    color="#A3A3A3"
                  >
                    {item.date}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      my={1}
    >
      <Box display="flex" alignItems="center">
        <Image src={Report1} alt="PMS Logo" height={27} width={27} />
        <Typography
          fontFamily={"inter"}
          fontSize={"10px"}
          fontWeight={500}
          color="#FAFAFA"
          sx={{ marginLeft: 0.5 }}
        >
          Reports - week 31
        </Typography>
      </Box>
    </Box>
  </Box>
);

const LargeCard = () => {


  // Starting from Week 31 (adjust as needed)
  const initialWeek = 31;
 

  return (
    <Box
      id="l"
      sx={{
        width: 400,
        height: 280,
        bgcolor: "#171717",
        borderRadius: "20px",
        p: 1,
        overflow: "auto", // Added for scrollable content
        scrollbarWidth: "none", // Firefox
        "&::-webkit-scrollbar": {
          display: "none", // Chrome/Safari/Edge
        },
      }}
    >
      {/* Header with initial week */}
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <Image src={Report1} alt="PMS Logo" height={27} width={37} />
          <Typography
            fontFamily={"inter"}
            fontSize={"12px"}
            fontWeight={500}
            color="#FAFAFA"
            sx={{ marginLeft: 0.5 }}
          >
            Reports - week {initialWeek}
          </Typography>
        </Box>
      </Box>

      {/* Grid with items and week separators */}
      <Box mt={2}>
        <Grid container spacing={0} justifyContent="flex-start">
          {imageData.map((item, idx) => {
            // Insert week separator after every 5 items (except first group)
            const shouldInsertWeekSeparator = idx > 0 && idx % 5 === 0;

            return (
              <React.Fragment key={idx}>
                {shouldInsertWeekSeparator && (
                  <Grid size={12} sx={{ mt: 1, mb: 1 }}>
                    <Box display="flex" alignItems="center">
                      <Image
                        src={Report1}
                        alt="PMS Logo"
                        height={27}
                        width={37}
                      />
                      <Typography
                        fontFamily={"inter"}
                        fontSize={"12px"}
                        fontWeight={500}
                        color="#FAFAFA"
                        sx={{ marginLeft: 0.5 }}
                      >
                        Reports - week {initialWeek - Math.floor(idx / 5)}
                      </Typography>
                    </Box>
                  </Grid>
                )}

                <Grid size={2.4}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    sx={{ p: 1 }}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      height={27}
                      width={27}
                      style={{ marginBottom: 8 }}
                    />
                    <Typography
                      fontFamily="Inter"
                      fontSize="7px"
                      fontWeight={400}
                      color="#A3A3A3"
                    >
                      {item.label}
                    </Typography>
                  </Box>
                </Grid>
              </React.Fragment>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

const Report = () => {
  const [size, setSize] = useState<"S" | "M" | "L">("S");

  return (
    <Box mb={2}>
      <Card
        sx={{
          maxWidth: 440,
          //  my: 4,

          backgroundColor: "#333",
          borderRadius: 5,
          color: "#fff",
        }}
      >
        <CardContent>
          <Typography fontFamily={"inter"} fontSize="14px" color="#F5F5F5">
            Report widget
          </Typography>

          <Typography
            fontFamily={"inter"}
            fontSize="11px"
            color="#D4D4D4"
            mb={2}
          >
            Get comprehensive reports & insights
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

export default Report;
