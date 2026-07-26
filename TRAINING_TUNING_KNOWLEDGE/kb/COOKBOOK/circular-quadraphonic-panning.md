---
type: cookbook
name: "Circular quadraphonic panning"
summary: "For this example to work correctly, you must first download the abstraction quadpan~.maxpat(../patches/quadpan3~.maxpat) which is explained in the example \"Quad"
chapter: "MSP"
keywords: ["phasor~", "quadpan~", "panning", "quadraphonic"]
objects: ["!/", "*~", "+~", "0.5", "cycle~", "dac~", "line~", "metro", "mtof", "phasor~", "preset", "quadpan~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/quadpanphasordemo.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/quadpanphasordemo.png"
---

# Circular quadraphonic panning

For this example to work correctly, you must first download the abstraction [quadpan~.maxpat](../patches/quadpan3~.maxpat) which is explained in the example "[Quadraphonic panning based on radial angle](quadraphonic-panning-based-radial-angle.md)", and save it in the Max file search path with the name "quadpan~.maxpat".

This example shows how you can use the **quadpan~** abstraction to pan sounds in circular path among four speakers. Because of the way that the **quadpan~** abstraction is designed, a signal in its right inlet that goes linearly from 0 to 1 will make the sound go clockwise in a circle, starting from the front-center position between speakers 1 and 2.

Click on preset 1 in the **preset** object in the bottom-right corner of the example patch, then click on the **message** box that says *start* to turn on MSP. Preset one sets the rate of the **phasor~** object on the right to 0.125 Hz, which means that it will cause the sound in **quadpan~** to pan around in a clockwise circle once every 8 seconds; the phasor~ object on the left is given a frequency of -0.111111 Hz, which means that it will cause the sound in that **quadpan~** to pan around in a counter-clockwise circle once every 9 seconds.

You can click on the **toggle** objects to turn on one or both sounds to be panned. The **metro** objects will trigger a message to the **line~** objects that causes them to open a 10-millisecond triangular window (up from 0 to 0.5 in 5 milliseconds, then back down to 0 in 5 milliseconds) on a sinusoidal tone from the **cycle~** objects. The result will be that the sound on the left part of the patch will be 3 very short beeps per second at the pitch A (440 Hz) panning in a counter-clockwise circle over 9 seconds, and the sound on the right part of the patch will be 4 very short beeps per second at the pitch C (523.25 Hz) panning in a clockwise circle over 8 seconds.

## Objects used

`+~` ×4, `0.5` ×2, `phasor~` ×2, `quadpan~` ×2, `mtof` ×2, `cycle~` ×2, `*~` ×2, `line~` ×2, `!/` ×2, `metro` ×2, `preset`, `dac~`

*Patch contains 34 boxes, 40 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/quadpanphasordemo.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/quadpanphasordemo.png`
