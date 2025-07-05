"use client";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Image from "next/image";
import Flight1 from "../../assets/svg/flight1.svg";
import PMG from "../../assets/svg/pms-logo.svg";
import FlightChart1 from "../../assets/img/flight-chart1.png";
import FlightTab from "./flight-tab";
import TableBody from "@mui/material/TableBody";

const FlightOverview = () => (
  <Box
    sx={{
      width: 180,
      height: 130,
      background: "linear-gradient(90deg, #171717 57%, #404040 43%)",
      borderRadius: "10px",
      p: 1,
    }}
  >
    <Grid container spacing={0.5}>
      <Grid size={7}>
        <Box display="flex" alignItems="center" gap={0.25}>
          <Image src={Flight1} alt="PMS Logo" height={10} width={10} />

          <Box
            component="div" // Use "div" instead of "Typography" for proper rendering
            fontFamily="Inter"
            fontSize="8px"
            fontWeight={500}
            color="#FAFAFA"
            display="flex"
            alignItems="center"
            gap={0.25}
          >
            284,774
            <span
              style={{ fontWeight: 400, fontSize: "4px", color: "#A3A3A3" }}
            >
              Flights
            </span>
            <Box>
              <Image src={PMG} alt="PMS Logo" height={2} width={2} />
            </Box>
            <Box sx={{ fontWeight: 400, fontSize: "5px", color: "#027A48" }}>
              15%
            </Box>
            <span
              style={{ fontWeight: 400, fontSize: "4px", color: "#A3A3A3" }}
            >
              last week
            </span>
          </Box>
        </Box>
        <Box mt={1} display="flex" justifyContent="center">
          <Image src={FlightChart1} alt="Chart" height={36} width={108} />
        </Box>
        <Box mt={0.5}>
          <FlightTab />
        </Box>
      </Grid>
      <Grid size={5}>
        <Box mt={4}>
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
                      fontSize: "3px",
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
                      fontSize: "3px",
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
export default FlightOverview;
