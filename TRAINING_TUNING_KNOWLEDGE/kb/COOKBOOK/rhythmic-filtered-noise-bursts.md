---
type: cookbook
name: "Rhythmic filtered noise bursts"
summary: "This example demonstrates how the settings of a resonant bandpass filter can be altered in a rhythmic way for musical effect."
chapter: "MSP"
keywords: ["reson~", "noise~", "table", "filters"]
objects: ["-", "counter", "dbtoa", "ezdac~", "line~", "metro", "mtof", "noise~", "pack", "reson~", "select", "spectroscope~", "table"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/noiserhythm01.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/noiserhythm01.png"
---

# Rhythmic filtered noise bursts

This example demonstrates how the settings of a resonant bandpass filter can be altered in a rhythmic way for musical effect. The three **table** objects each contain 16 numbers, which will be used as the parameter settings for gain, center frequency, and Q in a **reson~** object. The numbers in the **table** objects are looked up by a **counter** that cycles repeatedly through the table indices, 0 to 15. When you turn on the **toggle**, it first resets the **counter**, then it turns on the **metro** which begins triggering the **counter** at the designated time interval, every 150 ms. You can double-click on a **table** to see its contents.

The numbers have been chosen to make an interesting pattern of filter settings, turning the input white noise into a sort of percussion instrument. The gain values are specified in decibels from 0 to 60, and those numbers are then converted into amplitude values for the **line~** object, which creates a simple amplitude envelope for each note. The center frequency values are specified as MIDI pitch values, which are converted to Hertz for the center frequency of the filter. The Q values in the right inlet of **reson~** give each note a differently focused resonance quality.

## Objects used

`table` ×3, `reson~`, `line~`, `pack`, `mtof`, `dbtoa`, `-`, `counter`, `metro`, `select`, `noise~`, `spectroscope~`, `ezdac~`

*Patch contains 19 boxes, 21 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/noiserhythm01.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/noiserhythm01.png`
