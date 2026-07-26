---
type: cookbook
name: "Panning between four front speakers"
summary: "This patch is an abstraction for panning a sound source among four speakers arranged in a row—or more precisely, in an equidistant arc—in front of the listener."
chapter: "MSP"
keywords: ["pan~", "panning", "gate~"]
objects: ["*~", "+~", "-~", "clip~", "cycle~", "gate~", "meter~", "number~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/fourspeakerpanning~.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/fourspeakerpanning_0.png"
---

# Panning between four front speakers

This patch is an abstraction for panning a sound source among four speakers arranged in a row—or more precisely, in an equidistant arc—in front of the listener. The sound’s virtual location in the stereo field, from extreme left to extreme right, is specified as a control signal value from 0 to 1. The four speakers define the boundaries of the three regions between them, each of which constitutes one third of the total stereo field. Between each pair of speakers, a constant-intensity panning subpatch calculates the balance between the two speakers that surround the virtual location of the sound. Thus, as the virtual location is in the left third of the stereo field, from 0.000 to 0.333, the sound is sent to a subpatch that pans between channels 1 and 2; when the virtual location is in the middle third, from 0.333 to 0.667, the sound is panned between channels 2 and 3; and when the virtual location is in the right third, from 0.667 to 1.000, the sound is panned between channels 3 and 4. This is accomplished by taking the panning value from 0 to 1, multiplying it by 3 and adding 1 to it, and using that value to control two **gate~** objects that route the audio signal to the proper panning algorithm and provide the proper 0-to-1 panning value for the correct constant-intensity panning subpatch. In this way, the speakers that are not in use at any given time receive no audio signal, and the two speakers that surround the virtual location diffuse the sound. Constant intensity of sound is maintained by this method, and the listener’s sense of localization of the sound is optimized.

## Objects used

`*~` ×10, `cycle~` ×7, `+~` ×6, `meter~` ×4, `gate~` ×2, `-~` ×2, `number~`, `clip~`

*Patch contains 74 boxes, 59 connections, 3 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/fourspeakerpanning~.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/fourspeakerpanning_0.png`
