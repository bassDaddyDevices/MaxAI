---
type: cookbook
name: "Delay with tapin~ and tapout~"
summary: "In addition to the delay~ object, another way to implement a circular buffer for audio delay is with the pair of objects called tapin~ and tapout~."
chapter: "MSP"
keywords: ["tapin~", "tapout~"]
objects: ["!-~", "*~", "+~", "ezdac~", "live.dial", "live.numbox", "sfplay~", "tapin~", "tapout~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/tapoutdemo~.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0283 Delay with tapin~ and tapout~.png"
---

# Delay with tapin~ and tapout~

In addition to the **delay~** object, another way to implement a circular buffer for audio delay is with the pair of objects called **tapin~** and **tapout~**. Those two objects are always used as a pair; the outlet of a **tapin~** object should only be connected to the left inlet of a **tapout~** object. The **tapin~** creates a buffer space in memory, and the **tapout~** object accesses that memory some amount of time in the past; the patch cord connecting those two ensures that they refer to the same place in memory.

Unlike with **delay~**, for **tapin~** and **tapout~** you specify the buffer size and the delay time in milliseconds rather than samples.

Most user interfaces for delay provide the user with a control for the delay time (either specified as an absolute time or as a tempo-relative rhythmic unit) and a control for the balance between the original (“dry”) sound and the delayed (“wet”) sound. We’ve provided those two controls here, as a **live.numbox** and a **live.dial**.

## Objects used

`live.numbox`, `tapout~`, `tapin~`, `!-~`, `+~`, `*~`, `ezdac~`, `live.dial`, `sfplay~`

*Patch contains 25 boxes, 19 connections, 1 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/tapoutdemo~.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0283 Delay with tapin~ and tapout~.png`
