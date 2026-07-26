---
type: cookbook
name: "Multiple delays with stereo panning"
summary: "This patch demonstrates a way to use multiple delays with stereo panning."
chapter: "MSP"
keywords: ["ezdac~", "int", "live.gain~", "loadbang", "preset", "sfplay~", "tapin~", "tapoutstereo~", "AIFF file", "WAVE file"]
objects: ["1", "ezdac~", "live.gain~", "loadbang", "preset", "sfplay~", "tapin~", "tapoutstereo~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/multitapoutstereo~demo.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/multitapoutstereodemo.png"
---

# Multiple delays with stereo panning

This patch demonstrates a way to use multiple delays with stereo panning. It requires that you have the **tapoutstereo~**abstraction, found [here](http://music.arts.uci.edu/dobrian/maxcookbook/abstraction-delay-stereo-panning), and the **tapoutxfade~**abstraction, found [here](http://music.arts.uci.edu/dobrian/maxcookbook/abstraction-crossfading-delay-times-remote-tapin-object).

## Objects used

`tapoutstereo~` ×4, `sfplay~`, `preset`, `1`, `loadbang`, `ezdac~`, `live.gain~`, `tapin~`

*Patch contains 30 boxes, 36 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/multitapoutstereo~demo.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/multitapoutstereodemo.png`
