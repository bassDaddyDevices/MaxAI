---
type: cookbook
name: "Isolate a single bin of an FFT"
summary: "This example shows how to isolate a single FFT bin, as opposed to displaying the entire spectrum."
chapter: "MSP"
keywords: ["fft~", "phasor~", "cartopol~", "sah~"]
objects: ["==~", "cartopol~", "ezdac~", "fft~", "number~", "phasor~", "sah~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/IsolateSingleBin.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/IsolateSingleBin.PNG"
---

# Isolate a single bin of an FFT

This example shows how to isolate a single FFT bin, as opposed to displaying the entire spectrum. The example uses **fft~** instead of **fftin~**, but the principle is the same.

The right outlet of **fft~** outputs the bin index. When that index matches the number selected in the **number** box, **sah~** will be triggered and will output the magnitude of that frequency bin.

## Objects used

`ezdac~`, `number~`, `cartopol~`, `sah~`, `==~`, `phasor~`, `fft~`

*Patch contains 10 boxes, 8 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/IsolateSingleBin.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/IsolateSingleBin.PNG`
