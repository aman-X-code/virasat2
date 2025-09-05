# Hero Section Corner Blocks - Restore Guide

## Overview
The four corner blocks in `components/HeroSection.tsx` have been commented out to show only the center image. This guide explains how to restore them.

## What's Currently Commented Out

### 1. Top Left Corner - Image Block
- **Lines:** 38-73
- **Content:** Static image (`/images/first.png`)
- **Mask Type:** type-1 (Classic)
- **Animation:** Floating red dot

### 2. Top Right Corner - Video Block  
- **Lines:** 76-116
- **Content:** Video (`/images/second.mp4`)
- **Mask Type:** type-2 (Modern)
- **Animation:** Small floating red dot

### 3. Bottom Left Corner - Video Block
- **Lines:** 119-157
- **Content:** Video (`/images/third.mp4`)
- **Mask Type:** type-3 (Artistic)
- **Animation:** Floating amber dot

### 4. Bottom Right Corner - Video Block
- **Lines:** 160-198
- **Content:** Video (`/images/forth.mp4`)
- **Mask Type:** type-4 (Minimal)
- **Animation:** Floating amber dot

## How to Restore

### To Restore All Corner Blocks:
1. Open `components/HeroSection.tsx`
2. Find each commented block (marked with `/*` and `*/`)
3. Remove the `/*` at the beginning of each block
4. Remove the `*/` at the end of each block

### To Restore Individual Blocks:
- **Top Left:** Remove `/*` from line 38 and `*/` from line 73
- **Top Right:** Remove `/*` from line 76 and `*/` from line 116  
- **Bottom Left:** Remove `/*` from line 119 and `*/` from line 157
- **Bottom Right:** Remove `/*` from line 160 and `*/` from line 198

## Current State
- **Center Image:** Active and enlarged (600x500px)
- **Corner Blocks:** All commented out
- **Background:** Active (pattern + gradient)
- **Scroll Indicator:** Active

## Notes
- All original styling, animations, and functionality are preserved
- Videos will auto-play when uncommented
- MaskedDiv components will apply their respective mask types
- Floating decorative elements will animate as before
