---
type: cookbook
name: "Play a sound file with vibrato"
summary: "To impose a vibrato (a periodic fluctuation of frequency) on the playback of a sound file, you can use a low-frequency oscillator (a cycle~ object) to modulate the playback speed of the file."
chapter: "MSP"
keywords: ["vibrato", "sfplay~", "LFO", "modulation"]
objects: ["*~", "+~", "cycle~", "ezdac~", "live.gain~", "loadmess", "number~", "sfplay~", "sig~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/vibratosfplay.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/vibratosfplay.png"
---

# Play a sound file with vibrato

To impose a vibrato (a periodic fluctuation of frequency) on the playback of a sound file, you can use a low-frequency oscillator (a **cycle~** object) to modulate the playback speed of the file. The right inlet of the **sfplay~** object controls the playback speed with a rate factor. A value of 1 is normal speed (the default), 2.0 is double speed, 0.5 is half speed, etc. The speed can be supplied as a constant number (*float*) or with a continuous signal. So, you can supply a constant signal of 1 with a **sig~ 1** object, and add to that a small offset up and down by means of a low-frequency low-amplitude sinusoidal oscillator (**cycle~**).

## Objects used

`number~`, `loadmess`, `ezdac~`, `live.gain~`, `+~`, `cycle~`, `*~`, `sig~`, `sfplay~`

*Patch contains 21 boxes, 15 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/vibratosfplay.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/vibratosfplay.png`
