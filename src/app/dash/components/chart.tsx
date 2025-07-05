"use client";
import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { PetrolData } from "./static-data/petrol-data";

interface PMSProps {
  color?: string;
  height?: number;
  width?: number;
}

export default function PMSChart({
  color = "#12B76A",
  height = 100,
  width = 250,
}: PMSProps) {
  // Helper to format date to weekday
  const getWeekday = (date: Date) =>
    date.toLocaleDateString("en-US", { weekday: "short" }); // Mon, Tue, ...

  // Map data to weekday and value
  const weekdayMap = new Map<string, number>();

  PetrolData.forEach((item) => {
    const date = new Date(item.Period);
    const weekday = getWeekday(date);
    // Keep only the first occurrence of each weekday
    if (!weekdayMap.has(weekday)) {
      weekdayMap.set(weekday, item.PMS);
    }
  });

  const weekdays = Array.from(weekdayMap.keys());
  const values = Array.from(weekdayMap.values());

  return (
    <LineChart
      xAxis={[
        {
          data: weekdays, // ['Mon', 'Tue', ...]
          scaleType: "band", // categorical
          tickLabelStyle: { fill: "white" },
        },
      ]}
      series={[
        {
          data: values,
          area: true,
          color: color,
        },
      ]}
      height={height}
      width={width}
    />
  );
}
