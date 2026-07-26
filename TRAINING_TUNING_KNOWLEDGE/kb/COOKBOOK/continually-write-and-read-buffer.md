---
type: cookbook
name: "continually write to and read from a buffer~"
summary: "This example shows how to create a buffer~ that always contains the last ten seconds of audio coming out of and adc~."
chapter: "MSP"
keywords: ["adc~", "buffer~", "poke~", "count~", "ring buffer"]
objects: ["adc~", "buffer~", "count~", "poke~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/circularbuffer.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/tenseconds.png"
---

# continually write to and read from a buffer~

This example shows how to create a **buffer~** that always contains the last ten seconds of audio coming out of and **adc~**. (It assumes that the sampling rate is 44,100 Hz.) Even though a **tapin~** is already implemented as a ring buffer –– that is, it always contains the most recently received milliseconds of signal ––you can also use **count~** and **poke~** and **index~** to continually write to and read from a **buffer~**.

Keep in mind that one generally doesn’t move the buffer by moving every sample in memory, because that would be laborious; one uses a pointer to the current time (the most recently stored sample), which moves as you write into the buffer. Writing over-and-over into the same buffer keeps that buffer filled with the most recent signal. The idea is explained pretty well on Wikipedia’s page about "[Circular buffer](http://en.wikipedia.org/wiki/Ring_buffer)".

## Objects used

`adc~`, `count~`, `poke~`, `buffer~`

*Patch contains 7 boxes, 3 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/circularbuffer.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/tenseconds.png`
