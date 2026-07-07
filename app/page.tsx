"use client";

import React from "react";
import Image from "next/image";
import { Box, Container, Typography, Stack } from "@mui/material";


import Pillars from "@/components/Pillars";

import { COLORS } from "@/utils/enum";
import logo from "@/logo_white.png";

/* ─── Tiny floating particles ─── */
function FloatingParticles() {
  const particles = [
    { top: "15%", left: "8%", delay: "0s", duration: "7s" },
    { top: "25%", left: "85%", delay: "2s", duration: "9s" },
    { top: "60%", left: "12%", delay: "4s", duration: "8s" },
    { top: "70%", left: "90%", delay: "1s", duration: "10s" },
    { top: "40%", left: "50%", delay: "3s", duration: "6s" },
    { top: "80%", left: "30%", delay: "5s", duration: "11s" },
    { top: "10%", left: "60%", delay: "6s", duration: "7s" },
    { top: "50%", left: "75%", delay: "2.5s", duration: "9s" },
  ];

  return (
    <>
      {particles.map((p, i) => (
        <Box
          key={i}
          className="particle"
          sx={{
            top: p.top,
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </>
  );
}

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
      {/* Film grain texture overlay */}
      <Box className="grain-overlay" />

      {/* Animated Floating Background Spheres */}
      <Box className="ambient-glow glow-1" />
      <Box className="ambient-glow glow-2" />
      <Box className="ambient-glow glow-3" />
      <FloatingParticles />

      {/* ═════════════════════════════════════════
          SECTION 1 — HERO
      ═════════════════════════════════════════ */}
      <Box className="section-fullscreen" sx={{ pt: { xs: 6, md: 0 } }}>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            zIndex: 1,
          }}
        >
          <Stack spacing={4} sx={{ alignItems: "center", width: "100%" }}>
            {/* Brand Logo */}
            <Box
              className="fade-in-up"
              sx={{
                position: "relative",
                width: { xs: 150, sm: 180 },
                height: { xs: 38, sm: 45 },
                mb: 1,
                animationDelay: "0.05s",
                opacity: 0,
              }}
            >
              <Image
                src={logo}
                alt="SPEXMAKER Logo"
                fill
                sizes="(max-width: 600px) 150px, 180px"
                style={{ objectFit: "contain" }}
                priority
              />
            </Box>

            {/* Badge pill */}
            <Box
              className="fade-in-up"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                border: "1px solid rgba(255, 236, 212, 0.15)",
                borderRadius: "20px",
                px: 2.5,
                py: 0.7,
                backgroundColor: "rgba(255, 236, 212, 0.03)",
                animationDelay: "0.15s",
                opacity: 0,
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: "#d4a76a",
                  boxShadow: "0 0 8px rgba(212, 167, 106, 0.6)",
                  animation: "pulse-gold 2.5s infinite",
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  color: COLORS.SECONDARY,
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  fontSize: "0.7rem",
                }}
              >
                BESPOKE EYEWEAR DESIGN STUDIO
              </Typography>
            </Box>

            {/* Hero Title */}
            <Typography
              variant="h1"
              className="fade-in-up"
              sx={{
                fontSize: { xs: "2.6rem", sm: "4rem", md: "5.2rem" },
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                color: COLORS.SECONDARY,
                fontFamily: "var(--font-aglatia), serif",
                animationDelay: "0.3s",
                opacity: 0,
                maxWidth: 800,
              }}
            >
              Vision, Tailored{" "}
              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(135deg, #ffecd4 0%, #d4a76a 50%, #c4956a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Precisely
              </Box>{" "}
              to Your Face.
            </Typography>

            {/* Subtitle description */}
            <Typography
              variant="body1"
              className="fade-in-up"
              sx={{
                fontSize: { xs: "1rem", sm: "1.15rem" },
                color: "rgba(255, 236, 212, 0.65)",
                fontWeight: 300,
                lineHeight: 1.75,
                maxWidth: 600,
                animationDelay: "0.45s",
                opacity: 0,
              }}
            >
              Spexmaker is redefining optics. By scanning your facial
              proportions in 3D, we engineer bespoke, weightless titanium frames
              crafted entirely around your measurements.
            </Typography>


          </Stack>
        </Container>

        {/* Scroll indicator */}
        <Box
          className="fade-in-up"
          sx={{
            position: "absolute",
            bottom: { xs: 24, md: 40 },
            left: "50%",
            transform: "translateX(-50%)",
            animationDelay: "1.2s",
            opacity: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: "rgba(255, 236, 212, 0.3)",
              letterSpacing: "0.2em",
              fontSize: "0.6rem",
              textTransform: "uppercase",
            }}
          >
            Scroll to explore
          </Typography>
          <Box
            sx={{
              width: 20,
              height: 32,
              border: "1.5px solid rgba(255, 236, 212, 0.2)",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              pt: "6px",
            }}
          >
            <Box
              sx={{
                width: 3,
                height: 8,
                borderRadius: "3px",
                backgroundColor: "rgba(255, 236, 212, 0.4)",
                animation: "float 2s ease-in-out infinite",
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* ═════════════════════════════════════════
          SECTION 2 — HERO IMAGE SHOWCASE
      ═════════════════════════════════════════ */}
      <Box className="section-block" sx={{ zIndex: 1 }}>
        <Container maxWidth="md">
          {/* Shimmer divider */}
          <Box className="shimmer-line" sx={{ mb: { xs: 6, md: 8 } }} />

          <Stack spacing={4} sx={{ alignItems: "center", textAlign: "center" }}>
            <Typography
              variant="overline"
              sx={{
                color: "rgba(255, 236, 212, 0.4)",
                letterSpacing: "0.25em",
                fontWeight: 500,
                fontSize: "0.7rem",
              }}
            >
              CRAFTSMANSHIP MEETS TECHNOLOGY
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontFamily: "var(--font-aglatia), serif",
                fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3rem" },
                color: COLORS.SECONDARY,
                lineHeight: 1.15,
                maxWidth: 650,
              }}
            >
              Where Art Meets Engineering
            </Typography>

            {/* Hero glasses image */}
            <Box className="hero-image-container" sx={{ my: { xs: 2, md: 4 } }}>
              <Box className="hero-image-glow" />
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: "32px",
                  overflow: "hidden",
                  border: "1px solid rgba(255, 236, 212, 0.08)",
                  boxShadow:
                    "0 24px 80px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 236, 212, 0.04)",
                }}
              >
                <Image
                  src="/images/hero-glasses.png"
                  alt="Premium bespoke titanium eyewear by SPEXMAKER"
                  fill
                  sizes="(max-width: 768px) 90vw, 520px"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </Box>
            </Box>

            {/* Luxury Divider */}
            <Box className="luxury-divider" sx={{ my: 2 }}>
              <Box className="diamond" />
            </Box>

            <Typography
              variant="body1"
              sx={{
                color: "rgba(255, 236, 212, 0.55)",
                fontSize: { xs: "0.95rem", sm: "1.05rem" },
                fontWeight: 300,
                lineHeight: 1.8,
                maxWidth: 540,
                fontStyle: "italic",
              }}
            >
              &ldquo;Each frame is a statement — an intersection of 3,000 data
              points, aerospace-grade titanium, and Italian acetate heritage,
              converging into a single, weightless artefact.&rdquo;
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* ═════════════════════════════════════════
          SECTION 3 — PILLARS (FEATURES)
      ═════════════════════════════════════════ */}
      <Box className="section-block" sx={{ zIndex: 1 }}>
        <Container maxWidth="lg">
          <Box className="shimmer-line" sx={{ mb: { xs: 6, md: 8 } }} />

          <Stack
            spacing={2}
            sx={{ alignItems: "center", textAlign: "center", mb: { xs: 4, md: 6 } }}
          >
            <Typography
              variant="overline"
              sx={{
                color: "rgba(255, 236, 212, 0.4)",
                letterSpacing: "0.25em",
                fontWeight: 500,
                fontSize: "0.7rem",
              }}
            >
              THE SPEXMAKER DIFFERENCE
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontFamily: "var(--font-aglatia), serif",
                fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3rem" },
                color: COLORS.SECONDARY,
                lineHeight: 1.15,
                maxWidth: 600,
              }}
            >
              Three Pillars of Perfection
            </Typography>
          </Stack>

          <Pillars />
        </Container>
      </Box>



      {/* ═════════════════════════════════════════
          FOOTER
      ═════════════════════════════════════════ */}
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
            direction={{ xs: "column", sm: "row" }}
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}
          >
            {/* Logo in footer */}
            <Box
              sx={{
                position: "relative",
                width: 100,
                height: 25,
                opacity: 0.4,
                transition: "opacity 0.3s ease",
                "&:hover": { opacity: 0.7 },
              }}
            >
              <Image
                src={logo}
                alt="SPEXMAKER"
                fill
                sizes="100px"
                style={{ objectFit: "contain" }}
              />
            </Box>

            <Typography
              variant="caption"
              sx={{ color: "rgba(255, 236, 212, 0.35)", fontSize: "0.75rem" }}
            >
              &copy; {new Date().getFullYear()} SPEXMAKER Studio. All rights
              reserved.
            </Typography>

            <Stack direction="row" spacing={3}>
              {["Privacy", "Terms"].map((link) => (
                <Typography
                  key={link}
                  variant="caption"
                  sx={{
                    color: "rgba(255, 236, 212, 0.3)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.08em",
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "rgba(255, 236, 212, 0.7)",
                    },
                  }}
                >
                  {link}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
