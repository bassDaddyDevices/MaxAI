---
type: cookbook
name: "Resonant lowpass filter"
summary: "The lores~ object is a resonant lowpass filter."
chapter: "MSP"
keywords: ["lores~", "spectroscope~", "filters", "lowpass"]
objects: ["ezdac~", "gate~", "lores~", "noise~", "sfplay~", "spectroscope~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/loresdemo.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/loresdemoimage.png"
---

# Resonant lowpass filter

The **lores~** object is a resonant lowpass filter. It requires only two parameter values: the cutoff frequency and a resonance factor from 0 to 1. Increasing the resonance will increase the steepness of the filter (increase the attenuation effect on frequencies above the cutoff) and also will accentuate the frequencies right around the cutoff. Experiment with different resonance values between 0 and 1 to hear the effect, and try sweeping the cutoff frequency through different registers. The parameters can also be controlled by a signal, such as a low-frequency oscillator, for continuously changing effects.

## Objects used

`spectroscope~` ×2, `ezdac~`, `sfplay~`, `noise~`, `gate~`, `lores~`

*Patch contains 17 boxes, 16 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/loresdemo.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/loresdemoimage.png`
