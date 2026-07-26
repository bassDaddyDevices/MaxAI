---
type: cookbook
name: "Stop a modulating oscillator"
summary: "When you want to turn off an oscillator in MSP, you don’t literally stop it or turn it off, you just turn its amplitude to 0; you multiply it by a constant value of 0 so that the resulting signal is 0."
chapter: "MSP"
keywords: ["LFO", "amplitude", "*~"]
objects: ["!=", "*~", "+~", "cycle~", "ezdac~", "line~", "live.gain~", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/stopmodulator.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/stopmodulator_0.png"
---

# Stop a modulating oscillator

When you want to turn off an oscillator in MSP, you don’t literally stop it or turn it off, you just turn its amplitude to 0; you multiply it by a constant value of 0 so that the resulting signal is 0. Setting an oscillator’s frequency to 0 does not turn the oscillator off, it just stops it dead in its tracks. (It is completing exactly 0 cycles per second, meaning it’s going nowhere.) It will continue to output whatever value it was at when its frequency was turned to 0, which in all likelihood will not be exactly at the value 0. If you want to ensure that an oscillator outputs 0 when its frequency is set to 0, you can simply multiply its amplitude by 0 at that moment (with a quick fade-out) and then multiply its amplitude by 1 (with a quick fade-in) whenever its frequency is non-zero again.

## Objects used

`cycle~` ×2, `*~` ×2, `ezdac~`, `live.gain~`, `line~`, `+~`, `t`, `!=`

*Patch contains 20 boxes, 14 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/stopmodulator.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/stopmodulator_0.png`
