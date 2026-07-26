---
type: cookbook
name: "Detect pauses in a data stream"
summary: "To detect a certain period of inactivity from a data source, you can use the delay object."
chapter: "Max"
keywords: ["delay", "inactivity"]
objects: ["delay", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/detectBreakInDataStream.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/detectBreakInDataStream.png"
---

# Detect pauses in a data stream

To detect a certain period of inactivity from a data source, you can use the **delay** object. The **delay** object can only delay one *bang* at a time, and if it receives another *bang* before the first one is sent out, it discards the first one and delays the second one. Thus, each time an event occurs, you can simply *bang* the **delay** to schedule a *bang* for some time in the future. As long as events keep occuring within that time interval, **delay** will never send anything out because the previous *bang* gets discarded. Only when the time interval elapses because of inactivity will **delay** be able to send its output.

## Objects used

`t`, `delay`

*Patch contains 6 boxes, 4 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/detectBreakInDataStream.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/detectBreakInDataStream.png`
