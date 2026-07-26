---
type: cookbook
name: "A variation on the simple envelope follower"
summary: "This patch is very similar to the \"Simple envelope follower(simple-envelope-follower.md)\", with the difference that in this patch the line~ object's time of int"
chapter: "MSP"
keywords: ["envelope follower", "Peakamp~", "line~"]
objects: ["line~", "pack", "peakamp~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/envelopefollower2~.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/envelopefollower2~.png"
---

# A variation on the simple envelope follower

This patch is very similar to the "[Simple envelope follower](simple-envelope-follower.md)", with the difference that in this patch the **line~** object's time of interpolation to get to a detected peak value can be different from the **peakamp~** object's interval of evaluation. If, for example, the **peakamp~** interval is 10 ms and the **line~** ramp time is 2.5 ms, the envelope follower latency will range from only 2.5 to 12.5 ms.

## Objects used

`peakamp~`, `pack`, `line~`

*Patch contains 13 boxes, 6 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/envelopefollower2~.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/envelopefollower2~.png`
