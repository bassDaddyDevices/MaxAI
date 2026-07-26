---
type: cookbook
name: "Using delay for inactivity trigger"
summary: "What's the best way to detect lack of activity?"
chapter: "Max"
keywords: ["delay", "schedule"]
objects: ["delay", "key", "print"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/delayForInactivityTrigger.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/delayForInactivityTrigger.png"
---

# Using delay for inactivity trigger

What's the best way to detect lack of activity?

Let's say you want to Max to notify you if it has received no input for ten seconds. You could use a **metro** or a **clocker** to monitor activity constantly, and use a **>=** object to check when a time period 10,000 ms has been reached. However, by doing that, you're going to do lots of tests, only the last of which will give the looked-for result. There's an easier way.

The **delay** object schedules a single *bang* for some time in the future. When **delay** receives an *int* in its left inlet, it uses that number as the delay time in milliseconds, and schedules a *bang* to be sent out in that amount of time. If another *int* or *bang* comes in its left inlet before that first *bang* is sent out, **delay** will cancel the first scheduled *bang* and schedule a new one. Thus, if you use each incoming event to schedule a *bang* in **delay**, the *bang* will never get sent out as long as there is activity before the scheduled time. If, however, there is no activity for that given amount of time, the *bang* will get sent out of **delay**, and can be used as a report of inactivity.

## Objects used

`print`, `delay`, `key`

*Patch contains 5 boxes, 4 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/delayForInactivityTrigger.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/delayForInactivityTrigger.png`
