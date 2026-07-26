---
type: cookbook
name: "Granulation of a recorded sound"
summary: "In classic granular synthesis, grains are very short windowed segments of sound, normally from 5 ms to 100 ms in length."
chapter: "MSP"
keywords: ["buffer~", "record~", "groove~"]
objects: ["!-", "*", "*~", "+~", "-", "adc~", "buffer~", "cycle~", "dbtoa", "delay", "ezdac~", "gain~", "groove~", "i", "line~", "metro", "random", "record~", "sig~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/Granulation of a recorded sound.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/Granulation of a recorded sound_0.png"
---

# Granulation of a recorded sound

In classic granular synthesis, grains are very short windowed segments of sound, normally from 5 ms to 100 ms in length. A stream of sound grains be spaced at exactly the same time interval as the grain length, or at some greater interval of time. The spacing can even be randomized (some random time interval greater than or equal to the grain length). A single stream of grains is all you can do with a single **groove~** object.

Although it's not demonstrated here, you could have a multiplicity of such streams going with multiple **groove~** objects, or with multiple instances in a **poly~** object, which would result in some overlapping of grains, making a cloud of grains, and if it's a dense enough cloud it starts to sound like one continuous sound.

This is an example patch that creates one steady stream of grains randomly chosen from a 10-second recording. You can set the grain length and the grain spacing to whatever timings you want. Here we use a 5 ms attack time and a 5 ms release time, so the minimum grain length in our case is 10 ms. Therefore, we limit the minimum grain spacing to 10 ms, too. (The **number** box setting the ‘time interval’ for the **metro** object has had its minimum value set to 10 in the Inspector.) Each grain starts at a randomly-chosen start time in a 10-second **buffer~**. Each grain is also assigned a “random loudness” and a “random panning”. To make grains that are more like notes than grains, you can make grain lengths/spacings that are greater than 100 ms.

## Objects used

`*~` ×5, `random` ×3, `*` ×2, `cycle~` ×2, `sig~` ×2, `gain~`, `dbtoa`, `+~`, `!-`, `groove~`, `metro`, `i`, `-`, `line~`, `ezdac~`, `delay`, `adc~`, `record~`, `buffer~`

*Patch contains 69 boxes, 45 connections, 1 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/Granulation of a recorded sound.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/Granulation of a recorded sound_0.png`
