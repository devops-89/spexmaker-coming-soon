"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Box,
  Typography,
  Stack,
  IconButton,
  Modal,
  Fade,
  Backdrop,
  useTheme,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import { COLORS } from "@/utils/enum";

interface Product {
  src: string;
  name: string;
  category: "Titanium" | "Acetate" | "Concept";
  description: string;
  aspectRatio: string; // for masonry rendering
}

const PRODUCTS: Product[] = [
  {
    src: "/images/product/DSC_0728.JPG",
    name: "Bespoke Model T-0728",
    category: "Titanium",
    description:
      "Satin-finished lightweight titanium chassis with customized pantoscopic angle.",
    aspectRatio: "3/4",
  },
  {
    src: "/images/product/DSC_0730.JPG",
    name: "Bespoke Model T-0730",
    category: "Titanium",
    description:
      "Brushed champagne gold alloy frame with laser-carved nose bridge detail.",
    aspectRatio: "1/1",
  },
  {
    src: "/images/product/DSC_0732.JPG",
    name: "Bespoke Model T-0732",
    category: "Titanium",
    description:
      "Dark carbon-coated aerospace titanium frame with integrated comfort springs.",
    aspectRatio: "4/5",
  },
  {
    src: "/images/product/DSC_0744.JPG",
    name: "Bespoke Model T-0744",
    category: "Titanium",
    description:
      "Ultra-fine platinum-plated wireframe, contoured exactly to temple widths.",
    aspectRatio: "3/2",
  },
  {
    src: "/images/product/DSC_0747.png",
    name: "Bespoke Model A-0747",
    category: "Acetate",
    description:
      "Hand-milled and polished bio-cellulose acetate in deep obsidian tone.",
    aspectRatio: "4/3",
  },
  {
    src: "/images/product/DSC_0755.JPG",
    name: "Bespoke Model T-0755",
    category: "Titanium",
    description:
      "Soft rose gold titanium outline, tailored for low nose-bridge profiles.",
    aspectRatio: "3/4",
  },
  {
    src: "/images/product/DSC_0757.JPG",
    name: "Bespoke Model T-0757",
    category: "Titanium",
    description:
      "Minimalist semi-rimless frame styled in high-grade raw titanium alloy.",
    aspectRatio: "4/5",
  },
  {
    src: "/images/product/DSC_0765.JPG",
    name: "Bespoke Model T-0765",
    category: "Titanium",
    description:
      "Flawless dark charcoal matte finish, tailored for square jawline dimensions.",
    aspectRatio: "1/1",
  },
  {
    src: "/images/product/DSC_0772.JPG",
    name: "Bespoke Model T-0772",
    category: "Titanium",
    description:
      "Double-bridge architectural aesthetic in polished aerospace titanium.",
    aspectRatio: "3/2",
  },
  {
    src: "/images/product/DSC_0773.JPG",
    name: "Bespoke Model T-0773",
    category: "Titanium",
    description:
      "Sculpted gunmetal hexagonal frame, optimizing field of vision.",
    aspectRatio: "3/4",
  },
  {
    src: "/images/product/DSC_0778.JPG",
    name: "Bespoke Model T-0778",
    category: "Titanium",
    description:
      "Modern reinterpretation of the iconic aviator, weightless and flexible.",
    aspectRatio: "4/3",
  },
  {
    src: "/images/product/DSC_0782.JPG",
    name: "Bespoke Model T-0782",
    category: "Titanium",
    description:
      "Polished bronze circular frame with integrated anatomical pads.",
    aspectRatio: "1/1",
  },
  {
    src: "/images/product/DSC_0784.JPG",
    name: "Bespoke Model T-0784",
    category: "Titanium",
    description:
      "Ultra-thin luxury rose wireframe with personalized temple engraving.",
    aspectRatio: "4/5",
  },
  {
    src: "/images/product/DSC_0785.png",
    name: "Bespoke Model A-0785",
    category: "Acetate",
    description:
      "Italian tortoiseshell bio-acetate frame with organic color gradients.",
    aspectRatio: "3/4",
  },
  {
    src: "/images/product/DSC_0786.JPG",
    name: "Bespoke Model T-0786",
    category: "Titanium",
    description:
      "Deep indigo anodized titanium wireframe, engineered for high durability.",
    aspectRatio: "3/2",
  },
  {
    src: "/images/product/DSC_0787.jpg",
    name: "Bespoke Model T-0787",
    category: "Titanium",
    description:
      "Matte raw titanium industrial silhouette with exposed rivet detail.",
    aspectRatio: "4/3",
  },
  {
    src: "/images/product/DSC_0788.JPG",
    name: "Bespoke Model T-0788",
    category: "Titanium",
    description:
      "Satin gold classic square shape, calibrated to golden ratio proportions.",
    aspectRatio: "1/1",
  },
  {
    src: "/images/product/DSC_0790.jpg",
    name: "Bespoke Model T-0790",
    category: "Titanium",
    description:
      "Dual-anodized gold and black structure, custom fitted for comfort.",
    aspectRatio: "4/5",
  },
  {
    src: "/images/product/DSC_0797_1.jpg",
    name: "Bespoke Model T-0797",
    category: "Titanium",
    description:
      "Sleek and wire-thin circular structure crafted in weightless alloy.",
    aspectRatio: "3/4",
  },
  {
    src: "/images/product/next.jpeg",
    name: "Bespoke Concept N-X",
    category: "Concept",
    description:
      "Next-generation aerodynamic design prototype exploring frame integration.",
    aspectRatio: "3/2",
  },
];

