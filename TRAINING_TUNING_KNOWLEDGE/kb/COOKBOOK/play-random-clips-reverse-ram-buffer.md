---
type: cookbook
name: "Play random clips (in reverse) from a RAM buffer"
summary: "This example demonstrates creating a RAM buffer to hold a 10-second stereo recording, recording live audio into it (with input volume adjustment), and then play"
chapter: "MSP"
keywords: ["adc~", "bangbang", "buffer~", "dac~", "dbtoa", "delay", "dial", "inlet", "int", "groove~", "line~", "loadbang", "meter~", "number~", "outlet", "patcher", "random", "record~", "select", "trapezoid~", "*~", "+", "!-"]
objects: ["!-", "*~", "+", "-1", "0", "24", "adc~", "b", "buffer~", "dac~", "dbtoa", "delay", "dial", "groove~", "line~", "loadbang", "meter~", "number~", "random", "record~", "select", "t", "trapezoid~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/playrandomclips.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/playrandomclips_0.png"
---

# Play random clips (in reverse) from a RAM buffer

This example demonstrates creating a RAM buffer to hold a 10-second stereo recording, recording live audio into it (with input volume adjustment), and then playing randomly chosen backward clips of that sound, with a trapezoidal window to taper the beginning and ending of each clip to avoid clicks.

The ***clipchooser*** subpatch randomly chooses a clip duration from 1 to 2000 milliseconds, uses that duration to create an amplitude envelope of the proper duration, then chooses a starting location in the buffer (making sure that the location is not so early in the buffer that it would prevent the backward clip from completing), and sends out the amplitude envelope and the starting time. (Note that this subpatch assumes that the rate of the **groove~** object is *-1*.) It delays for that duration (using **delay**) before repeating the process to choose the next clip.

## Objects used

`*~` ×4, `t` ×2, `delay` ×2, `+` ×2, `random` ×2, `meter~` ×2, `number~` ×2, `0`, `b`, `!-`, `trapezoid~`, `line~`, `select`, `dac~`, `24`, `dial`, `dbtoa`, `adc~`, `record~`, `-1`, `loadbang`, `groove~`, `buffer~`

*Patch contains 55 boxes, 54 connections, 1 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/playrandomclips.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/playrandomclips_0.png`
