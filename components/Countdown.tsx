"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography, Stack, useTheme } from "@mui/material";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const theme = useTheme();
  
  // Launch target: July 31, 2026
  const targetDate = new Date("2026-07-31T00:00:00+05:30").getTime();
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate - new Date().getTime();
      let newTimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      setTimeLeft(newTimeLeft);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBlocks = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINS", value: timeLeft.minutes },
    { label: "SECS", value: timeLeft.seconds }
  ];

  return (
    <Box sx={{ mt: 3, mb: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography
        variant="overline"
        sx={{
          color: "rgba(255, 236, 212, 0.5)",
          letterSpacing: "0.2em",
          fontWeight: 600,
          display: "block",
          mb: 1.5,
          fontSize: "0.75rem",
          textAlign: "center",
        }}
      >
        EXCLUSIVE LAUNCH COUNTDOWN
      </Typography>
      
      <Stack direction="row" spacing={{ xs: 1.5, sm: 2.5 }} sx={{ justifyContent: "center" }}>
        {timeBlocks.map((block, idx) => (
          <Box
            key={idx}
            className="glass-panel"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: 70, sm: 85 },
              height: { xs: 80, sm: 95 },
              borderRadius: "16px",
              boxShadow: "0 8px 32px 0 rgba(30, 21, 14, 0.37)",
              transition: "transform 0.3s ease, border-color 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                borderColor: "rgba(255, 236, 212, 0.35)",
                boxShadow: `0 8px 32px 0 rgba(255, 236, 212, 0.05)`,
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1.75rem", sm: "2.5rem" },
                color: theme.palette.text.primary,
                lineHeight: 1,
                mb: 0.5,
                fontWeight: 600,
                // Aglatia font style
                fontFamily: "var(--font-aglatia), serif",
              }}
            >
              {String(block.value).padStart(2, "0")}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                fontSize: { xs: "0.6rem", sm: "0.7rem" },
                color: "rgba(255, 236, 212, 0.4)",
                letterSpacing: "0.15em",
                fontWeight: 500,
              }}
            >
              {block.label}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
