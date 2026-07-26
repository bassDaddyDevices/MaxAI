---
type: cookbook
name: "Flashing LED with metro"
summary: "If you have a patch in which you are flashing a button object using metro, the flashing may be delayed due to different degrees of operation priorities when used in a more complicated patch."
chapter: "Max"
keywords: ["metro", "delay", "button", "lcd"]
objects: ["delay", "lcd", "loadbang", "metro"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/flashingledwithmetro.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0585 Flashing LED with metro.png"
---

# Flashing LED with metro

If you have a patch in which you are flashing a **button** object using **metro**, the flashing may be delayed due to different degrees of operation priorities when used in a more complicated patch. Here are few things to consider if you’d like to prioritize or have more control over the flashing. 

1) For best timing with metro, be sure that Overdrive is checked in the Options menu.

2) Screen drawing operations are considered low priority, so they may be affected by strong demands in other timing-critical areas.

3) The **button** object has its own built-in on-off flash time that is already pretty close to 200 ms, so the flashing at that rate may not always appear obviously to be 5 times per second.

4) If you want to build your own flashing graphic in **lcd**, as shown in the example below, you have more control over the flash duration.

5) Screen drawing operations can be rather "expensive" computationally, so you might question whether this particular flashing **button** is really necessary.

6) A **button** flashing constantly 5 times per second does show that something is happening at a fast rate, but beyond that, it doesn’t really provide all that much useful information. Maybe just a **toggle** or a LED showing that the metro is on would be sufficient from a GUI standpoint, and would save a lot of screen drawing.

## Objects used

`loadbang`, `delay`, `lcd`, `metro`

*Patch contains 10 boxes, 9 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/flashingledwithmetro.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0585 Flashing LED with metro.png`
