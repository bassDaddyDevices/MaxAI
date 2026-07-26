---
type: cookbook
name: "Audio in RAM — buffer~ and related objects"
summary: "Preloading sound into random-access memory (RAM)—as opposed to reading it off of a hard disk—allows you more easily to access any point in the sound file instan"
chapter: "MSP"
keywords: ["buffer~", "groove~", "index~", "info~", "lookup~", "peek~", "play~", "poke~", "record~", "wave~", "RAM"]
objects: ["buffer~", "count~", "cycle~", "groove~", "index~", "info~", "lookup~", "peek~", "phasor~", "play~", "poke~", "record~", "sig~", "wave~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/objectsthataccessbuffer~.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/objectsthataccessbuffer~2.png"
---

# Audio in RAM — buffer~ and related objects

Preloading sound into random-access memory (RAM)—as opposed to reading it off of a hard disk—allows you more easily to access any point in the sound file instantaneously, read backwards as well as forwards, access different points in the sound simultaneously, etc. When reading from disk, you usually need to give the computer a tiny bit of advance notice to preload some of the sound into memory before you use it; that's why, if you have the RAM available, it often makes most sense just to preload whatever sound you’ll need into memory.

The **buffer~** object establishes a named location in RAM in which you can store audio data. You can preload a sound file (or a portion of a sound file) into that **buffer~** with the message *read* or *replace*. Other MSP objects can then refer to that memory location by name, and can use the data in various ways.

You can find examples of different ways to use the sound data in a **buffer~** by browsing through examples with the [**buffer~** keyword](keywords/buffer).

The patch above doesn’t really do much of anything, but it gathers together many (not all!) of the objects that can refer to a **buffer~**. You can Option-click (Alt-click on Windows) on each object to learn more about how it works.

## Objects used

`count~` ×2, `cycle~` ×2, `peek~`, `poke~`, `lookup~`, `phasor~`, `wave~`, `sig~`, `groove~`, `record~`, `play~`, `index~`, `info~`, `buffer~`

*Patch contains 57 boxes, 24 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/objectsthataccessbuffer~.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/objectsthataccessbuffer~2.png`
