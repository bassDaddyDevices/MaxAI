---
type: cookbook
name: "Schedule timepoints in straight clock time"
summary: "To schedule timepoints in straight clock time, it’s easy enough to do, and if I want transport to report the current time to me in straight clock time, that’s easy enough to do, too."
chapter: "Max"
keywords: ["transport", "translate", "timepoint"]
objects: ["0", "print", "sel", "timepoint", "translate", "transport"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/transportDemo.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/transportDemo.png"
---

# Schedule timepoints in straight clock time

To schedule timepoints in straight clock time, it’s easy enough to do, and if I want **transport** to report the current time to me in straight clock time, that’s easy enough to do, too. In the following example, when you start the **transport** with the toggle, it rewinds to time 0 and schedules a timepoint to occur at time 5.5 seconds. By default the **transport**’s tempo is 120 bpm, so we would expect that timepoint to happen 11 beats later, i.e., after 5280 ticks, i.e. on beat 4 of bar 3 (in the default timesig of 4/4). Now try changing the tempo and restart the **transport**. The **timepoint** object will do whatever it needs to do to translate the 5.5 second request into the correct number of ticks based on the new tempo, and it will still trigger at the correct time. Of course, **transport** will report different tempo-relative times for that instant, but the **translate** object will reliably translate the ticks back into clock time for printing.

## Objects used

`print`, `0`, `sel`, `translate`, `timepoint`, `transport`

*Patch contains 23 boxes, 17 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/transportDemo.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/transportDemo.png`
