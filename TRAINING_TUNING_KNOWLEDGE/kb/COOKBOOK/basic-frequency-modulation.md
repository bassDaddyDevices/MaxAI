---
type: cookbook
name: "Basic frequency modulation"
summary: "Frequency modulation refers to using the output of a low-frequency oscillator to continually alter (modulate) the frequency of another oscillator."
chapter: "MSP"
keywords: ["frequency modulation", "cycle~"]
objects: ["*~", "+~", "cycle~", "dial", "ezdac~", "live.gain~", "loadmess"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/FMexample.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/FMexample_0.png"
---

# Basic frequency modulation

Frequency modulation refers to using the output of a low-frequency oscillator to continually alter (modulate) the frequency of another oscillator. This example provides the user control of the amplitude and frequency of both the "carrier" oscillator (the one we hear directly) and the "modulator" oscillator (the effect of which we hear indirectly). The output of the modulating oscillator is added to a constant (the main frequency), thus causing the carrier frequency to fluctuate up and down around that central frequency.

In this patch, most of the user interface objects (the dials, the gain slider, etc.) have been set, in the Inspector, to send out a particular value as soon as the patch is loaded. The main frequency of the carrier is 500 Hz, and it's amplitude is scaled to -10 dB by the **live.gain~** object; the rate of the modulator is 6 Hz and its amplitude is 5. The main carrier frequency of 500 Hz is thus pushed up as high as 505 Hz and dips as low as 495 Hz, with a full cycle of modulation occurring 6 times per second.

## Objects used

`dial` ×2, `cycle~` ×2, `loadmess`, `+~`, `*~`, `live.gain~`, `ezdac~`

*Patch contains 19 boxes, 12 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/FMexample.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/FMexample_0.png`
