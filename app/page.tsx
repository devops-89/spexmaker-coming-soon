"use client";

import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";

import WaitlistForm from "@/components/WaitlistForm";
import { COLORS } from "@/utils/enum";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated Floating Background Spheres */}
      <Box className="ambient-glow glow-1" />
      <Box className="ambient-glow glow-2" />

      {/* Main Content Area */}
      <Container
        maxWidth="md"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          py: { xs: 8, md: 12 },
          zIndex: 1,
        }}
      >
        <Stack
          spacing={4}
          sx={{ alignItems: "center", width: "100%", mb: { xs: 8, md: 12 } }}
        >
          {/* Badge */}
          <Box
            className="fade-in-up"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              border: "1px solid rgba(255, 236, 212, 0.2)",
              borderRadius: "20px",
              px: 2,
              py: 0.5,
              backgroundColor: "rgba(255, 236, 212, 0.03)",
              animationDelay: "0.15s",
              opacity: 0,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: COLORS.SECONDARY,
                fontWeight: 500,
                letterSpacing: "0.12em",
                fontSize: "0.75rem",
              }}
            >
              BESPOKE EYEWEAR DESIGN STUDIO
            </Typography>
          </Box>

          {/* Title */}
          <Typography
            variant="h1"
            className="fade-in-up"
            sx={{
              fontSize: { xs: "2.8rem", sm: "4.2rem", md: "5rem" },
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              color: COLORS.SECONDARY,
              fontFamily: "var(--font-aglatia), serif",
              animationDelay: "0.3s",
              opacity: 0,
              maxWidth: 750,
            }}
          >
            Vision, Tailored Precisely to Your Face.
          </Typography>

          {/* Subtitle description */}
          <Typography
            variant="body1"
            className="fade-in-up"
            sx={{
              fontSize: { xs: "1.05rem", sm: "1.2rem" },
              color: "rgba(255, 236, 212, 0.7)",
              fontWeight: 300,
              lineHeight: 1.7,
              maxWidth: 640,
              animationDelay: "0.45s",
              opacity: 0,
            }}
          >
            Spexmaker is redefining optics. By scanning your facial proportions
            in 3D, we engineer bespoke, weightless titanium frames crafted
            entirely around your measurements.
          </Typography>

          {/* Waitlist Single Button CTA */}
          {/* <Stack
            className="fade-in-up"
            sx={{
              animationDelay: "0.6s",
              opacity: 0,
              width: "100%",
              alignItems: "center",
            }}
          >
            <WaitlistForm />
          </Stack> */}
        </Stack>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 4,
          borderTop: "1px solid rgba(255, 236, 212, 0.05)",
          backgroundColor: "rgba(20, 14, 9, 0.5)",
          mt: "auto",
          zIndex: 1,
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction="row"
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "rgba(255, 236, 212, 0.4)", fontSize: "0.8rem" }}
            >
              &copy; {new Date().getFullYear()} SPEXMAKER Studio. All rights
              reserved.
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
