---
type: cookbook
name: "Continuous change of delay time causes a pitch shift"
summary: "The way we commonly avoid clicks when changing the amplitude of a sound is to interpolate smoothly sample-by-sample from one gain factor to another, using an object such as line~."
chapter: "MSP"
keywords: ["ezdac~", "gain~", "line~", "pack", "sfplay~", "tapin~", "tapout~", "+~", "AIFF file", "WAVE file"]
objects: ["+~", "ezdac~", "gain~", "line~", "pack", "sfplay~", "tapin~", "tapout~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/delaychangewithinterpolation.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/delaychangewithinterpolation_0.png"
---

# Continuous change of delay time causes a pitch shift

The way we commonly avoid clicks when changing the amplitude of a sound is to interpolate smoothly sample-by-sample from one gain factor to another, using an object such as **line~**. Does that same technique work well for making a smooth change from one delay time to another? As it turns out, that's not the best way to get a seamless unnoticeable change from one delay time to another, because changing the delay time gradually will actually cause a pitch shift in the sound.

This patch demonstrates that fact. When you provide a new delay time, it interpolates to the new value quickly; you'll hear that as a quick swoop in pitch. You can get different types of swoop with different interpolation times, but this sort of gradual change in delay time always causes some amount of audible pitch change. Of course there are ways to use this pitch change for desired effects such as [flanging](simple-flanging.md), but what we seek here is a way to get from one fixed delay time to another without any extraneous audible artifacts. In most cases, a better method for that would be [crossfading between two differently delayed versions of the sound](demonstration-crossfading-delay.md).

## Objects used

`gain~` ×2, `sfplay~`, `tapout~`, `tapin~`, `line~`, `pack`, `+~`, `ezdac~`

*Patch contains 19 boxes, 15 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/delaychangewithinterpolation.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/delaychangewithinterpolation_0.png`
