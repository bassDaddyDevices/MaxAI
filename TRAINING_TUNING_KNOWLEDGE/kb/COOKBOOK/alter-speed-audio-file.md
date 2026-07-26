---
type: cookbook
name: "Alter the speed of an audio file"
summary: "This example demonstrates how to modulate the playback speed of an audio file."
chapter: "MSP"
keywords: ["sfplay~", "cycle~", "*~", "+~"]
objects: ["*~", "+~", "cycle~", "ezdac~", "loadbang", "scope~", "sfplay~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/ratechange.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/ratechange.png"
---

# Alter the speed of an audio file

This example demonstrates how to modulate the playback speed of an audio file. The value in the right inlet of **sfplay~** determines the playback rate; 1. is normal speed, 0.5 is half speed, 2.0 is double speed, and so on. The rate can be provided as a continuously changing control signal instead of as a single constant value, allowing us to warp the speed at will. Here we're using a **cycle~** object to produce a low-frequency sinusoid over the course of ten seconds (i.e. at the frequency of 0.1 Hz). Since the default range of the output of **cycle~** is -1 to 1, we need to scale and offset that value to the range we desire. By multiplying the control signal by 0.5 and adding 1 to it, we change the range of the low-frequency oscillator to go from 0.5 to 1.5 and back every ten seconds.

## Objects used

`ezdac~`, `scope~`, `+~`, `*~`, `cycle~`, `loadbang`, `sfplay~`

*Patch contains 10 boxes, 11 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/ratechange.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/ratechange.png`
