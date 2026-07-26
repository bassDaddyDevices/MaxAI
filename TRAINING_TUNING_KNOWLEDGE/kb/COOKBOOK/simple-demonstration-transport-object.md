---
type: cookbook
name: "Simple demonstration of the transport object"
summary: "Timing objects such as metro normally operate with their time interval specified in milliseconds, and they are controlled by the Max scheduler, which is always running."
chapter: "Max"
keywords: ["loadbang", "metro", "timing", "transport"]
objects: ["loadbang", "metro", "transport"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/simpletransport.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/simpletransport.png"
---

# Simple demonstration of the transport object

Timing objects such as **metro** normally operate with their time interval specified in milliseconds, and they are controlled by the Max scheduler, which is always running. You can alternatively specify timing using [tempo-relative time](http://algocomp.blogspot.com/2008/08/tempo-relative-timing.html) units such as rhythmic note values or bars, beats, and ticks, in which case the timing object will be controlled by a global master clock called the "transport", which can itself be easily started and stopped via the **transport** object. The transport relies on those more music-oriented timing units such as bars, beats, and ticks (480ths of a quarter note), the absolute millisecond duration of which actually depends on the tempo (beats per minute) and the time signature that have been assigned to the transport. (By default, the tempo is 120 beats per minute and the time signature is 4/4.) Timing objects that use tempo-relative time units only run when the transport is running.

In the example patch, try starting the two **metro** objects. The one that uses millisecond timing always works, whereas the one that has its time interval specified as a quarter note only works when the **transport** object is turned on.

When the **transport** object receives a *bang* in its left inlet, it sends out information about the current state of the transport such as its tempo, time signature, and current time. The transport is always at some clock time. Even if you never use a **transport** object, the transport still has a default tempo (120 bpm), time signature (4/4), and a time of "1.1.0" (bar 1, beat 1, and 0 ticks) a.k.a. "0 ticks". By connecting the outlet of a **metro** to the left inlet of **transport**, you can get regular reports of the current time of the transport.

Notice that, unless you turn on the **transport** and the **metro** at exactly the same instant, it's likely that **metro** will be offset from the transport's beat by some number of ticks. However, you can use the **metro**'s *quantize* attribute to specify a grid to which it must snap its output. For example, sending it the message *quantize 4n* will cause it to send its output only at times that are exactly on the transport's quarter-note beat.

## Objects used

`metro` ×2, `loadbang`, `transport`

*Patch contains 31 boxes, 17 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/simpletransport.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/simpletransport.png`
