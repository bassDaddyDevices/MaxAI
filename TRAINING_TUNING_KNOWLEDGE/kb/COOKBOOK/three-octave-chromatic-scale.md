---
type: cookbook
name: "Three-octave chromatic scale"
summary: "This example plays a 12-note chromatic scale over three octaves with timed triggers."
chapter: "Max"
keywords: ["metro", "counter", "makenote", "noteout", "MIDI"]
objects: ["!/", "+", "counter", "loadbang", "makenote", "metro", "noteout"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/3octavechromaticscale.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/3octavechromaticscale.png"
---

# Three-octave chromatic scale

This example plays a 12-note chromatic scale over three octaves with timed triggers. 

The rate of the trigger (events per second) is converted into the time needed by the **metro** object by dividing the rate by 1000 to be expressed in ms. As shown in the patch, the rate initially set to 8 per second will be 125 ms, which is then used as an argument for the **metro**. When the **toggle** turns on the **metro**, **metro** starts sending *bangs* at its time interval to the **counter** object which is set to count 36 bangs (0 to 35) as needed to play 12-note chromatic scale over three octaves. By adding 48 to these numbers, they are raised two octaves to use pitches in the mid-range starting from C2, and are used as the pitch note needed by the **makenote** object combined with a note-on velocity. The value used as time interval of the **metro** is also used as the note duration of the **makenote** which sends the pitch number and velocity to the **noteout** object to transmit the note-on/off messages to a MIDI device.

## Objects used

`noteout`, `makenote`, `+`, `loadbang`, `!/`, `metro`, `counter`

*Patch contains 24 boxes, 15 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/3octavechromaticscale.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/3octavechromaticscale.png`
