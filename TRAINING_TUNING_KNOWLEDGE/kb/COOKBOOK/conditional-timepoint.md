---
type: cookbook
name: "Conditional timepoint"
summary: "The timepoint object automatically and reliably sends out a bang when the specified point in time is reached."
chapter: "Max"
keywords: ["gate", "metro", "select", "timepoint", "transport", "when"]
objects: ["gate", "metro", "select", "timepoint", "transport", "when"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/conditionaltimepoint.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/conditionaltimepoint.png"
---

# Conditional timepoint

The **timepoint** object automatically and reliably sends out a *bang* when the specified point in time is reached. How would you specify a point in time, and also make the notification “conditional”, such that it only occurs if a certain condition is met? This patch shows two different ways you might do that.

The method shown on the left is to have a **timepoint** object with no time specified. When the condition is met (the number 1 is received) the **timepoint** object receives a time specification. And if you want to cancel that, you can just set the **timepoint** to some time that will almost certainly never be reached.

The method shown on the right is to use a **gate** that can be conditionally opened (when the number 1 is received), and that is otherwise closed preventing the *bang* from the **timepoint** from getting through.

## Objects used

`timepoint` ×2, `when`, `metro`, `transport`, `gate`, `select`

*Patch contains 22 boxes, 13 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/conditionaltimepoint.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/conditionaltimepoint.png`
