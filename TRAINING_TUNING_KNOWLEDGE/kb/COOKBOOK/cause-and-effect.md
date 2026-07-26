---
type: cookbook
name: "Cause and effect"
summary: "This example shows a series of events that causes a movie to start playing."
chapter: "Max"
keywords: ["metro", "route", "unpack", "select", "prepend", "read"]
objects: ["delay", "jit.pwindow", "jit.qt.movie", "metro", "prepend", "route", "select", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/causeandeffect.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/causeandeffect.png"
---

# Cause and effect

This example shows a series of events that causes a movie to start playing. 

First, when you click on the message *read blading.mov* or *read*, the message is sent to the object **jit.qt.move**, which then reports *read <movie\_name> 1* from the right outlet if successful. 

The **route** object will look for the word *read* from the incoming message, and pass it to the **unpack** object if it it receives. The object **unpack** will separate the movie name and the success flag, 1 or 0 which is reported from the right outlet of the **unpack**, and is sent to the **select** object. 

If **select** receives a success flag *1*, it triggers the **metro** object to start playing the movie by the **jit.qt.movie,** and also sends the message *<movie\_name>* to the **prepend** object to display the name of the movie being played. 

If the success flag is *0*, a *bang* is sent with a 5 milliseconds delay via **delay** object to the **prepend** object to display the message *failed to read file.*

## Objects used

`jit.pwindow`, `delay`, `select`, `prepend`, `unpack`, `route`, `metro`, `jit.qt.movie`

*Patch contains 21 boxes, 15 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/causeandeffect.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/causeandeffect.png`
