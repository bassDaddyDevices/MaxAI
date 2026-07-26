---
type: cookbook
name: "Test interaural intensity difference"
summary: "One of the ways we determine where a sound is located is by comparing the sound's intensity in our two ears."
chapter: "MSP"
keywords: ["dbtoa", "click~", "intensity", "decibel"]
objects: ["*", "*~", "click~", "dBtoA", "ezdac~", "line~", "loadmess", "metro", "pack", "slider"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/testIID.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/testInterauralIntensityDifference.png"
---

# Test interaural intensity difference

One of the ways we determine where a sound is located is by comparing the sound's intensity in our two ears. A sound that is located to one side of us goes more directly into the ear that's on that side, whereas the sound has to diffract around our head to get to the other ear, so the intensity is usually greater on the side where the sound is located. That distinction is known as interaural intensity difference (IID). Therefore, playing the same sound in both stereo channels and increasing the amplitude of the sound in one channel can give the impression that the sound source is located off-center in the virtual stereo field. That's the basis of [intensity-based panning](stereo-balance-and-panning.md) effects.

This patch provides a way for you to test the directional effect of IID. It uses the **click~** object to play the shortest possible sound, a single-sample impulse of 1 amidst a stream of 0 values in an audio signal. Using the **slider**, you can increase or decrease the amplitude of the right channel by a certain number of decibels. The value in decibels is converted to an amplitude scaling factor by the **dbtoa** object, and that is used as the factor by which to multiply the signal in the right channel to get the desired amplitude change. (Intensity is proportional to the square of amplitude.)

## Objects used

`*~` ×2, `loadmess`, `metro`, `pack`, `line~`, `*`, `dBtoA`, `slider`, `ezdac~`, `click~`

*Patch contains 22 boxes, 16 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/testIID.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/testInterauralIntensityDifference.png`
