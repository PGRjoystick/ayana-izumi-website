# Ayana Images Directory

This directory contains Ayana's images used throughout the website.

## Required Images

### Hero Background
- **ayana-hero-bg.jpg** - Main hero section background image
  - **Size**: 1920x1080px or larger (16:9 ratio recommended)
  - **Format**: JPG, PNG, or WebP
  - **Content**: Portrait or artistic image of Ayana Izumi
  - **Quality**: High resolution for hero section
  - **Style**: Should work well with cyan overlay and white text

### Profile Images (Optional)
- **ayana-profile.jpg** - Profile picture for about sections
- **ayana-avatar.png** - Small avatar for contact cards
- **ayana-showcase.jpg** - Additional showcase images

## Image Guidelines

### Hero Background Image
- **Composition**: Should work well with text overlay
- **Colors**: Any colors work - cyan overlay will be applied
- **Subject**: Ayana in a professional or artistic pose
- **Lighting**: Good contrast areas for text readability
- **Orientation**: Landscape orientation preferred

### Technical Requirements
- **Resolution**: Minimum 1920x1080px for hero image
- **File Size**: Optimized for web (under 500KB for hero)
- **Format**: WebP preferred, JPG/PNG acceptable
- **Optimization**: Use modern compression techniques

## Usage

The hero background image will be:
- Displayed full-screen with `object-cover` fitting
- Overlayed with a cyan gradient for brand consistency
- Combined with a dark overlay for text readability
- Responsive across all device sizes

## Fallback

If no image is provided, the component will show:
- A placeholder indicating where the image should be
- The original gradient background as fallback
- Instructions for adding the correct image

## Image Optimization

Consider using:
- Next.js Image component for automatic optimization
- WebP format for better compression
- Proper alt text for accessibility
- Lazy loading for performance (except hero image)
