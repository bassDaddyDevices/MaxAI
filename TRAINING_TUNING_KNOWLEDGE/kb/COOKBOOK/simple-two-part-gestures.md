---
type: cookbook
name: "Simple two-part gestures"
summary: "I believe that we respond to and recognize something about the shape of the change in a sound, and that shape forms a metaphorical sonic \"gesture\" in our minds."
chapter: "MSP"
keywords: ["gesture", "function", "reson~", "bandpass"]
objects: ["*", "*~", "+", "/", "b", "counter", "dac~", "function", "line~", "loadbang", "metro", "mtof", "noise~", "pack", "random", "reson~", "sel"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/gesturalcurves.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/gesturalcurves.png"
---

# Simple two-part gestures

I believe that we respond to and recognize something about the shape of the change in a sound, and that shape forms a metaphorical sonic "gesture" in our minds. The "shape of the change" means the way in which some aspect of the sound (it could be any measurable parameter) or the music (it could be any characteristic we care about) changes over time: how radically it changes, and with what acceleration of change. That can be simply stated as the value of the parameter in question, depicted as a function of time. That is, the "gesture" can be depicted as a curve of change over time. Max's **function** object is a likely prospect for depicting that curve.

Based on that premise, this patch a) draws a curve by means of a simple process of randomly choosing three points and the curves between those points, b) randomly chooses a number of notes to play, and c) steps through that curve in that number of notes, using the curve as the center pitch of a resonant bandpass filter applied to short noise bursts. The number of notes is 3 to 30, note rate is a constant 12 per second, the amplitude of the white noise is constant, and the curve (described as taking place between 0 and 1 within the **function** object) is always somewhere within the range from MIDI 48 (C below middle C) to 108 (piano high C). Thus, the only variable factors are the duration of the gesture (number of notes) and the curve of the filter's change in pitch space.

The fact that this sounds "gestural", more so than linear change, implies that a) curves sound more physical than straight lines, and b) this very simple type of curve (three points with curves between them) is sufficiently interesting to sound gestural.

## Objects used

`*` ×7, `random` ×7, `+` ×3, `b` ×2, `/`, `mtof`, `dac~`, `sel`, `counter`, `pack`, `function`, `metro`, `*~`, `line~`, `loadbang`, `reson~`, `noise~`

*Patch contains 53 boxes, 50 connections, 1 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/gesturalcurves.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/gesturalcurves.png`
