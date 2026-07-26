---
type: cookbook
name: "Calculate the range of rslider"
summary: "This example shows how to get the range of a rslider object."
chapter: "Max"
keywords: ["rslider", "swap", "difference", "range"]
objects: ["-", "rslider", "swap"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/CalculatersliderDifference.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/CalculatersliderDifference.PNG"
---

# Calculate the range of rslider

This example shows how to get the range of a **rslider** object. The right outlet of **rslider** outputs the max value, and the left outlet outputs the min value. In order to calculate the range, simply subtract the min from the max. However, one thing you should not overlook is that the max value comes out of **rslider** before the min value (because it’s farther to the right). This is where the **swap** object comes in handy; it swaps the order of the values, to send them to the **minus**(**-**) object in the correct order.

## Objects used

`-`, `swap`, `rslider`

*Patch contains 6 boxes, 7 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/CalculatersliderDifference.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/CalculatersliderDifference.PNG`
