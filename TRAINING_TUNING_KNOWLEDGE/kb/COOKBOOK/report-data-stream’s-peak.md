---
type: cookbook
name: "Report a data stream’s peak"
summary: "If you know the peak value you’re looking for, you can use sel, >=, peak, or past."
chapter: "Max"
keywords: ["change"]
objects: ["-", "<", "change", "i", "sel", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/bangWhenMaximumValueReached.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/bangWhenMaxValReached.png"
---

# Report a data stream’s peak

If you know the peak value you’re looking for, you can use **sel**, **>=**, **peak**, or **past**. If you’re looking at a stream of data coming in in real time and you don’t know what value you’re looking for, then you can only report that a peak has occurred after the peak has been reached, once the input value has started to decrease. This example does just that.

## Objects used

`change`, `i`, `sel`, `<`, `-`, `t`

*Patch contains 12 boxes, 10 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/bangWhenMaximumValueReached.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/bangWhenMaxValReached.png`
