---
type: cookbook
name: "Phasor lookup in cosine"
summary: "One common usage of the phasor~ object is to readrepeatedly through a stored table of numbers."
chapter: "MSP"
keywords: ["cycle~", "phasor~"]
objects: ["*~", "+~", "cycle~", "ezdac~", "fpic", "number~", "phasor~", "scope~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/phasorlookupincosine.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/phasorlookupincosine.png"
---

# Phasor lookup in cosine

One common usage of the **phasor~** object is to readrepeatedly through a stored table of numbers. In that way, instead of just producing a simple linear ramp shape, **phasor~** can actually be used to produce any shape. In this example, we're using it to read repeatedly through one half of a sinusoid, so that we repeatedly get just the positive half of a sine wave.

The **cycle~** object actually uses a stored wavetable containing one period of a cosine waveform, and reads through that repeatedly at the specified frequency, as if it had its own internal phasor. But instead of using the **cycle~** object's internal phasor, you could use a stopped (0 Hz) **cycle~** object just for its wavetable, and use the **phasor~** to read through a portion of it, via the right (phase offset) inlet.

## Objects used

`number~` ×2, `scope~` ×2, `ezdac~`, `cycle~`, `+~`, `*~`, `phasor~`, `fpic`

*Patch contains 25 boxes, 10 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/phasorlookupincosine.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/phasorlookupincosine.png`
