---
type: cookbook
name: "List audio cue points"
summary: "To set a list of cue points in an audio file and have them played in order, use either sfplay~ (with a set of cues established by preload messages to sfplay~ or"
chapter: "Max"
keywords: ["sfplay~", "sflist~", "buffer~", "looping", "play~", "coll", "line~", "random", "prepend", "metro"]
objects: ["*~", "+", "buffer~", "coll", "ezdac~", "line~", "loadbang", "metro", "play~", "prepend", "random", "sflist~", "sfplay~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/ListAudioCuePoints.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/listaudiocuepoints.png"
---

# List audio cue points

To set a list of cue points in an audio file and have them played in order, use either **sfplay~** (with a set of cues established by *preload* messages to **sfplay~** or to **sflist~**) or buffer~ (with *start* messages to **play~**, the parameters of which are stored in a **coll**).

## Objects used

`*~` ×4, `line~` ×2, `ezdac~` ×2, `metro` ×2, `random` ×2, `prepend`, `coll`, `play~`, `buffer~`, `+`, `loadbang`, `sfplay~`, `sflist~`

*Patch contains 26 boxes, 27 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/ListAudioCuePoints.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/listaudiocuepoints.png`
