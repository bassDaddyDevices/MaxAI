---
type: cookbook
name: "Generate a window function to use as an amplitude envelope"
summary: "To play short grains of sound, especially ones randomly chosen from a sound file, it's usually necessary to impose some sort of \"window\"—an amplitude envelope—t"
chapter: "MSP"
keywords: ["window", "envelope", "amplitude envelope", "uzi", "buffer~", "cycle~", "trapezoid~", "triangle~", "hanning window", "parzen window"]
objects: ["buffer~", "cycle~", "expr", "peek~", "phasor~", "scope~", "t", "trapezoid~", "triangle~", "uzi"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/windowtypes.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/windowtypes.png"
---

# Generate a window function to use as an amplitude envelope

To play short grains of sound, especially ones randomly chosen from a sound file, it's usually necessary to impose some sort of "window"—an amplitude envelope—to taper the ends of the grain in order to avoid clicks. This patch shows how to generate four types of window function, and read through them with a phasor.

One way to generate a window is to fill a **buffer~** with a shape and then read through that buffer. The top part of the patch shows that method. We create a **buffer~** of 512 samples, and use the **peek~** object to put numbers in the **buffer~**. The **uzi 512 0** object generates numbers 0-511 in an instant (i.e., as quickly as possible); those numbers are used in 512 iterations of a math expression in the **expr** object, and the results are stored in the 512 locations in the **buffer~**. Click on the **button** to trigger the **uzi**, then double-click on the **buffer~** object to see its contents.

We chose 512 as the number of samples because a **cycle~** object can refer to 512 samples of a **buffer~** and use that shape as its waveform instead of its default cosine wave. We can read through one cycle of that waveform at any frequency. By specifying no frequency for **cycle~**, it's at 0 Hz by default, and we can then read through it with a **phasor~**— a signal going linearly from 0 to 1—going into the right (phase offset) inlet of the **cycle~**. The bottom part of the patch also demonstrates the use of the **trapezoid~** and **triangle~** objects, which output those shapes when driven by a **phasor~**.

## Objects used

`scope~` ×4, `cycle~` ×2, `buffer~` ×2, `peek~` ×2, `t` ×2, `expr` ×2, `phasor~`, `triangle~`, `trapezoid~`, `uzi`

*Patch contains 28 boxes, 18 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/windowtypes.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/windowtypes.png`
