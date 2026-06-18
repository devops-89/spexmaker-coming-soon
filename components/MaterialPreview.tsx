"use client";

import React, { useState } from "react";
import { Box, Typography, Stack, Grid, Fade } from "@mui/material";
import { COLORS } from "@/utils/enum";

interface Material {
  id: string;
  name: string;
  colorCode: string;
  description: string;
  strokeColor: string;
  lensGradient: [string, string];
  reflectionColor: string;
}

const MATERIALS: Material[] = [
  {
    id: "obsidian",
    name: "Obsidian Acetate",
    colorCode: "#171717",
    description: "Hand-polished bio-cellulose acetate. Solid obsidian hue, high gloss finish.",
    strokeColor: "#171717",
    lensGradient: ["rgba(0,0,0,0.05)", "rgba(255,236,212,0.08)"],
    reflectionColor: "rgba(255, 255, 255, 0.12)"
  },
  {
    id: "champagne",
    name: "Champagne Gold Titanium",
    colorCode: "#dfc39e",
    description: "Aerospace-grade Japanese titanium. Plated in champagne gold for a weightless luxury feel.",
    strokeColor: "#e6cbaf",
    lensGradient: ["rgba(230, 203, 175, 0.05)", "rgba(255,236,212,0.1)"],
    reflectionColor: "rgba(255, 255, 255, 0.2)"
  },
  {
    id: "tortoise",
    name: "Classic Tortoise Bio-shell",
    colorCode: "#8a5229",
    description: "Custom formulated bio-acetate. Deep amber and organic brown patterns, unique to each frame.",
    strokeColor: "#9c6035",
    lensGradient: ["rgba(156, 96, 53, 0.05)", "rgba(255,236,212,0.08)"],
    reflectionColor: "rgba(255, 255, 255, 0.15)"
  },
  {
    id: "emerald",
    name: "Forest Green Acetate",
    colorCode: "#2e4a3f",
    description: "Vibrant botanical acetate. Inspired by deep alpine forestry, sustainably crafted.",
    strokeColor: "#385c4e",
    lensGradient: ["rgba(56, 92, 78, 0.05)", "rgba(255,236,212,0.08)"],
    reflectionColor: "rgba(255, 255, 255, 0.12)"
  }
];

