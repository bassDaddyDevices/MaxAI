---
type: cookbook
name: "The translate object updates its output when the tempo changes"
summary: "The translate object converts a message from one type of time unit to another."
chapter: "Max"
keywords: ["timing", "translate", "transport"]
objects: ["translate", "transport"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/timingupdate.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/timingupdate.png"
---

# The translate object updates its output when the tempo changes

The **translate** object converts a message from one type of time unit to another. It uses the tempo and the time signature of the transport to do that calculation. If the tempo or the time signature changes, the result of the calculation would be different, so **translate** always resends its output whenever the **transport** receives a change to one of those values.

A time message of bars-beats-units, such as "1.1.0", can potentially mean either of two things. It can mean a time *position* of the transport -- an instant in time -- such as "the first beat of the first bar" or it can mean a time *interval*—a duration of time between two positions—such as "one bar plus one beat's worth of time". When translated into some other time unit such as ticks, these two possibilities might not yield the same result. The time position at the first beat of the first bar is 0 ticks, but the duration of one beat plus one bar (assuming a time signature of 4/4) would be 2400 ticks (1 bar + 1 beat = 5 quarter notes = 480 x 5 ticks = 2400 ticks). Therefore, the **translate** object can operate in either of two modes—position mode or interval mode—determined by its *mode* attribute. In this example we're trying to find the duration of one measure, so we have explicitly set the *mode* attribute to "interval".

## Objects used

`translate`, `transport`

*Patch contains 11 boxes, 6 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/timingupdate.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/timingupdate.png`
