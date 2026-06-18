"use client";

import React from "react";
import { Grid, Box, Typography, Stack } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { COLORS } from "@/utils/enum";

interface PillarItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PILLARS: PillarItem[] = [
  {
    icon: <FaceIcon sx={{ fontSize: 28, color: COLORS.SECONDARY, opacity: 0.85 }} />,
    title: "Precision 3D Fit",
    description: "Our proprietary cranial scanning captures 3,000 mapping points to craft frames tailored to your exact facial bone structure."
  },
  {
    icon: <AutoAwesomeIcon sx={{ fontSize: 28, color: COLORS.SECONDARY, opacity: 0.85 }} />,
    title: "Artisanal Materials",
    description: "Sourced from historical Italian mills, our plant-based bio-acetates and aerospace titanium are hand-polished over 48 hours."
  },
  {
    icon: <VisibilityIcon sx={{ fontSize: 28, color: COLORS.SECONDARY, opacity: 0.85 }} />,
    title: "German Engineered Optics",
    description: "Custom-configured lenses incorporating diamond-layer anti-reflective coatings and advanced protection from high-energy digital glare."
  }
];

export default function Pillars() {
  return (
    <Box sx={{ py: { xs: 4, sm: 6 } }}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {PILLARS.map((pillar, idx) => (
          <Grid size={{ xs: 12, md: 4 }} key={idx}>
            <Box
              className="glass-panel"
              sx={{
                p: 3.5,
                borderRadius: "20px",
                height: "100%",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-6px)",
                  borderColor: "rgba(255, 236, 212, 0.25)",
                  boxShadow: "0 12px 30px rgba(255, 236, 212, 0.03)",
                },
              }}
            >
              <Stack direction="row" spacing={2} sx={{ alignItems: "center", mb: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 48,
                    height: 48,
                    borderRadius: "14px",
                    backgroundColor: "rgba(255, 236, 212, 0.05)",
                    border: "1px solid rgba(255, 236, 212, 0.1)",
                  }}
                >
                  {pillar.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    letterSpacing: "0.02em",
                    color: COLORS.SECONDARY,
                  }}
                >
                  {pillar.title}
                </Typography>
              </Stack>
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255, 236, 212, 0.65)",
                  lineHeight: 1.6,
                  fontSize: "0.88rem",
                  fontWeight: 300,
                }}
              >
                {pillar.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
