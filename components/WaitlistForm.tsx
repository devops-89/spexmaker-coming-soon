"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  CircularProgress,
  Fade,
  Stack,
  Zoom,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { COLORS } from "@/utils/enum";

export default function WaitlistForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [waitlistSpot, setWaitlistSpot] = useState(0);

  useEffect(() => {
    // Check if user is already signed up
    const saved = localStorage.getItem("spexmaker_signed_up");
    if (saved) {
      setStatus("success");
      setWaitlistSpot(parseInt(saved, 10));
    }
  }, []);

  const handleJoin = () => {
    setStatus("loading");

    // Simulate luxury API call with delay
    setTimeout(() => {
      const spot = Math.floor(Math.random() * 80) + 1482;
      localStorage.setItem("spexmaker_signed_up", String(spot));
      setWaitlistSpot(spot);
      setStatus("success");
    }, 1400);
  };

  if (status === "success") {
    return (
      <Zoom in={true} style={{ transitionDelay: "100ms" }}>
        <Box
          className="glass-panel pulse-animation"
          sx={{
            p: 4,
            borderRadius: "24px",
            textAlign: "center",
            maxWidth: 400,
            mx: "auto",
            boxShadow: `0 8px 32px 0 rgba(255, 236, 212, 0.05)`,
            border: `1px solid ${COLORS.SECONDARY}22`,
            transition: "all 0.5s ease",
          }}
        >
          <CheckCircleOutlinedIcon
            sx={{
              fontSize: 44,
              color: COLORS.SECONDARY,
              mb: 1.5,
              opacity: 0.9,
            }}
          />
          <Typography
            variant="h5"
            sx={{
              fontFamily: "var(--font-aglatia), serif",
              mb: 1,
              color: COLORS.SECONDARY,
              fontWeight: 600,
            }}
          >
            Access Granted
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255, 236, 212, 0.7)",
              mb: 2.5,
              fontSize: "0.85rem",
            }}
          >
            You have successfully joined the exclusive circle. We'll invite you
            when your portal opens.
          </Typography>
          <Box
            sx={{
              display: "inline-block",
              py: 1,
              px: 2.5,
              borderRadius: "14px",
              backgroundColor: "rgba(255, 236, 212, 0.04)",
              border: "1px dashed rgba(255, 236, 212, 0.2)",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "rgba(255, 236, 212, 0.4)",
                display: "block",
                fontSize: "0.65rem",
                letterSpacing: "0.08em",
              }}
            >
              YOUR EXCLUSIVE QUEUE SPOT
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "monospace",
                color: COLORS.SECONDARY,
                fontWeight: 700,
                fontSize: "1.1rem",
              }}
            >
              #{waitlistSpot}
            </Typography>
          </Box>
        </Box>
      </Zoom>
    );
  }

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", width: "100%", py: 1 }}
    >
      {status === "loading" ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 70,
            height: 70,
            borderRadius: "50%",
            backgroundColor: "rgba(255, 236, 212, 0.05)",
            border: `1px solid rgba(255, 236, 212, 0.3)`,
          }}
        >
          <CircularProgress size={28} sx={{ color: COLORS.SECONDARY }} />
        </Box>
      ) : (
        <Button
          onClick={handleJoin}
          variant="contained"
          sx={{
            backgroundColor: COLORS.SECONDARY,
            color: COLORS.PRIMARY,
            borderRadius: "40px",
            fontWeight: 600,
            fontSize: "1.05rem",
            px: { xs: 4, sm: 6 },
            py: 2.2,
            whiteSpace: "nowrap",
            boxShadow: `0 4px 25px 0 rgba(255, 236, 212, 0.15)`,
            position: "relative",
            overflow: "hidden",
            transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: "-100%",
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.4), transparent)",
              transition: "all 0.6s",
            },
            "&:hover": {
              backgroundColor: "#ffffff",
              transform: "scale(1.04) translateY(-2px)",
              boxShadow: `0 8px 30px 0 rgba(255, 236, 212, 0.35)`,
              "&::before": {
                left: "100%",
              },
            },
          }}
        >
          <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
            <span>Request Access</span>
            <ArrowForwardIcon sx={{ fontSize: 18 }} />
          </Stack>
        </Button>
      )}
    </Box>
  );
}
