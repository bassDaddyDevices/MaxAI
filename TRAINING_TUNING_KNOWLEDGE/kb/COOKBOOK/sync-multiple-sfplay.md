---
type: cookbook
name: "Sync Multiple sfplay~"
summary: "The examples above show two different ways that you can trigger sound files while keeping in sync with a particular beat when the durations of the sound files a"
chapter: "Max"
keywords: ["metro", "onebang", "random", "sfplay~", "sflist~", "delay", "transport", "preload"]
objects: ["+", "ezdac~", "loadbang", "metro", "onebang", "random", "sel", "sflist~", "sfplay~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/syncmultiplesfplay_1.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/syncmultiplesfplay1.png"
---

# Sync Multiple sfplay~

The examples above show two different ways that you can trigger sound files while keeping in sync with a particular beat when the durations of the sound files are not perfect multiples of the beat duration, hence triggering the next sound file at the ending point of the current sound file results in the next sound file being started off the beat.

The first example has a **metro** object going at the beat rate, and only pass its *bang* to trigger the next sound file when a variable shows that the previous file has ended. 

The second example has the **transport** object running, and delay the triggering *bang* until the next beat.

## Objects used

`ezdac~`, `sel`, `onebang`, `metro`, `+`, `random`, `loadbang`, `sflist~`, `sfplay~`

*Patch contains 13 boxes, 13 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/syncmultiplesfplay_1.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/syncmultiplesfplay1.png`
