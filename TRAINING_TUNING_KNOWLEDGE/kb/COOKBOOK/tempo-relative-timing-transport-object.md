---
type: cookbook
name: "Tempo-relative timing with the transport object"
summary: "This patch doesn't do anything musical in its own right, but it shows some features of the transport object for tempo-relative control of timing in Max."
chapter: "Max"
keywords: ["transport", "timer", "timepoint", "metro"]
objects: ["metro", "select", "timepoint", "timer", "transport"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/transportexample.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/transportexamle.png"
---

# Tempo-relative timing with the transport object

This patch doesn't do anything musical in its own right, but it shows some features of the **transport** object for tempo-relative control of timing in Max.

The **transport** object controls a global beat-based clock running at a specific metronomic tempo expressed in beats per minute (BPM). Other timing objects such as **metro**, **delay**, **pipe**, **makenote**, etc. can be synchronized to the global clock by specifying their timing interval in some tempo-relative format such as note values, ticks (parts per quarter note, usually 1/480 of a quarter note by default), or bars.beats.ticks.

At the top of this patch is a **transport** object for turning the global clock on and off. You can think of it like the tape-recorder-like controller that appears in most music sequencing software such as Pro Tools, Logic, Garage Band, Cubase, etc. You can set the global BPM tempo via the **transport** object's 'tempo' attribute, either with a typed-in attribute argument or by sending it a *tempo* message. You can cause it to jump to a particular location in time by sending a point in time, expressed in ticks, in the right inlet. (So, for example, *0* causes it to rewind to the beginning of time.) Whenever it's running, other timing objects that have their timing units expressed in one of the [tempo-relative timing formats](http://www.cycling74.com/docs/max6/dynamic/c74_docs.html#maxtime_syntax) will be controlled by the **transport**. So, when the **transport** is not running, those objects will be frozen in time.

The **metro** object just above that **transport** is there solely to bang the **transport** at regular intervals of time, causing the transport to send out a report of its current time status (meter, tempo, current location, etc.). Notice two important typed-in attributes in the **metro**. One is the 'active' attribute, which is set to 'on' (1), meaning that the metro will be active (on) whenever the transport is on. The other is 'quantize' meaning that the metro will snap all of its bangs to the nearest 16th note (or whatever time unit is specified) of the transport's beat-based clock. The 'quantize' attribute is useful for making sure that events occur right on a particular time unit such as on the beat, on the downbeat, etc.

The **timepoint** object schedules a bang to occur at a specific moment in time. (You can send it a new time if you want to schedule a different event, but each **timepoint** object can hold only one scheduled bang at a time.) You can use those bangs to cause particular things to occur, turn other processes on or off, etc. In this example, **timepoint** schedules a bang to occur on the downbeat of measure 9 of the global clock. At that moment it turns on a **toggle**, which in turn does three things. It resets the time of another (named) **transport** object, it turns on that other **transport**, and it turns on a **metro** that's associated with that **transport**.

If you give a **transport** object a name (by setting its 'name' attribute to some word), that **transport** will be completely independent of the global transport, and can have its own meter and tempo, can be started and stopped independently, and can thus be at different place in "time". (In short, the ability to name **transports** means that there can be two or more independent time universes.) In this example we named the **transport** 'slowtempo' and we assigned it a slow tempo of 48 BPM.

As shown, time intervals can be expressed as rhythmic values (or dotted values, or triplet values) or ticks (useful for less usual rhythmic values like quintuplets) or bars.beats.ticks (in this example we use '0.0.120' just to show that it's one possible way to express a 16th note; it's equivalent to '120 ticks' or '16n').

At the bottom of the patch we show the use of the **timer** object. It measures the time between a *bang* received in its left inlet and a *bang* received in its right inlet, so it's the best object for measuring the elapsed time between any two events (i.e., between any two Max messages). You can use **timer** to measure absolute time in ms even without the use of the **transport**. But you can also ask it to send out its time measurement as a tempo-relative time, by specifying a time format for its right outlet. In this example we use two **timer** objects, one associated with the global transport and the other associated with the 'slowtempo' **transport**, to measure the time between bangs from the 'slowtempo' **metro**. Notice that they both give the same millisecond measurement out their left outlets, but they give a different number of ticks, one based on the beat rate (tempo) of the global transport and the other based on the 'slowtempo' beat rate of 48 BPM.

## Objects used

`timer` ×2, `transport` ×2, `metro` ×2, `timepoint`, `select`

*Patch contains 49 boxes, 31 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/transportexample.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/transportexamle.png`
