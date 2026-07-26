---
type: cookbook
name: "Scale and offset"
summary: "There’s a simple way to convert one range of values into a corresponding set of values in a different range."
chapter: "MSP"
keywords: ["signal", "synthesis"]
objects: ["*~", "+~", "cycle~", "dac~", "line~", "loadbang", "scope~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/scaleandoffsetasignal.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/scaleandoffsetasignal_1.png"
---

# Scale and offset

There’s a simple way to convert one range of values into a corresponding set of values in a different range. The mathematical operations necessary to do that are “*scaling”* (one multiplication) and “*offsetting*” (one addition). For example, if you have a values in a range from -1 to 1, and you want to convert those to a corresponding set of values in the range 0.05 to 0.95, you can multiply (scale) the values all by 0.45 so they now range from -0.45 to 0.45, and then add to (offset) all of them 0.5 thus pushing the range up to 0.05 to 0.95.

These two operations—scaling and offsetting, one multiplication and one addition—are super-useful for moving numbers to a different range, something one needs to do often in programming.

In this example, we take the output of a sinusoidal LFO (low-frequency oscillator), which in MSP is in the range -1 to 1 from a **cycle~** object, and move that into the range 0.05 to 0.95, which is more useful for amplitude modulation to create a deep, slow *tremolo* effect. Tremolo is a slow repetitive modulation of the amplitude of a sound signal, thus varying its loudness.

## Objects used

`scope~` ×4, `*~` ×4, `cycle~` ×4, `line~`, `dac~`, `loadbang`, `+~`

*Patch contains 31 boxes, 18 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/scaleandoffsetasignal.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/scaleandoffsetasignal_1.png`
