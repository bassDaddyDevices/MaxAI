---
type: cookbook
name: "Amplitude modulation of sinusoidal tones"
summary: "Amplitude modulation is the use of one oscillator—usually but not obligatorily at a sub-audio frequency—to modify the amplitude of a sound."
chapter: "MSP"
keywords: ["cycle~", "*~", "+~"]
objects: ["*~", "+~", "cycle~", "ezdac~", "scope~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/amplitudemodulationofsinusoidaltones.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/amplitudemodulationofsinusoidaltones.png"
---

# Amplitude modulation of sinusoidal tones

Amplitude modulation is the use of one oscillator—usually but not obligatorily at a sub-audio frequency—to modify the amplitude of a sound. (Ring modulation, shown in [Multiplication of Sine Tones](multiplication-sinusoidal-tones.md), is one particular example of amplitude modulation.) The modulating oscillator is added to a main amplitude value to create an amplitude that fluctuates up and down from the central value. The result, at low modulation frequencies, is called "tremolo".

In this example, the modulating oscillator on the right (with a frequency of 6 Hz, initially) has an amplitude of 0.45, and that output is added to a constant value of 0.5. The result is a value that fluctuates sinusoidally between 0.05 and 0.95 six times per second, without ever going to 0, which is used to control the amplitude of the audible oscillator.

## Objects used

`*~` ×3, `cycle~` ×2, `+~`, `scope~`, `ezdac~`

*Patch contains 22 boxes, 11 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/amplitudemodulationofsinusoidaltones.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/amplitudemodulationofsinusoidaltones.png`
