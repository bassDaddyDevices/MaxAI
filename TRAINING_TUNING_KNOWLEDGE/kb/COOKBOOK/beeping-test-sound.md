---
type: cookbook
name: "A beeping test sound"
summary: "This patch is designed to be used as an abstraction (subpatch) in another patch, such as the example \"Mixing multiple audio processes\"."
chapter: "MSP"
keywords: ["abstraction", "triangle~", "arguments", "patcherargs"]
objects: ["!/", "*~", "+~", "cycle~", "f", "line~", "loadbang", "metro", "phasor~", "sig~", "triangle~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/pinger.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/pinger_0.png"
---

# A beeping test sound

This patch is designed to be used as an abstraction (subpatch) in another patch, such as the example "[Mixing multiple audio processes](http://music.arts.uci.edu/dobrian/maxcookbook/mixing-multiple-audio-processes)". In order for that example to work, you should download this example and save it with the filename "pinger.maxpat" somewhere in the Max file search path.

The purpose of this patch is just to generate a recognizable sound. The patch emits very short sinusoidal beeps of a specified frequency, at a rate of a specified number of beeps per second, panning back and forth from left to right a specified number of times per second. These three parameters––tone frequency, note rate, and panning rate––are specified as arguments 1, 2, and 3 in the parent patch.

Because this abstraction was designed just to be used as a test tone in a particular example, it just uses the simple *#1*, *#2*, and *#3* arguments as a way of providing the parameter values (as unchangeable constants typed in the parent patch). To make a more versatile program, one could also provide **inlet**s to receive variable values, and could use **patcherargs** to provide useful default initial values. Compare, for instance, the **lmap** abstraction, found in the "[Linear mapping equation](linear-mapping-equation-lmap.md)" example.

## Objects used

`*~` ×4, `cycle~` ×3, `loadbang`, `+~`, `sig~`, `!/`, `f`, `phasor~`, `triangle~`, `line~`, `metro`

*Patch contains 30 boxes, 26 connections, 1 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/pinger.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/pinger_0.png`
