---
type: cookbook
name: "Abstraction for crossfading delay times of a remote tapin~ object"
summary: "If we want to use the delay crossfading technique shown in \"Abstraction for crossfading between delay times(abstraction-crossfading-between-delay-times.md)\" for"
chapter: "MSP"
keywords: ["abstraction", "tapin", "tapout~", "crossfade"]
objects: ["!-~", "*~", "+", "+~", "gate", "line~", "pack", "t", "tapout~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/tapoutxfade~.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/tapoutxfade~.png"
---

# Abstraction for crossfading delay times of a remote tapin~ object

If we want to use the delay crossfading technique shown in "[Abstraction for crossfading between delay times](abstraction-crossfading-between-delay-times.md)" for multiple different delays of the same sound, the simplest solution is just to make multiple copies of that abstraction and send the same audio signal to each one. However, that's a bit inefficient in terms of memory usage because each subpatch would have its own **tapin~** object, each of which would be containing the same audio data.

The way that **tapin~** and **tapout~** communicate is that when audio is turned on **tapin~** sends out a *tapconnect* message. When **tapout~** receives a *tapconnect* message it refers to the memory in the **tapin~** object above it. So we really could modify our delay crossfade abstraction so that, instead of receiving an audio signal in its left inlet, it receives the message *tapconnect*. That way, multiple copies of the abstraction could all refer to the same **tapin~** object in their parent patch.

So this example shows a modification of the delay crossfading abstraction, in which the **tapin~** object has been removed, and in which the left inlet expects a *tapconnect* message instead of an audio signal. It will refer to a **tapin~** object in the parent patch. You can save this abstraction with a different name, such as **tapoutxfade~**.

## Objects used

`tapout~` ×2, `*~` ×2, `+`, `gate`, `t`, `pack`, `line~`, `+~`, `!-~`

*Patch contains 21 boxes, 20 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/tapoutxfade~.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/tapoutxfade~.png`
