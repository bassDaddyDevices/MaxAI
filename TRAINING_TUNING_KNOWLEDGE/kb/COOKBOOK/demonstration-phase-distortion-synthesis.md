---
type: cookbook
name: "A demonstration of phase distortion synthesis"
summary: "Phase distortion is a synthesis technique that was used in some Casio synthesizers in the 1980s."
chapter: "MSP"
keywords: ["kink~", "phasor~", "phase distortion"]
objects: ["*~", "1", "256", "cycle~", "dac~", "kink~", "line~", "loadbang", "pack", "phasor~", "scope~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/kink~demo.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/kink~demo.png"
---

# A demonstration of phase distortion synthesis

Phase distortion is a synthesis technique that was used in some Casio synthesizers in the 1980s. In traditional wavetable synthesis, a linear upward ramp signal is used as a phase index to read cyclically through a wavetable containing a particular waveform (a sine wave being the most common). In MSP you can do that by connecting the output of a **phasor~** object, which generates a cyclic upward ramp from 0 to 1, to the right (phase offset) inlet of a 0 Hz **cycle~** object (containing one cycle of a cosine waveform by default). However, the **kink~** object distorts the linear ramp of **phasor~**, putting a bend (a.k.a. a "kink" or "knee") in it at a designated point. When that distorted ramp is used to read through the waveform in **cycle~** the result is a distorted sinusoid that has more harmonic content as the distortion (the sharpness of the bend in the ramp) becomes more severe. Thus the harmonic content of the output varies dynamically as the bend point of the **kink~** object changes. This patch allows you to vary the bending effect of the **kink~** object, and see and hear the effect.

## Objects used

`256`, `cycle~`, `1`, `loadbang`, `dac~`, `scope~`, `pack`, `line~`, `kink~`, `phasor~`, `*~`

*Patch contains 22 boxes, 19 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/kink~demo.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/kink~demo.png`
