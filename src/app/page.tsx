"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
//import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Image from "next/image";
import Log from "../assets/img/log.png";


export default function Home() {
  const router = useRouter();
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => setFadeIn(false), 2000);
    const routeTimer = setTimeout(() => router.push("/dash"), 1000);
    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(routeTimer);
    };
  }, [router]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Fade in={fadeIn} timeout={1000}>
       <Image src={Log} alt="Logo" width={200} height={200} style={{borderRadius:8}}/>
      </Fade>
    </Box>
  );
}
