---
type: cookbook
name: "Flanger effect on sound file"
summary: "This example shows how to create a flanger effect on a sound file."
chapter: "MSP"
keywords: ["cycle~", "pow~"]
objects: ["*~", "cycle~", "ezdac~", "loadbang", "pow~", "sfplay~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/sfflange.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/sfflange.png"
---

# Flanger effect on sound file

This example shows how to create a flanger effect on a sound file.

Unlike a realtime flanging effect, which relies on a fluctuating delay time, in this example we create a flanging effect by modulating the playback rate of a sound file. The right inlet of **sfplay~** sets the playback rate; it can receive a *float* for a constant rate, or it can receive a *signal* for a continuously changing rate. The amplitude of the modulating low-frequency oscillator—the **cycle~** object—is treated here as the exponent of the base 2 for determining the playback rate. 2 to the 0th power equals 1, normal playback rate. So, when the amplitude of the **cycle~** is 0, there is no modulation and the playback is unaltered. However, if the amplitude of the **cycle~** is non-zero, it will cause a fluctuation of playback rate, up and down from 1, causing a corresponding pitch change.

## Objects used

`loadbang`, `pow~`, `cycle~`, `*~`, `ezdac~`, `sfplay~`

*Patch contains 15 boxes, 11 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/sfflange.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/sfflange.png`
