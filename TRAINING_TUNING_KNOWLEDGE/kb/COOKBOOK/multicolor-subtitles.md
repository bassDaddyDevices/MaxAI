---
type: cookbook
name: "Multicolor Subtitles"
summary: "This patch uses jit.lcd to draw white text on a black background, uses that monochrome image as the color and alpha channels, colorizes the text using jit.scale"
chapter: "Max"
keywords: ["jit.qt.movie", "jit.lcd", "jit.unpack", "jit.pack", "jit.scalebias", "jit.alphablend", "jit.window"]
objects: ["jit.alphablend", "jit.lcd", "jit.pack", "jit.qt.movie", "jit.scalebias", "jit.unpack", "jit.window", "loadbang", "metro", "prepend", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/multicolorsubtitles.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/multicolorsubtitles.png"
---

# Multicolor Subtitles

This patch uses **jit.lcd** to draw white text on a black background, uses that monochrome image as the color and alpha channels, colorizes the text using **jit.scalebias**, and then does an alphablend of the text with a movie.

## Objects used

`jit.window`, `jit.scalebias`, `jit.unpack`, `jit.pack`, `loadbang`, `prepend`, `t`, `jit.alphablend`, `jit.lcd`, `metro`, `jit.qt.movie`

*Patch contains 31 boxes, 27 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/multicolorsubtitles.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/multicolorsubtitles.png`
