---
type: cookbook
name: "Half speed and double speed"
summary: "For specifying the rate of an audio file or the rate of a video file, the number 1 is used for normal rate, and we may want to be able to increase or decrease the rate by a certain ratio."
chapter: "Max"
keywords: ["dial", "pow", "speed"]
objects: ["dial", "loadmess", "pow", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/halfanddouble.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/halfanddouble.png"
---

# Half speed and double speed

For specifying the rate of an audio file or the rate of a video file, the number 1 is used for normal rate, and we may want to be able to increase or decrease the rate by a certain *ratio*. For example we may want to double or halve the rate, setting it to either 2 times normal or 1/2 of normal. Note that that’s a ratio of 2:1 or 1:2, but it’s not the same *difference* up as it is down. (It’s a difference of 1 upward, but a difference of 0.5 downward.) Therefore, to make a controller that has the “normal” rate 1 in the middle, 0.5 on one extreme and 2 on the other extreme, it may be best to use the controller to supply an exponent to the base 2. That way, we can use a controller that goes from -1 to 1, because 2-1 will equal 0.5, 21 will equal 2, and 20 (right in between -1 and 1) will equal the normal value 1.

This type of dial would be good for setting audio or video rate.

## Objects used

`loadmess`, `t`, `pow`, `dial`

*Patch contains 5 boxes, 5 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/halfanddouble.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/halfanddouble.png`
