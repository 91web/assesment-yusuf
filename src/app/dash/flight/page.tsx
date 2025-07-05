"use client";
import Box from "@mui/material/Box";
import React, { useState } from "react";
//import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Flight1 from "../../../assets/svg/flight1.svg";
import FlightChart1 from "../../../assets/img/flight-chart1.png";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import FlightTab from "./components/tab";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const SmallCard = () => {
  return (
    <Box
      id="s"
      sx={{
        width: 250,
        height: 250,
        bgcolor: "#171717",
        borderRadius: "20px",
        p: 2,
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <Image src={Flight1} alt="PMS Logo" height={27} width={27} />
          <Typography
            fontFamily={"inter"}
            fontSize={"20px"}
            fontWeight={500}
            color="#FAFAFA"
            sx={{ marginLeft: 0.5 }}
          >
            284,774{" "}
            <span style={{ fontWeight: 400, fontSize: 12 }}>Flights</span>
          </Typography>
        </Box>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
        <Image src={FlightChart1} alt="PMS Logo" height={72} width={215} />
      </Box>

      <Box sx={{ width: 90 }}>
        <FlightTab />
      </Box>
    </Box>
  );
};

const MediumCard = () => (
  <Box
    id="m"
    sx={{
      width: 450,
      height: 250,
      bgcolor: "#171717",
      borderRadius: "20px",
      p: 2,
    }}
  >
    <Grid container spacing={1}>
      <Grid size={7}>
        <Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <Image src={Flight1} alt="PMS Logo" height={27} width={27} />
              <Typography
                fontFamily={"inter"}
                fontSize={"20px"}
                fontWeight={500}
                color="#FAFAFA"
                sx={{ marginLeft: 0.5 }}
              >
                284,774{" "}
                <span style={{ fontWeight: 400, fontSize: 12 }}>Flights</span>
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={2}
          >
            <Image src={FlightChart1} alt="PMS Logo" height={72} width={215} />
          </Box>
          <Box mt={1}>
            <FlightTab />
          </Box>
        </Box>
      </Grid>
      <Grid size={5}>
        <Box pt={9}>
          <Table size="small">
            <TableBody>
              {[
                {
                  name: "Murtala Muhammed International Airport",
                  flights: "12,489",
                },
                {
                  name: "Nnamdi Azikiwe International Airport",
                  flights: "934,483",
                },
                {
                  name: "Mallam Aminu Kano International Airport",
                  flights: "10,722",
                },
                {
                  name: "Port Harcourt International Airport",
                  flights: "9,823",
                },
                { name: "Akanu Ibiam International Airport", flights: "489" },
                { name: "Muritala Mohammed Airport", flights: "89" },
              ].map((row) => (
                <TableRow
                  key={row.name}
                  sx={{
                    "& td": {
                      paddingTop: "2px",
                      paddingBottom: "2px",
                      paddingLeft: "0px",
                      paddingRight: "0px",
                    },
                  }}
                >
                  <TableCell
                    sx={{
                      fontFamily: "inter",
                      fontSize: "9px",
                      color: "#FAFAFA",
                      border: 0,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      paddingRight: "4px",
                    }}
                    title={row.name}
                  >
                    {row.name.length > 24
                      ? row.name.slice(0, 18) + "…"
                      : row.name}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontFamily: "inter",
                      fontSize: "8px",
                      color: "#A3A3A3",
                      border: 0,
                      whiteSpace: "normal",
                      overflow: "visible",
                      textOverflow: "unset",
                      paddingLeft: "4px",
                    }}
                  >
                    {row.flights} flights
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Grid>
    </Grid>
  </Box>
);

const LargeCard = () => (
  <Box
    id="l"
    sx={{
      width: 450,
      height: 250,
      bgcolor: "#171717",
      borderRadius: "20px",
      p: 2,
    }}
  >
    <Grid container spacing={1}>
      <Grid size={12}>
        <Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center">
              <Image src={Flight1} alt="PMS Logo" height={27} width={27} />
              <Typography
                fontFamily={"inter"}
                fontSize={"20px"}
                fontWeight={500}
                color="#FAFAFA"
                sx={{ marginLeft: 0.5 }}
              >
                284,774{" "}
                <span style={{ fontWeight: 400, fontSize: 12 }}>Flights</span>
              </Typography>
            </Box>
            <Box>
              <Typography
                fontFamily="Inter"
                fontSize="10px"
                fontWeight={500}
                textAlign={"right"}
                color="#A3A3A3"
              >
                Private
              </Typography>
              <Box borderRadius={"50%"} color="#F79009"></Box>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={2}
          >
            <Image src={FlightChart1} alt="PMS Logo" height={72} width={215} />
          </Box>
          <Box mt={1}>
            <FlightTab />
          </Box>
        </Box>
      </Grid>
      <Grid size={12}>
        <Box>
          <Table size="small">
            <TableBody>
              {[
                {
                  name: "Murtala Muhammed International Airport",
                  flights: "12,489",
                },
                {
                  name: "Nnamdi Azikiwe International Airport",
                  flights: "934,483",
                },
                {
                  name: "Mallam Aminu Kano International Airport",
                  flights: "10,722",
                },
                {
                  name: "Port Harcourt International Airport",
                  flights: "9,823",
                },
                { name: "Akanu Ibiam International Airport", flights: "489" },
                { name: "Muritala Mohammed Airport", flights: "89" },
              ].map((row) => (
                <TableRow
                  key={row.name}
                  sx={{
                    "& td": {
                      paddingTop: "2px",
                      paddingBottom: "2px",
                      paddingLeft: "0px",
                      paddingRight: "0px",
                    },
                  }}
                >
                  <TableCell
                    sx={{
                      fontFamily: "inter",
                      fontSize: "9px",
                      color: "#FAFAFA",
                      border: 0,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      paddingRight: "4px",
                    }}
                    title={row.name}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontFamily: "inter",
                      fontSize: "8px",
                      color: "#A3A3A3",
                      border: 0,
                      whiteSpace: "normal",
                      overflow: "visible",
                      textOverflow: "unset",
                      paddingLeft: "4px",
                    }}
                  >
                    {row.flights} flights
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Grid>
    </Grid>
  </Box>
);

const FlightWidget = () => {
  const [size, setSize] = useState<"S" | "M" | "L">("S");

  return (
    <Box mb={2}>
      <Card
        sx={{
          maxwidth: 350,
          height: size === "L" ? 530 : "auto", // Set card height to 550 when L
          backgroundColor: "#333",
          borderRadius: 5,
          color: "#fff",
        }}
      >
        <CardContent>
          <Typography fontFamily={"inter"} fontSize="14px" color="#F5F5F5">
            Flight widget
          </Typography>

          <Typography
            fontFamily={"inter"}
            fontSize="12px"
            color="#D4D4D4"
            mb={2}
          >
            View the weekly number of flights, categorized by international and
            domestic routes
          </Typography>

          {/* Display selected card */}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {size === "S" && <SmallCard />}
            {size === "M" && <MediumCard />}
            {size === "L" && <LargeCard />}
          </Box>

          {/* Button Group */}
          <Box
            sx={{
              mt: size === "L" ? 16 : 3, // mt-19 only when L is clicked
              textAlign: "center",
            }}
          >
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

export default FlightWidget;
