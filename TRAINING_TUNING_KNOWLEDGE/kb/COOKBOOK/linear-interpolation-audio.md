---
type: cookbook
name: "Linear interpolation of audio"
summary: "For linear interpolation of a MSP signal, the line~ object sends out a signal that progress to some new value over a certain amount of time interpolating sample-by-sample along the way."
chapter: "MSP"
keywords: ["cycle~", "dac~", "dbtoa", "gain~", "line~", "linear interpolation", "metro", "noise~", "number~", "pack", "scope~", "select", "slider", "sqrt~", "*~", "!-~"]
objects: ["!-~", "*~", "0", "cycle~", "dac~", "dbtoa", "gain~", "line~", "metro", "noise~", "number~", "pack", "scope~", "select", "slider", "sqrt~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/interpolation2.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/interpolation_2.png"
---

# Linear interpolation of audio

For linear interpolation of a MSP signal, the **line~** object sends out a signal that progress to some new value over a certain amount of time interpolating sample-by-sample along the way. The input to **line~** is a pair of numbers representing a destination value (where it should eventually arrive) and a transition time (how long it should take to get there). It can receive multiple pairs of numbers in a single message, and it will use the pairs in order, starting each new pair when the previous transition has finished. The left part of this patch shows the use of **line~** to generate a short (50ms) amplitude envelope for a burst of white noise. It also uses another **line~** to pan the signal back and forth between audio channels 1 and 2, by turning up one channel while turning down the other channel. The right part of the patch uses **line~** to quickly smooth out transitions caused by new Max messages coming from the **slider**. Instead of instantaneous changes when a new number comes from the **slider** (which might cause clicks in the audio signal), **line~** interpolates over 20ms (882 samples).

Notice that, although this patch demonstrates the **line~** object, the actual changes to the audio are usually not linear, for perceptual reasons. The **slider** (which was set in its Inspector to send out values from -61 to 0) is expressing decibels, which are converted to amplitude by the **dbtoa** object, then smoothed with a linear interpolation between successive values. The panning portion of the patch uses linear fades for the gain of the two channels, but actually applies the square root of those gain values to create a constant-power panning effect. The **gain~** object (the volume control for the white noise) uses an exponential curve for gain change that is perceptually preferable to a straight linear scale.

## Objects used

`*~` ×4, `number~` ×3, `sqrt~` ×3, `line~` ×3, `dac~` ×2, `pack` ×2, `metro` ×2, `gain~`, `scope~`, `cycle~`, `dbtoa`, `0`, `select`, `slider`, `noise~`, `!-~`

*Patch contains 47 boxes, 42 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/interpolation2.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/interpolation_2.png`
