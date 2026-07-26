---
type: cookbook
name: "Beat divisions with transport"
summary: "In the MIDI specification, and in most DAW software, and in Max, the smallest unit of metric timing is expressed in \"ticks\", which is to say, partial units of a beat."
chapter: "Max"
keywords: ["transport", "metro", "counter", "makenote", "noteout"]
objects: ["+", "counter", "loadbang", "makenote", "metro", "noteout", "prepend", "random", "t", "transport", "umenu"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/beatdivisionswithtransport.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/beatdivisionswithtransport.png"
---

# Beat divisions with transport

In the MIDI specification, and in most DAW software, and in Max, the smallest unit of metric timing is expressed in "ticks", which is to say, partial units of a beat. Commonly the number of ticks used is 480 or 960 parts per quarter note. That number makes sense because it's divisible by 2, 3, 4, or 5 (and multiples of those).

In Max's tempo-relative timing, there are 480 ticks per quarter note, which means 1,920 ticks per 4/4 measure. There are note value designations for the most common rhythmic values (4n, 8n, 8nt), but not for less-common divisions such as quintuplets and septuplets. For those, you have to use ticks, because there's no note value symbol. For example, quintuplet sixteenth notes (of which there are 20 per measure) take 1,920/20 = 96 ticks each.

Because 7 is mutually prime with 480, there's not an exact number of ticks per septuplet anything. However, internally Max does keep track of ticks as floating-point numbers; you can actually specify fractions of ticks and Max will use the fractional part in its calculations. So, for example, a septuplet quarter note is actually 1920/7=274.285714 ticks. The most precise way to specify ticks for septuplets is to include the decimal part.

In this example patch, a new metrically-related note speed is chosen at random on each downbeat, ranging from whole note (1n) to thirty-second-note triplets (32nt). The divisions, whether expressed as note values or in ticks, are stored in a **umenu**. One **metro** triggers a new random choice on each downbeat, and the chosen note value (division of the whole note) is sent to a second **metro** as its quantized interval, using a **counter** to play notes of an ascending chromatic scale. A third **metro** triggers a high note on every beat, to serve as a reference.

## Objects used

`metro` ×3, `prepend` ×2, `noteout`, `makenote`, `+`, `counter`, `loadbang`, `umenu`, `random`, `t`, `transport`

*Patch contains 20 boxes, 21 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/beatdivisionswithtransport.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/beatdivisionswithtransport.png`
