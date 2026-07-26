---
type: cookbook
name: "Amplitude control in decibels"
summary: "This patch is an abstraction for supplying an amplitude factor to control the level of an audio signal."
chapter: "MSP"
keywords: ["decibel", "dbtoa", "amplitude control"]
objects: ["<=", "dbtoa", "line", "line~", "pack", "patcherargs", "sel"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/ampindB~.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/ampindB2~.png"
---

# Amplitude control in decibels

This patch is an abstraction for supplying an amplitude factor to control the level of an audio signal. The output of this abstraction is intended to go to a **\*~** object to scale the volume of a sound. The amplitude factor is expressed in decibels, which is generally a more intuitive way to refer to the volume of a sound. The abstraction fades to the new amplitude in a specified amount of time. Perceptually, a linear fade in decibels (which yields an exponential fade in amplitude) sounds smoother than a linear fade in amplitude.

A number in the right inlet supplies a fade time in milliseconds, and a number in the left inlet supplies the desired amplitude, in decibels, and triggers a fade to that new amplitude. You can also send an amplitude-time pair in the left inlet to achieve the same result. We use a **line** object to interpolate to the new decibel value, outputting a new value every 10 milliseconds. Those values are converted to amplitude with the **dbtoa** object. The **line~** object then interpolates to each new amplitude. It might seem a bit redundant to use both a **line** and a **line~** (with a **dbtoa** between them), but in fact this is more efficient than using just a **line~** and a **dbtoa~**. Conversion from decibels to amplitude is a computationally expensive operation, so we do it only 100 times per second (every 10 ms) rather than for every single sample, and then we interpolate to each new amplitude with **line~**. The difference between those two methods is imperceptible, but this way is more efficient. The fade is approximately exponential, which is what we want, but with less computation.

Any amplitude less than or equal to -60 dB (0.001) gets switched to 0 (–infinity decibels) for complete silence. The default initial values are -60 (minimum amplitude, silence) and 10 milliseconds (minimum allowed fade time). The user can type in different values in the parent patch, which will replace the values *-60* and *10* in the **patcherargs**.

## Objects used

`pack` ×2, `patcherargs`, `sel`, `<=`, `dbtoa`, `line~`, `line`

*Patch contains 17 boxes, 15 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/ampindB~.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/ampindB2~.png`
