---
type: cookbook
name: "Show the sum of harmonically-related sinusoids"
summary: "This patch allows you to see and hear the sum of up to 16 harmonically-related sinusoidal tones, mixed with equal amplitudes."
chapter: "MSP"
keywords: ["harmonics", "plot~", "matrix~"]
objects: ["cycle~", "ezdac~", "live.gain~", "loadbang", "matrixctrl", "matrix~", "plot~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/show16harmonics_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/show16harmonics_0.png"
---

# Show the sum of harmonically-related sinusoids

This patch allows you to see and hear the sum of up to 16 harmonically-related sinusoidal tones, mixed with equal amplitudes. The sinusoids are all in cosine phase. (If the phases were different, the sum would look different, but it would sound pretty much the same.) As you add a number of tones together, you'll need to adjust the volume to avoid clipping.

## Objects used

`cycle~` ×16, `loadbang`, `live.gain~`, `matrixctrl`, `matrix~`, `ezdac~`, `plot~`

*Patch contains 25 boxes, 23 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/show16harmonics_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/show16harmonics_0.png`
