---
type: cookbook
name: "Trigger repeated actions metronomically"
summary: "The metro (metronome) object is the most obvious way to trigger repeated events in Max."
chapter: "MSP"
keywords: ["click~", "dac~", "metro", "metronome"]
objects: ["click~", "dac~", "metro"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/metronome_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/metronome_.png"
---

# Trigger repeated actions metronomically

The **metro** (metronome) object is the most obvious way to trigger repeated events in Max. Repetition is, of course, a key component of most music (and most time-based art in general), and the **metro** object encapsulates the whole low-level process of a) cause something to happen, b) schedule the same thing to happen at some future time and repeat the process. The only thing it needs to "know" is what time interval to use for its repetitions. You specify that time interval in milliseconds, by an initial argument and/or a number in the right inlet.

For a bit more about timed repetition, you could read [my blog article](http://algocomp.blogspot.com/2008/08/repetition-at-steady-rate_06.html) about it.

You many not find milliseconds to be the most musically useful unit with which to think about music, and in fact Max does provide a more music-friendly way to think about time, which you can also read about in [a blog article](http://algocomp.blogspot.com/2008/08/tempo-relative-timing.html) on the subject.

In this example **metro** doesn't really trigger anything very significant, but you should bear in mind that, since there are many objects that can be triggered by the *bang* message, a **metro** could trigger almost anything, including a whole other program.

## Objects used

`dac~`, `click~`, `metro`

*Patch contains 22 boxes, 11 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/metronome_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/metronome_.png`