export default function MaterialPreview() {
  const [activeMaterial, setActiveMaterial] = useState<Material>(MATERIALS[0]);

  return (
    <Box
      className="glass-panel"
      sx={{
        p: { xs: 3, sm: 4 },
        borderRadius: "24px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 8px 32px 0 rgba(30, 21, 14, 0.3)",
      }}
    >
      <Box>
        <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography
            variant="overline"
            sx={{
              color: "rgba(255, 236, 212, 0.5)",
              letterSpacing: "0.2em",
              fontWeight: 600,
              fontSize: "0.7rem",
            }}
          >
            INTERACTIVE PREVIEW
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: COLORS.SECONDARY,
              backgroundColor: "rgba(255, 236, 212, 0.08)",
              py: 0.5,
              px: 1.5,
              borderRadius: "20px",
              fontSize: "0.75rem",
              fontWeight: 500,
            }}
          >
            Beta Customizer v0.1
          </Typography>
        </Stack>

        {/* Vector SVG Glasses Graphics with gentel float animation */}
        <Box
          className="float-animation"
          sx={{
            width: "100%",
            height: { xs: 150, sm: 200 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            my: 2,
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 400 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ maxWidth: "340px" }}
          >
            {/* Lenses */}
            {/* Left Lens */}
            <path
              d="M 120 40 C 60 40 50 110 100 110 C 150 110 160 40 120 40 Z"
              fill={`url(#lensGrad-${activeMaterial.id})`}
            />
            {/* Right Lens */}
            <path
              d="M 280 40 C 240 40 250 110 300 110 C 350 110 340 40 280 40 Z"
              fill={`url(#lensGrad-${activeMaterial.id})`}
            />

            {/* Lens Reflection Glare lines */}
            <path
              d="M 65 60 L 95 90 M 75 55 L 105 85"
              stroke={activeMaterial.reflectionColor}
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.6"
            />
            <path
              d="M 245 60 L 275 90 M 255 55 L 285 85"
              stroke={activeMaterial.reflectionColor}
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.6"
            />

            {/* Frame outline (The main eyeglasses acetate/metal body) */}
            {/* Left Rim */}
            <path
              d="M 120 37 C 55 37 45 113 100 113 C 155 113 165 37 120 37 Z"
              stroke={activeMaterial.strokeColor}
              strokeWidth="7"
              strokeLinejoin="round"
              style={{ transition: "stroke 0.4s ease" }}
            />
            {/* Right Rim */}
            <path
              d="M 280 37 C 235 37 245 113 300 113 C 355 113 345 37 280 37 Z"
              stroke={activeMaterial.strokeColor}
              strokeWidth="7"
              strokeLinejoin="round"
              style={{ transition: "stroke 0.4s ease" }}
            />

            {/* Bridge (Middle bar connecting rims) */}
            <path
              d="M 163 60 C 180 50 220 50 237 60"
              stroke={activeMaterial.strokeColor}
              strokeWidth="6"
              strokeLinecap="round"
              style={{ transition: "stroke 0.4s ease" }}
            />

            {/* Temples (Left and Right arms going back) */}
            <path
              d="M 50 65 C 20 65 15 50 15 35"
              stroke={activeMaterial.strokeColor}
              strokeWidth="5"
              strokeLinecap="round"
              style={{ transition: "stroke 0.4s ease" }}
            />
            <path
              d="M 350 65 C 380 65 385 50 385 35"
              stroke={activeMaterial.strokeColor}
              strokeWidth="5"
              strokeLinecap="round"
              style={{ transition: "stroke 0.4s ease" }}
            />

            {/* Nose pads connection */}
            <path d="M 145 80 C 148 85 145 92 142 95" stroke={activeMaterial.strokeColor} strokeWidth="3" />
            <path d="M 255 80 C 252 85 255 92 258 95" stroke={activeMaterial.strokeColor} strokeWidth="3" />

            {/* SVG Gradients definitions */}
            <defs>
              {MATERIALS.map((mat) => (
                <linearGradient key={mat.id} id={`lensGrad-${mat.id}`} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor={mat.lensGradient[0]} />
                  <stop offset="100%" stopColor={mat.lensGradient[1]} />
                </linearGradient>
              ))}
            </defs>
          </svg>
        </Box>
      </Box>

      {/* Swatch Toggles & Text */}
      <Box>
        {/* Dynamic details section */}
        <Box sx={{ minHeight: 70, mb: 3 }}>
          <Fade in={true} key={activeMaterial.id} timeout={400}>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "var(--font-aglatia), serif",
                  fontSize: "1.05rem",
                  color: COLORS.SECONDARY,
                  fontWeight: 600,
                  mb: 0.5,
                }}
              >
                {activeMaterial.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255, 236, 212, 0.6)",
                  fontSize: "0.82rem",
                  lineHeight: 1.4,
                }}
              >
                {activeMaterial.description}
              </Typography>
            </Box>
          </Fade>
        </Box>

        {/* Circular Color Swatches */}
        <Stack direction="row" spacing={2} sx={{ mb: 1 }}>
          {MATERIALS.map((mat) => {
            const isActive = mat.id === activeMaterial.id;
            return (
              <Box
                key={mat.id}
                onClick={() => setActiveMaterial(mat)}
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  backgroundColor: mat.colorCode,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: isActive ? `2px solid ${COLORS.SECONDARY}` : "2px solid transparent",
                  outline: isActive ? `1px solid ${COLORS.SECONDARY}66` : "1px solid transparent",
                  outlineOffset: 3,
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.15)",
                  },
                }}
              />
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
}
