---
type: cookbook
name: "Hanning function to control parameters of a sound"
summary: "If you scale a one cycle of cosine wave by a factor of -0.5 and offset it by 0.5 you get a \"Hanning function\", which goes from 0 to 1 and back to 0 as smoothly as possible."
chapter: "MSP"
keywords: ["scope~", "cycle~", "*~", "+~", "hanning", "window"]
objects: ["*~", "+~", "cycle~", "ezdac~", "scope~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/hanningfunctioncontrolsall.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/hanningfunctioncontrolsall_.png"
---

# Hanning function to control parameters of a sound

If you scale a one cycle of cosine wave by a factor of -0.5 and offset it by 0.5 you get a "Hanning function", which goes from 0 to 1 and back to 0 as smoothly as possible. That can be used to shape the amplitude of a sound, turning it on and off smoothly, or it can be used to modulate any characteristic of the sound. In this example we use a **cycle~** object to generate a Hanning shape that repeats every four seconds (has a repetition rate of 0.25 Hz), and apply that to modulate several characteristics of a sound: center frequency, vibrato rate, vibrato depth, amplitude, tremolo rate, and tremolo depth.

## Objects used

`*~` ×11, `cycle~` ×4, `+~` ×4, `ezdac~`, `scope~`

*Patch contains 45 boxes, 35 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/hanningfunctioncontrolsall.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/hanningfunctioncontrolsall_.png`
