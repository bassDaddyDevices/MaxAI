---
type: cookbook
name: "MSP functions"
summary: "This patch shows the lookup tables (a.k.a."
chapter: "MSP"
keywords: ["function", "table", "lookup~", "buffer~"]
objects: ["*~", "buffer~", "cycle~", "ezdac~", "function", "line~", "lookup~", "mtof", "number~", "select", "t", "table", "tempo"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/MSPfunctions.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/MSPfunctions.png"
---

# MSP functions

This patch shows the lookup tables (a.k.a. transfer functions) being used on three formal levels: 1) the microscopic level, to determine the timbre of the waveform, 2) the note level, to determine the amplitude (and timbre) envelope, and 3) at the phrase level, to control the amplitude over a 15-second time span.

First, turn on audio (below), then start the **tempo** object.

The MIDI pitches read from the **table** object are converted into frequency by the **mtof** object, and are sent to **cycle~** to use the sinusoidal waveform to scan through a more complex waveform, known as "waveshaping" synthesis.

The **lookup~** object uses the **buffer~**'s data because they share the same name, xfer.

The shape of the left **function** is used to control the amplitude envelope (and timbre envelope) of each note, and the domain is set to 150 ms. The shape of the right **function** is to control the amplitude envelope (dynamics) over a longer time span, and the domain is set to 15 seconds.

The directory used by the **buffer~** is the place in memory where we store the sound clip (512 samples) that will serve as the lookup table (transfer function) for the **lookup~** object, scanning the **buffer~** with a sinusoid (**cycle~**) at the desired frequency.

## Objects used

`*~` ×3, `line~` ×2, `function` ×2, `number~`, `select`, `ezdac~`, `t`, `cycle~`, `mtof`, `table`, `tempo`, `buffer~`, `lookup~`

*Patch contains 25 boxes, 22 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/MSPfunctions.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/MSPfunctions.png`
