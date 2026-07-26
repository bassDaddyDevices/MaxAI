---
type: cookbook
name: "Phase distortion synthesis in a poly~ subpatch"
summary: "This shows an implementation of phase distortion synthesis in MSP—using the phasor~, kink~, and cycle~ objects—in a patch that is designed to be used inside the poly~ object."
chapter: "MSP"
keywords: ["abstraction", "adsr~", "cycle~", "in", "inlet", "kink~ loadbang", "mtof", "out~", "outlet", "phasor~", "pow", "pack", "thispoly~", "unpack", "*~", "!-~", "/"]
objects: ["!-~", "*~", "/", "adsr~", "cycle~", "in", "kink~", "loadbang", "mtof", "out~", "pack", "phasor~", "pow", "thispoly~", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/kinkpoly~.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/kinkpoly~.png"
---

# Phase distortion synthesis in a poly~ subpatch

This shows an implementation of phase distortion synthesis in MSP—using the **phasor~**, **kink~**, and **cycle~** objects—in a patch that is designed to be used inside the **poly~** object. For an explanation of this sort of phase distortion synthesis, see “A demonstration of phase distortion synthesis.” The main point of this example, though, is to show how a synthesis patch can be designed to respond directly to MIDI input. Although the method of synthesis is different, the basic design of this patch is very similar to the FM synthesis **poly~** module presented in “Polyphony with the poly~ object.” One noticeable difference is that instead of expecting frequency and amplitude values in its inlets, this patch expects MIDI pitch and velocity values, and it converts those values to frequency and amplitude. The significance of this is that this patch can be directly connected to a MIDI **notein** object, or if it's used in a **poly~** it can respond directly to a *midinote* message. As in “Polyphony with the poly~ object,” this patch uses **adsr~** to control the output amplitude, and connects the **adsr~** object to a **thispoly~** object to set the module's "busy" status and stop computation when it's not busy. (It also uses an **adsr~** to control the amount of phase distortion, so that higher velocities will also produce a brighter tone.)

“A polyphonic phase distortion synthesizer” shows this patch being used inside a **poly~** object. You will need to download this patch and save it with the name "kinkpoly~" in order for the next example to work.

## Objects used

`adsr~` ×2, `*~` ×2, `in` ×2, `pow`, `/`, `unpack`, `pack`, `mtof`, `out~`, `cycle~`, `!-~`, `phasor~`, `kink~`, `loadbang`, `thispoly~`

*Patch contains 34 boxes, 25 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/kinkpoly~.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/kinkpoly~.png`
