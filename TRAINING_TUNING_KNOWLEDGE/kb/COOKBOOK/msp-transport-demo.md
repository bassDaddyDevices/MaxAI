---
type: cookbook
name: "MSP transport demo"
summary: "This patch demonstrates several capabilities, features, and techniques of the transport object for managing tempo-relative time, the translate object for conver"
chapter: "MSP"
keywords: ["transport", "phasor~", "line", "bbu", "timepoint", "translate"]
objects: ["*~", "+~", "cycle~", "delay", "ezdac~", "f", "line~", "metro", "phasor~", "select", "timepoint", "translate", "transport"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/msptransportdemo.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/msptransportdemo.png"
---

# MSP transport demo

This patch demonstrates several capabilities, features, and techniques of the **transport** object for managing tempo-relative time, the **translate** object for converting between tempo-relative time and absolute time values, and the timing objects that can use tempo-relative timing such as **metro**, **delay**, **timepoint**, **phasor~**, and **line~**.

The **transport** object allows you to control timing in Max with a timeline-based model using musical time units such as bars and beats, a governing tempo (beat rate), and note values such as eighth notes, triplet sixteenth notes, etc.

In this example we use transport to start and stop musical time, schedule an event to happen at a particular moment in musical time, govern the timing of objects such as **metro** and **delay** that would usually use time specified in milliseconds, and control MSP objects such as **phasor~** and **line~** that would otherwise use a rate specified in Hertz or time in milliseconds.

This patch plays upward frequency glissandi, each one lasting for one beat, according to whatever tempo is set for the transport. For the first measure of musical time, it plays glissandi from 220 Hz to 440 Hz. Then, starting at the downbeat of measure 2, a **timepoint** object triggers a **line~** object to move the overall range of the glissandi steadily upward so that two measures later, by the downbeat of measure 4, the glissandi are going from 440 Hz to 880 Hz. At the downbeat of measure 5, the program stops the transport and turns off MSP.

The timing interval of the **metro** is set to *4n*, which will be exactly one quarter note at whatever tempo is specified. It is also quantized to the nearest quarter note on the timeline, with the *@quantize 4n* argument, so that it only sends out its *bang*s right on the beat according to the transport. The only thing the **metro** actually does in this patch is bang the **transport** object, which causes it to report information about its current state (location in time, tempo, etc.).

The MSP objects **phasor~** and **line~** are capable of understanding tempo-relative note values. You can also use the **translate** object to convert between absolute time values and musical time values if you need to. In this patch, it's not strictly necessary to convert the musical time interval *2 0 0* from bbu (bars, beats, and units) into ms (milliseconds), but we do so anyway to show that, no matter what the tempo we set for the transport, the **translate**object will make the proper conversion for us.

When expressing time in bbu format, it's important to understand the distinction between a *position* in time (a specific location on the transport's timeline, in terms of bars, beats, and ticks) and an *interval* of time (an amount of time). In the **timepoint** object, we're specifying a precise moment in time, bar 2 beat 1 exactly, whereas for the **line~**object we're specifying an amount of time, 2 measures exactly, for it to reach its destination. In conversation we might use similar expressions to say these two things: "bar two" or "two bars"; but it's important to keep in mind that they're different things, and are expressed differently in bbu units. Also, notice that bbu units can be expressed in either of two ways, either as a space-separated list of three integers or as a dot-separated set of three integers.

## Objects used

`*~` ×2, `delay`, `f`, `line~`, `timepoint`, `translate`, `ezdac~`, `+~`, `cycle~`, `phasor~`, `select`, `metro`, `transport`

*Patch contains 34 boxes, 34 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/msptransportdemo.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/msptransportdemo.png`
