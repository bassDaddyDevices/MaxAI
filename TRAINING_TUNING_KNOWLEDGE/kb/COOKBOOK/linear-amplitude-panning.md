---
type: cookbook
name: "Linear amplitude panning"
summary: "The simplest and most common way to localize a sound in a stereo field is to vary the relative intensity between the two speakers."
chapter: "MSP"
keywords: ["sig~", "*~", "line~", "noise~", "slider"]
objects: ["*~", "-~", "ezdac~", "line~", "metro", "noise~", "number~", "pack", "sig~", "slider"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/linearpanning.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/linearpanning.png"
---

# Linear amplitude panning

The simplest and most common way to localize a sound in a stereo field is to vary the relative intensity between the two speakers. To make a sound seem to move from one side to the other, for example, you can start with the level of one speaker set to 1 and the other speaker set to 0, then gradually turn one down to 0 as you bring the other up to 1. This patch demonstrates a direct linear pan from one speaker to the other.

The left side of the patch is just a noisemaker, to give us a sound to pan. It creates 8 short bursts of white noise per second. The right side of the patch performs the linear intensity pan. It uses a **line~** object to go from 0 to 1 (or 1 to 0) in a given amount of time. (The L-R switch to go from 0 to 1 or 1 to 0 is just a slider object set to have only two possible values.) The value of the **line~** object is used directly to control the amplitude of the right speaker, and it is subtracted from a constant signal of 1 to create the opposite amplitude (i.e., 1 minus the amplitude of the right speaker) for the left speaker.

When the panning is at the midway point, both speakers will have an amplitude setting of 0.5 (i.e. -6 dB); but two speakers at -6 dB generally does not produce the same perceived loudness as one speaker at 0 dB. Therefore, this sort of linear amplitude panning creates a slightly lower perceived intensity in the middle than when the sound is panned fully to one side or the other. Because the intensity is lower in the middle, the impression it gives it that the sound is moving slightly farther away from the listener as it moves toward the center location. This is considered to be undesirable in most cases, so panning algorithms often compensate for this effect by increasing the amplitude by about 3 dB as the panning moves to the center position, as demonstrated in "[Constant power panning using square root of intensity](constant-power-panning-using-square-root-intensity.md)".

## Objects used

`*~` ×3, `line~` ×2, `ezdac~`, `number~`, `-~`, `pack`, `slider`, `metro`, `noise~`, `sig~`

*Patch contains 24 boxes, 18 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/linearpanning.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/linearpanning.png`
