---
type: cookbook
name: "Notify when a certain time has elapsed"
summary: "When we want to measure how much time something took, we use a stopwatch."
chapter: "Max"
keywords: ["stopwatch", "timer", "notify", "delay", "clocker"]
objects: ["/", ">=", "change", "clocker", "delay", "sel"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/bangsometimeinthefuture.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/bangsometimeinthefuture_0.png"
---

# Notify when a certain time has elapsed

When we want to measure how much time something took, we use a stopwatch. We click once at the beginning of the time we want to measure, click once at the end, and get a reading of the elapsed time. When we want a notification that a particular amount of time has elapsed we use a timer. We set the amount of time in the future that we want to be notified, start the timer, and the timer notifies us when that amount of time has passed.

In Max, there is no built-in object called “stopwatch”. The object that performs the stopwatch function described above is called **timer**. If you want an object with the timer functionality described above, use the **delay** object, as shown in this example. You might think you should start a clock object such as **clocker** *1000* (or **metro** *1000* banging a **counter**) and detect when it has reached a certain number, but that’s really what the internal Max scheduler does, so if all you care about is receiving the notification at the right time, **delay** is perfect. If you want to get intermediate notifications of how much time has elapsed (or a countdown of how much time remains), then indeed **clocker** (or **metro** with **counter**) is a good choice.

## Objects used

`/`, `change`, `sel`, `>=`, `clocker`, `delay`

*Patch contains 20 boxes, 13 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/bangsometimeinthefuture.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/bangsometimeinthefuture_0.png`
