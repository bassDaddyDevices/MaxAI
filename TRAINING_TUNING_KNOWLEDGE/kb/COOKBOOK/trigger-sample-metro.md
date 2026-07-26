---
type: cookbook
name: "Trigger sample with metro"
summary: "This program triggers a sound repeatedly, and changes the sound's playback rate with each repetition."
chapter: "MSP"
keywords: ["sfplay~", "metro", "pow", "Parameter Enable", "Initial Enable", "random", "transpose"]
objects: ["-", "/", "ezdac~", "key", "live.gain~", "loadmess", "metro", "pow", "random", "select", "sfplay~", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/triggersamplewithmetro_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/triggersamplewithmetro.png"
---

# Trigger sample with metro

This program triggers a sound repeatedly, and changes the sound's playback rate with each repetition. The sound file is so short that there's really no need to turn it off with a 0, so we just start it with a 1. The playback rate is calculated so as to cause a random transposition from -12 to +12 equal-tempered semitones, using the twelfth root of 2; the number of semitones (x) of transposition is determined by setting the rate to "2 to the x/12 power". You can put the patch into Presentation mode, which will present a cleaner user interface.

## Objects used

`t` ×2, `select`, `key`, `pow`, `/`, `-`, `random`, `ezdac~`, `loadmess`, `live.gain~`, `sfplay~`, `metro`

*Patch contains 36 boxes, 18 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/triggersamplewithmetro_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/triggersamplewithmetro.png`
