---
type: cookbook
name: "Tap to set tempo"
summary: "Instead of the user entering a tempo value by hand, it’s possible to have the computer measure the tempo at which the user is tapping the beat."
chapter: "Max"
keywords: ["key", "select", "split", "timer", "transport", "!/"]
objects: ["!/", "key", "select", "split", "timer", "transport"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/taptempo-simple.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/taptempo-simple.png"
---

# Tap to set tempo

Instead of the user entering a tempo value by hand, it’s possible to have the computer measure the tempo at which the user is tapping the beat. Do do that, you simply need to measure the time difference between two events (taps).

In this example, I use the ‘t’ key of the computer keyboard (t for tempo, or for tap) to set the ‘tempo’ attribute of the **transport**. The **timer** object measures the time between a bang in its left inlet and a bang in its right inlet. Note that, because of the right-to-left message-order rules of Max, a *bang* to both inlets of **timer** coming from the same outlet of another object will first go to **timer**‘s right inlet, sending out the time since the previous *bang* in the left inlet, and only then will it go to **timer**‘s left inlet to serve as the starting event for the next interval to be timed. Thus each *bang* message triggered by the ‘t’ key will serve as both the ending event for one time interval measurement and the starting event for the next time interval measurement.

I use a **split** object to pay attention only to time intervals that would yield a reasonable tempo. I determined that metronomic tempos between 30 and 300 provides an ample range of possibilities. A tempo of 300 bpm implies a beat interval of 200 ms, and a tempo of 30 bpm implies a beat interval of 2000 ms. This also serves the crucial function of filtering out (ignoring) extremely short values that might result from the user inadvertently double-tapping the ‘t’ key, and it filters out the extremely long time intervals that would be measured when the user first taps after not having tapped for a long time. The millisecond time interval between taps is then divided into 60,000 (the number of milliseconds in a minute) to calculate the tempo in terms of beats per minute. (The object **!/** means “divide into”, as opposed to **/** which means “divide by”.) That bpm value is then used as the argument in a *tempo* message to **transport** to set the tempo of the global transport in Max. (You can probably imagine how this tap-tempo functionality could be used in conjunction with "[Metronome using General MIDI sounds](metronome-using-general-midi-sounds.md)".

This tap tempo patch allows the user to set the tempo as quickly as possible, with just two taps. There are a couple potential downsides of this quickness, however. One is that the tempo leaps immediately to a new rate with each tap, which could possibly result in some jarring changes. The other is that the user must tap at precisely the right tempo on the first try, or else must keep re-tapping till the right tempo is achieved. A possible method of addressing those potential problems might be to take the average of a few successive taps, thus leading to a slightly more gradual (but still pretty efficient) change to a new tempo. That approach is demonstrated in "[Tap to teach tempo to Max](tap-teach-tempo-max.md)".

## Objects used

`transport`, `!/`, `select`, `key`, `timer`, `split`

*Patch contains 18 boxes, 9 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/taptempo-simple.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/taptempo-simple.png`