const CATEGORIES = ["All", "Titanium", "Acetate", "Concept"] as const;
type Category = (typeof CATEGORIES)[number];

export default function ProductShowcase() {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter products based on selected tab
  const filteredProducts = PRODUCTS.filter((product) => {
    if (selectedCategory === "All") return true;
    return product.category === selectedCategory;
  });

  // Next and Prev handlers for lightbox
  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex === null) return;
    const prevIndex =
      lightboxIndex === 0 ? filteredProducts.length - 1 : lightboxIndex - 1;
    setLightboxIndex(prevIndex);
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex === null) return;
    const nextIndex =
      lightboxIndex === filteredProducts.length - 1 ? 0 : lightboxIndex + 1;
    setLightboxIndex(nextIndex);
  };

  // Keyboard navigation inside lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setLightboxIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredProducts]);

  return (
    <Box sx={{ width: "100%" }}>
      {/* Category selector */}
      {/* <Stack
        direction="row"
        spacing={{ xs: 1, sm: 2 }}
        sx={{
          justifyContent: "center",
          flexWrap: "wrap",
          mb: { xs: 5, md: 7 },
          gap: { xs: 1, sm: 0 },
        }}
      >
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <Button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              variant="text"
              sx={{
                color: isActive ? COLORS.SECONDARY : "rgba(255, 236, 212, 0.4)",
                fontWeight: 500,
                fontSize: "0.85rem",
                letterSpacing: "0.15em",
                px: { xs: 2, sm: 3 },
                py: 1,
                borderRadius: "30px",
                backgroundColor: isActive
                  ? "rgba(255, 236, 212, 0.05)"
                  : "transparent",
                border: isActive
                  ? "1px solid rgba(255, 236, 212, 0.15)"
                  : "1px solid transparent",
                transition: "all 0.4s ease",
                "&:hover": {
                  color: COLORS.SECONDARY,
                  backgroundColor: "rgba(255, 236, 212, 0.08)",
                  borderColor: "rgba(255, 236, 212, 0.2)",
                  transform: "translateY(-1px)",
                },
              }}
            >
              {cat.toUpperCase()}
            </Button>
          );
        })}
      </Stack> */}

      {/* Masonry CSS Grid Container */}
      <Box
        sx={{
          columnCount: { xs: 1, sm: 2, md: 3 },
          columnGap: 3,
          width: "100%",
          "& > div": {
            breakInside: "avoid",
            marginBottom: 3,
          },
        }}
      >
        {filteredProducts.map((product, index) => {
          // Find absolute index in the filtered array
          return (
            <Box
              key={product.src}
              onClick={() => setLightboxIndex(index)}
              sx={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                cursor: "pointer",
                border: "1px solid rgba(255, 236, 212, 0.05)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                backgroundColor: "rgba(42, 43, 45, 0.15)",
                "&:hover": {
                  transform: "translateY(-6px)",
                  borderColor: "rgba(255, 236, 212, 0.25)",
                  boxShadow: `0 15px 40px rgba(212, 167, 106, 0.08), 0 0 1px rgba(255, 236, 212, 0.15)`,
                  "& .product-img": {
                    transform: "scale(1.06)",
                    filter: "brightness(0.85) contrast(1.05)",
                  },
                  "& .zoom-icon": {
                    opacity: 1,
                    transform: "translate(-50%, -50%) scale(1.1)",
                  },
                },
              }}
            >
              {/* Image Container with specific Aspect Ratio */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: product.aspectRatio,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={product.src}
                  alt={product.name}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                  style={{
                    objectFit: "cover",
                    transition:
                      "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s ease",
                  }}
                  className="product-img"
                  priority={index < 6}
                />

                {/* Floating Zoom Indicator Icon */}
                <Box
                  className="zoom-icon"
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) scale(0.8)",
                    opacity: 0,
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    backgroundColor: "rgba(30, 21, 14, 0.65)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "50%",
                    p: 1.8,
                    border: "1px solid rgba(255, 236, 212, 0.2)",
                    zIndex: 2,
                    color: COLORS.SECONDARY,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.4)",
                  }}
                >
                  <ZoomInIcon sx={{ fontSize: 24 }} />
                </Box>

                {/* Zoom icon displays on hover, no text details overlay */}
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* Luxury Fullscreen Lightbox Modal */}
      <Modal
        open={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
            sx: {
              backgroundColor: "rgba(18, 12, 8, 0.92)",
              backdropFilter: "blur(15px)",
            },
          },
        }}
      >
        <Fade in={lightboxIndex !== null}>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              outline: "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              p: { xs: 2, sm: 4 },
            }}
          >
            {/* Top Bar inside Lightbox */}
            <Stack
              direction="row"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 70,
                px: { xs: 2, sm: 4 },
                alignItems: "center",
                justifyContent: "space-between",
                zIndex: 10,
                background:
                  "linear-gradient(to bottom, rgba(18, 12, 8, 0.5) 0%, transparent 100%)",
              }}
            >
              <Box />

              {/* Close Button */}
              <IconButton
                onClick={() => setLightboxIndex(null)}
                sx={{
                  color: "rgba(255, 236, 212, 0.6)",
                  backgroundColor: "rgba(255, 236, 212, 0.05)",
                  border: "1px solid rgba(255, 236, 212, 0.1)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#ffffff",
                    backgroundColor: "rgba(255, 236, 212, 0.15)",
                    borderColor: "rgba(255, 236, 212, 0.3)",
                  },
                }}
              >
                <CloseIcon />
              </IconButton>
            </Stack>

            {/* Left/Right Navigation controls for larger screens */}
            <IconButton
              onClick={(e) => handlePrev(e)}
              sx={{
                position: "absolute",
                left: { xs: 16, sm: 32 },
                color: "rgba(255, 236, 212, 0.5)",
                backgroundColor: "rgba(255, 236, 212, 0.03)",
                border: "1px solid rgba(255, 236, 212, 0.05)",
                p: 2,
                zIndex: 5,
                display: { xs: "none", md: "inline-flex" },
                transition: "all 0.3s ease",
                "&:hover": {
                  color: COLORS.SECONDARY,
                  backgroundColor: "rgba(255, 236, 212, 0.1)",
                  borderColor: "rgba(255, 236, 212, 0.3)",
                  transform: "scale(1.05)",
                },
              }}
            >
              <ArrowBackIosNewIcon sx={{ fontSize: 24, mr: 0.3 }} />
            </IconButton>

            <IconButton
              onClick={(e) => handleNext(e)}
              sx={{
                position: "absolute",
                right: { xs: 16, sm: 32 },
                color: "rgba(255, 236, 212, 0.5)",
                backgroundColor: "rgba(255, 236, 212, 0.03)",
                border: "1px solid rgba(255, 236, 212, 0.05)",
                p: 2,
                zIndex: 5,
                display: { xs: "none", md: "inline-flex" },
                transition: "all 0.3s ease",
                "&:hover": {
                  color: COLORS.SECONDARY,
                  backgroundColor: "rgba(255, 236, 212, 0.1)",
                  borderColor: "rgba(255, 236, 212, 0.3)",
                  transform: "scale(1.05)",
                },
              }}
            >
              <ArrowForwardIosIcon sx={{ fontSize: 24, ml: 0.3 }} />
            </IconButton>

            {/* Central Content Area */}
            {lightboxIndex !== null && (
              <Stack
                spacing={3}
                sx={{
                  width: "100%",
                  height: "100%",
                  maxHeight: "calc(100vh - 100px)",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 4,
                }}
              >
                {/* Dynamic swipeable/interactive wrapper on mobile */}
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    maxWidth: { xs: "100%", md: "85%" },
                    maxHeight: "80vh",
                  }}
                >
                  <Image
                    src={filteredProducts[lightboxIndex].src}
                    alt={filteredProducts[lightboxIndex].name}
                    fill
                    sizes="90vw"
                    style={{
                      objectFit: "contain",
                    }}
                    priority
                  />
                </Box>
              </Stack>
            )}

            {/* Bottom Controls for mobile screens */}
            <Stack
              direction="row"
              spacing={4}
              sx={{
                position: "absolute",
                bottom: 24,
                display: { xs: "flex", md: "none" },
                zIndex: 10,
              }}
            >
              <IconButton
                onClick={(e) => handlePrev(e)}
                sx={{
                  color: "rgba(255, 236, 212, 0.6)",
                  backgroundColor: "rgba(255, 236, 212, 0.05)",
                  border: "1px solid rgba(255, 236, 212, 0.1)",
                }}
              >
                <ArrowBackIosNewIcon sx={{ fontSize: 18 }} />
              </IconButton>
              <IconButton
                onClick={(e) => handleNext(e)}
                sx={{
                  color: "rgba(255, 236, 212, 0.6)",
                  backgroundColor: "rgba(255, 236, 212, 0.05)",
                  border: "1px solid rgba(255, 236, 212, 0.1)",
                }}
              >
                <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
              </IconButton>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
