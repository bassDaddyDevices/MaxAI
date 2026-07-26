---
type: cookbook
name: "Six upper harmonics of a fundamental"
summary: "This is an algorithmic generator of sound patterns based on the number 6."
chapter: "MSP"
keywords: ["harmonics", "filter", "reson~", "algorithmic composition"]
objects: ["%", "*", "*~", "+", "-", "counter", "dac~", "f", "line~", "live.gain~", "loadbang", "metro", "noise~", "reson~", "sel", "urn", "uzi", "zl"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/second6harmonics.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/second6harmonics.png"
---

# Six upper harmonics of a fundamental

This is an algorithmic generator of sound patterns based on the number 6. The patch *a)* uses the **urn** object to generate a list consisting of a random ordering of the six digits 0 to 5, *b)* uses a **metro** to bang a **counter** six times per second in order to count through that list of digits, *c)* uses those six digits to produce six frequencies representing harmonics 7 through 12 of a fundamental (110 Hz, initially), and *d)*uses those frequencies to set the center frequency of a resonant bandpass filter (the **reson~** object) to produce six differently filtered noise bursts. Each pattern of six frequencies, played at a rate of six notes per second, is repeated six times, and then a new pattern is selected. (The **urn** is re-triggered whenever the **counter** has completed six cycles.)

## Objects used

`zl` ×2, `loadbang`, `dac~`, `live.gain~`, `line~`, `-`, `f`, `*~`, `noise~`, `reson~`, `*`, `+`, `metro`, `%`, `sel`, `counter`, `urn`, `uzi`

*Patch contains 31 boxes, 34 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/second6harmonics.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/second6harmonics.png`
