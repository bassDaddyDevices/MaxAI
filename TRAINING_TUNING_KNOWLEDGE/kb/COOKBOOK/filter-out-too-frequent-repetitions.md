---
type: cookbook
name: "Filter out too-frequent repetitions"
summary: "A common way of detecting the onset of a significant event in a continuous stream of data is to look for the data to exceed a certain threshold."
chapter: "Max"
keywords: ["gate", "onebang"]
objects: ["delay", "onebang", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/eventthinner_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/eventthinner(revised).png"
---

# Filter out too-frequent repetitions

A common way of detecting the onset of a significant event in a continuous stream of data is to look for the data to exceed a certain threshold. For example, detecting when the amplitude exceeds a certain level in an audio signal can indicate that a sonic event has occurred. One common problem with threshold detection is that data might fluctuate around the threshold, going above and below it many times, and thus giving a false reading of multiple triggering events. Thus, there are some times when you want to detect the first instance of something, but then ignore all subsequent instances until a certain amount of time has passed (until a certain period of inactivity has elapsed, during which there have been no subsequent triggering events).

This abstraction acts as a filter to remove multiple triggers. Once a triggering message has come in the left inlet, no further events will be sent out until a certain period of no events has elapsed. The wait time is specified in the right inlet. When a *bang* or any message comes in, the number *1* (on) is sent out the right outlet and a *bang* is sent out the left outlet. Then, any subsequent bangs that come in more frequently than the specified wait time will reset the wait time internally but nothing will be sent out. When the wait time has elapsed with nothing coming in the left inlet, a *0* (off) will be sent out the right outlet, and the object will then be ready to send out a new bang the next time a message comes in the left inlet.

This filters out multiple triggering events that occur too closely together, and it serves as an on/off switch for indicating the onset of an event and the end of a subsequent period of inactivity.

## Objects used

`t` ×2, `delay`, `onebang`

*Patch contains 13 boxes, 9 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/eventthinner_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/eventthinner(revised).png`
