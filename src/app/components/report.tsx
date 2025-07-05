"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Report1 from "../../assets/svg/report1.svg";
import Report2 from "../../assets/img/report1.png";
import Grid from "@mui/material/Grid";

const imageData = [
  { src: Report2, alt: "Report 1", label: "PMS - Aug 12-17" },
  { src: Report2, alt: "Report 2", label: "DPK - Aug 12-17" },
  { src: Report2, alt: "Report 3", label: "AGO - Aug 12-17" },
  { src: Report2, alt: "Report 4", label: "ICE - Aug 12-17" },
];

const ReportOverview = () => (
  <Box
    sx={{
      width: 80,
      height: 130,
      bgcolor: "#171717",
      borderRadius: "10px",
      p: 0.5,
    }}
  >
    {/* Header */}
    <Box display="flex" alignItems="center">
      <Image src={Report1} alt="Report Icon" height={14} width={14} />
      <Typography
        fontFamily="Inter"
        fontSize="4px"
        fontWeight={500}
        color="#FAFAFA"
        sx={{ ml: 0.25 }}
      >
        Reports - week 31
      </Typography>
    </Box>

    {/* Grid of Reports */}
    <Box mt={1}>
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        {imageData.map((item, idx) => (
          <Grid size={6} key={idx}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Image
                src={item.src}
                alt={item.alt}
                height={20}
                width={20}
                style={{ marginBottom: 4 }}
              />
              <Typography
                fontFamily="Inter"
                fontSize="3px"
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
export default ReportOverview;
