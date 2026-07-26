---
type: cookbook
name: "Random pitch variation of an oscillator"
summary: "If you want to make an oscillator with unstable pitch, you can modulate the pitch of the oscillator using a noise signal as an exponent with a base of 2, and ap"
chapter: "MSP"
keywords: ["modulation", "noise", "oscillator", "pitch", "random", "rand~"]
objects: ["*~", "/", "ezdac~", "live.gain~", "mtof", "number~", "pow~", "rand~", "saw~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/randompitchvariation_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/randompitchmodulation_0.png"
---

# Random pitch variation of an oscillator

If you want to make an oscillator with unstable pitch, you can modulate the pitch of the oscillator using a noise signal as an exponent with a base of 2, and applying that as a multiplier to vary the fundamental frequency. In that way, when the noise ranges from -1 to +1, it will cause a pitch variation of ±1 octave, whatever the fundamental frequency of the oscillator. Divide the amplitude of the noise by 1200 if you want to be able to represent pitch variation in cents. The **rand~** object provides linearly-interpolated noise, with a new random value chosen at whatever rate you specify.

## Objects used

`number~` ×2, `*~` ×2, `/`, `ezdac~`, `live.gain~`, `saw~`, `mtof`, `rand~`, `pow~`

*Patch contains 26 boxes, 17 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/randompitchvariation_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/randompitchmodulation_0.png`
