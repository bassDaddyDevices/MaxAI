---
type: cookbook
name: "Transport-controlled phasor~"
summary: "A phasor~ object, like other MSP objects such as cycle~ that use a rate for their timing, can have its repetition rate specified as a transport-related tempo-re"
chapter: "MSP"
keywords: ["phasor~", "translate", "transport", "play~", "sah~", "abs~", "timing", "tempo"]
objects: ["*~", "+~", "<~", "abs~", "buffer~", "dac~", "delta~", "info~", "loadbang", "noise~", "phasor~", "play~", "sah~", "translate", "transport", "trapezoid~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/temporelativephasor.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/temporelativephasor.png"
---

# Transport-controlled phasor~

A **phasor~** object, like other MSP objects such as **cycle~** that use a rate for their timing, can have its repetition rate specified as a transport-related tempo-relative time value (note values, ticks, etc.). So if you want a **phasor~** to work at a rate that is related to the transport's tempo, you can type in a tempo-relative time as an argument to specify its period of repetition instead of typing in a frequency. The existence of that time syntax argument will tell the object to use the transport's tempo as its basis of timing. MSP objects that are using transport-based timing will work––and will respond to changes in the transport's tempo––even when the transport is not turned on. By setting the object's 'lock' attribute to 1, you can cause the object to sync precisely to the quantized note value of the moving transport. When the ‘lock’ attribute is on, the object will only work when the transport is on.

In this example we have a **phasor~** with a typed-in argument of ‘16n’ and a ‘lock’ attribute setting of 1. This means that it will only move forward when the transport is running, and its period of repetition will be synchronized with the 16th notes of the transport.

Read some sound into the **buffer~**. This will cause the length of the sound file to go to the right inlet of the **\*~** object. The **noise~** object generates random sample values in the range -1 to 1. We use the sample-and-hold trick that was explained in “[Triggering events with each cycle of a phasor](triggering-events-each-cycle-phasor.md)” to get individual random numbers at a time that's perfectly synchronized with the start of each **phasor~** cycle, we take the absolute value of that (to force the number to be positive) scale it to be a useful time value within the **buffer~**, and use that as a starting point for **play~** each time the **phasor~** starts a new ramp. By translating the 16th-note note value into milliseconds, we can scale the **phasor~** ramp to traverse one 16th note's worth of time in the **play~** object, offset by the starting point we got from **sah~**. The same **phasor~** is used to make a trapezoidal amplitude envelope for each 16-note chunk of audio we play. The result is randomly-chosen 16th-note soundbites played continuously and in synchrony with the transport (and click-free) from the **buffer~**.

## Objects used

`*~` ×4, `loadbang`, `info~`, `buffer~`, `+~`, `translate`, `abs~`, `noise~`, `sah~`, `<~`, `delta~`, `phasor~`, `trapezoid~`, `dac~`, `play~`, `transport`

*Patch contains 27 boxes, 29 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/temporelativephasor.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/temporelativephasor.png`
