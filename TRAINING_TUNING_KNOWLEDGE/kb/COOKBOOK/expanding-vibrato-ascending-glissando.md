---
type: cookbook
name: "Expanding vibrato on an ascending glissando"
summary: "A single phasor~ object can serve to synchronize several different modulations."
chapter: "MSP"
keywords: ["phasor~", "cycle~", "vibrato", "glissando"]
objects: ["*~", "+~", "cycle~", "ezdac~", "phasor~", "scope~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/expandingvibratoonascendingglissando.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/expandingvibratoonascendingglissando_0.png"
---

# Expanding vibrato on an ascending glissando

A single **phasor~** object can serve to synchronize several different modulations. In this example, the **phasor~** is scaled and applied in three different ways. On the left side of the patch, the output of the **phasor~** is cubed (multiplied by itself, then multiplied by itself again) so that it's a gentle curve instead of a straight line; that curve is then scaled by a factor of 1760, offset by 220, and used as the central frequency of the **cycle~** object. On the right side of the patch, the **phasor~** is used to control both vibrato rate and vibrato depth of a modulating **cycle~** object; so, in that case, the phasor~ has an indirect effect on the sound, modulating the rate and depth of another modulator. Because all of the modulations are synched to the same **phasor~**, they all recur with the same periodicity, but the accumulated effect of them makes the sound evolve within each period, creating a tone that rises in frequency while its vibrato increases in rate and depth.

## Objects used

`*~` ×7, `cycle~` ×2, `+~` ×2, `scope~`, `phasor~`, `ezdac~`

*Patch contains 32 boxes, 24 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/expandingvibratoonascendingglissando.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/expandingvibratoonascendingglissando_0.png`
