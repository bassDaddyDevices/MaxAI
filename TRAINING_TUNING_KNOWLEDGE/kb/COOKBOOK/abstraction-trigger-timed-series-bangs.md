---
type: cookbook
name: "Abstraction to trigger a timed series of bangs"
summary: "A common need in computer music is to schedule events to occur at regular intervals of time."
chapter: "Max"
keywords: ["bangbang", "counter", "route", "bang", "timing"]
objects: ["b", "counter", "maximum", "metro", "patcherargs", "route", "sel", "t", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/timedbangs.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/timedbangs.PNG"
---

# Abstraction to trigger a timed series of bangs

A common need in computer music is to schedule events to occur at regular intervals of time. This patch can be used as an abstraction for easily scheduling a specific number of events to occur at regular intervals.

To cause a specific number of events to happen immediately, **bangbang** (**b**) and **uzi** are the best objects to use. To schedule a timed sequence of events at regular intervals of time, the most common method is to combine the **metro**, **counter**, and **select** objects, as demonstrated in the example "[Timed counting in Max](timed-counting-max.md)". This patch provides an efficient single-object method for timed events (and timed counting). By saving this patch with a descriptive name, such as "timedbangs.maxpat" in the Max search path, you can use it as an abstraction (object) in any patch. A demonstration of this patch in use can be found in the example "[Try the timedbangs abstraction](http://try-timedbangs-abstraction)".

The most important information that such an object needs is "how many events?" and "with what time interval?". In this abstraction, those two items of information can be provided as typed-in arguments, or via the second and third inlets, or as a list in the left inlet. When a *bang* or an *int* or a *float* message is received in the left inlet, the specified number of *bang*s (and the count of those events) will be sent out with the specified timing.

Let's look at how the patch works. It requires an object to take care of the timing/scheduling, namely the **metro** object, and an object to keep track of how many *bang*s have been sent out, namely **counter**. When a *bang* is received in the left inlet, it first resets the **counter** to its minimum (1) then starts the **metro**, which will have whatever millisecond time interval has been specified for it. When the **counter** reaches its specified maximum (the "how many" number), the number *1* is sent out of **counter**'s third outlet, and is detected by the **sel *1*** object, which triggers a *stop* message to the **metro** to stop it from sending any more *bang*s.

This patch foresees a couple of other messages the user might want to use. One is that an *int* or *float* message in the left inlet will set the "how many" number and will also do the same thing as a *bang* would. A *list* of "how many" and "how often" numbers in the left inlet will also set those values and act as the starting *bang*. And, because all programs should have a way to turn them off, this patch recognizes a *stop* message, which stops the **metro** immediately.

## Objects used

`t` ×2, `b` ×2, `maximum`, `route`, `sel`, `counter`, `unpack`, `patcherargs`, `metro`

*Patch contains 31 boxes, 25 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/timedbangs.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/timedbangs.PNG`
