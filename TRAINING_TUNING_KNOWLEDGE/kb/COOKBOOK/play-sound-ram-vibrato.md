---
type: cookbook
name: "Play a sound from RAM with vibrato"
summary: "In the groove~ object, you specify the rate of playback of a buffer~ by means of a signal in the left inlet of groove~."
chapter: "MSP"
keywords: ["vibrato", "groove~", "LFO", "modulation"]
objects: ["*~", "+~", "buffer~", "cycle~", "ezdac~", "groove~", "live.gain~", "loadmess", "number~", "sig~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/vibratogroovy.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/vibratogroovy.png"
---

# Play a sound from RAM with vibrato

In the **groove~** object, you specify the rate of playback of a **buffer~** by means of a signal in the left inlet of **groove~**. Normal playback speed is achieved with a signal value of 1. As shown also in the example "[Play a sound file with vibrato](play-sound-file-vibrato.md)", you can create a vibrato by modulating that signal with a low-frequency oscillator.

## Objects used

`number~`, `loadmess`, `ezdac~`, `live.gain~`, `+~`, `cycle~`, `*~`, `sig~`, `groove~`, `buffer~`

*Patch contains 23 boxes, 16 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/vibratogroovy.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/vibratogroovy.png`
