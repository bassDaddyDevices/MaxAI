---
type: cookbook
name: "Abstraction for S-curve crossfading"
summary: "A good way to mix two sounds is to give one sound a gain between 0 and 1 and give the other sound a gain that's equal to 1 minus that amount."
chapter: "Max"
keywords: ["cycle~", "clip~", "sig~"]
objects: ["*~", "+~", "clip~", "cycle~", "sig~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/scurveabstraction.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/scurve~.png"
---

# Abstraction for S-curve crossfading

A good way to mix two sounds is to give one sound a gain between 0 and 1 and give the other sound a gain that's equal to 1 minus that amount. Thus, the sum of the two gain factors will always be 1, so the sum of the sounds will not clip. When sound A has a gain of 1, sound B will have a gain of 0, and vice versa. As one gain goes from 0 to 1, the gain of the other sound will go from 1 to 0, so you can use this method to create a smooth crossfade between two sounds. This sort of linear mixing or crossfading is demonstrated in a [useful subpatch for mixing and balancing two sounds](http://music.arts.uci.edu/dobrian/maxcookbook/useful-subpatch-mixing-and-balancing-two-sounds).

This example does essentially the same thing, except that it uses a non-linear curve for the crossfade. The fade between the two sounds does not go in a straight line from 0 to 1; instead, each sound is faded using half of a cosine waveform. When the two sounds are mixed together, the sum of their gain factors is still 1, which avoids clipping and maintains a constant unity gain, and provides a slightly smoother fade-in and fade-out for each of the two sounds.

The difference between a straight linear crossfade and this S-curve shaped crossfade (depicted above), is subtle; both are acceptable. The fading curve, calculated by a specific mathematical formula (often referred to as the fade "law"), has a unique effect in terms of the perceived loudness of the sound(s).

## Objects used

`*~` ×5, `+~` ×3, `clip~`, `sig~`, `cycle~`

*Patch contains 20 boxes, 15 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/scurveabstraction.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/scurve~.png`
