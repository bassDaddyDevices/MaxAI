---
type: cookbook
name: "Constant power panning using square root of intensity"
summary: "The intensity of sound is proportional to the square of its amplitude."
chapter: "MSP"
keywords: ["sig~", "*~", "line~", "noise~", "slider", "sqrt~"]
objects: ["*~", "-~", "ezdac~", "line~", "metro", "noise~", "number~", "pack", "sig~", "slider", "sqrt~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/squarerootpanning.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/squarerootpanning.png"
---

# Constant power panning using square root of intensity

The intensity of sound is proportional to the square of its amplitude. So if we want to have a linear change in intensity as we go from 0 to 1 or 1 to 0, we need to use the square root of that linear change to calculate the amplitude. This example patch is exactly like "[Linear amplitude panning](linear-amplitude-panning.md)", except that we consider the linearly changing signal from **line~** to be the intensity rather than the amplitude, and we take the square root of that value to obtain the actual amplitude for each speaker. By this method, when the sound is panned in the center between the two speakers, instead of the amplitude of each speaker being 0.5, it will be the square root of 0.5, which is 0.707 (which is an increase of 3 dB compared to 0.5). This compensates for, and effectively eliminates, the undesirable 'hole-in-the-middle' effect discussed in the previous example.

## Objects used

`*~` ×3, `line~` ×2, `sqrt~` ×2, `ezdac~`, `slider`, `metro`, `noise~`, `number~`, `-~`, `pack`, `sig~`

*Patch contains 26 boxes, 20 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/squarerootpanning.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/squarerootpanning.png`
