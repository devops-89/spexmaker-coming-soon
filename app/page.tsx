"use client";

import React from "react";
import Image from "next/image";
import { Box, Container, Typography, Stack } from "@mui/material";

import Pillars from "@/components/Pillars";
import ProductShowcase from "@/components/ProductShowcase";

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

      <Box className="section-fullscreen">
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
      </Box>

      {/* ═════════════════════════════════════════
          SECTION 3 — PRODUCT SHOWCASE
      ═════════════════════════════════════════ */}
      <Box className="section-block" sx={{ zIndex: 1 }}>
        <Container maxWidth="lg">
          {/* <Box className="shimmer-line" sx={{ mb: { xs: 6, md: 8 } }} /> */}

          <Stack
            spacing={2}
            sx={{
              alignItems: "center",
              textAlign: "center",
              mb: { xs: 4, md: 6 },
            }}
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
              EXQUISITE PROTOTYPES
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
              The Bespoke Collection
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "rgba(255, 236, 212, 0.6)",
                fontSize: { xs: "0.9rem", sm: "1rem" },
                fontWeight: 300,
                lineHeight: 1.6,
                maxWidth: 550,
                mb: 2,
              }}
            >
              A showcase of our titanium wireframes, hand-milled acetates, and
              concept designs. Click any frame to inspect the design.
            </Typography>
          </Stack>

          <ProductShowcase />
        </Container>
      </Box>

      <Box className="section-block" sx={{ zIndex: 1 }}>
        <Container maxWidth="lg">
          <Box className="shimmer-line" sx={{ mb: { xs: 6, md: 8 } }} />

          <Stack
            spacing={2}
            sx={{
              alignItems: "center",
              textAlign: "center",
              mb: { xs: 4, md: 6 },
            }}
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

      <Box
        component="footer"
        sx={{
          pt: 6,
          pb: 4,
          borderTop: "1px solid rgba(255, 236, 212, 0.05)",
          backgroundColor: "rgba(20, 14, 9, 0.5)",
          mt: "auto",
          zIndex: 1,
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 3, md: 4 }}
            sx={{
              justifyContent: "space-between",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
              pb: 4,
              borderBottom: "1px solid rgba(255, 236, 212, 0.05)",
              mb: 3,
            }}
          >
            {/* Address */}
            <Box sx={{ maxWidth: { xs: "100%", md: "60%" } }}>
              <Typography
                variant="overline"
                sx={{
                  color: "rgba(255, 236, 212, 0.4)",
                  letterSpacing: "0.2em",
                  fontSize: "0.65rem",
                  display: "block",
                  mb: 1.5,
                }}
              >
                STUDIO ADDRESS
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255, 236, 212, 0.7)",
                  fontSize: "0.85rem",
                  fontWeight: 300,
                  lineHeight: 1.6,
                }}
              >
                Ground Floor, PKS Town Central, Unit No. GA-17-18-19, Greater
                Noida West, Ghaziabad, Ithaira, Uttar Pradesh 201318
              </Typography>
            </Box>

            {/* Phone */}
            <Box sx={{ textAlign: { xs: "center", md: "right" } }}>
              <Typography
                variant="overline"
                sx={{
                  color: "rgba(255, 236, 212, 0.4)",
                  letterSpacing: "0.2em",
                  fontSize: "0.65rem",
                  display: "block",
                  mb: 1.5,
                }}
              >
                CONTACT NUMBER
              </Typography>
              <Typography
                variant="body1"
                component="a"
                href="tel:08796309636"
                sx={{
                  color: COLORS.SECONDARY,
                  fontSize: "1rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                  display: "inline-block",
                  "&:hover": {
                    color: "#ffffff",
                  },
                }}
              >
                087963 09636
              </Typography>
            </Box>
          </Stack>

          {/* Logo, Copyright & Links */}
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

            {/* <Stack direction="row" spacing={3}>
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
            </Stack> */}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
