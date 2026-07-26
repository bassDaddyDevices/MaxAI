---
type: cookbook
name: "A 16-stage note sequencer"
summary: "Analog synthesizers of the early 1970s often included a \"sequencer\" capable of cycling through a timed sequence of 16 different voltages (which would most commo"
chapter: "Max"
keywords: ["sequencer", "table", "counter", "radiogroup", "algorithmic composition"]
objects: ["counter", "loadbang", "makenote", "metro", "noteout", "pgmout", "prepend", "radiogroup", "table"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/sequencer16stage.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/sequencer16stage.png"
---

# A 16-stage note sequencer

Analog synthesizers of the early 1970s often included a "sequencer" capable of cycling through a timed sequence of 16 different voltages (which would most commonly be used to control the pitch of an oscillator). This likely explains why so many fast 16-note repeating patterns appeared in electronic music of that time period. Most voltage sequencers allowed the user to set the voltage for each step of the sequence, and to adjust the timing interval (rate) of the sequence. This patch imitates those sequencers, using MIDI pitches instead of a voltage-controlled oscillator.

The MIDI pitches and velocities of the sequence are stored in **table** objects (arrays), one for the pitches and one for the velocities. The **table** objects are set (in their Inspector) to "Save Data with Patcher", so they already contain a pattern of pitches and velocities when the patch is opened. You can play the sequence by turning on the **metro**, and you can change the speed of the sequence by changing the rate of the **metro**.

You can change the contents of a **table** by sending it a *set* message. The first argument of *set* is the index where you want to start saving values, and the subsequent numbers will be stored beginning at that index. So, in this example, when you click on one of the message boxes that contains a list of pitches, it gets the words *set 0* placed before it (indicating to set values of the **table**, starting at index 0) and thus replaces the contents of the pitch table.

Some sequencers (notably on Buchla synthesizers of that period) allowed the user to change the starting and ending stage of the sequence. In this patch we use number boxes to set the minimum and maximum output of the **counter** object, causing it to cycle through specific numbers within the 0-15 range. (Note that we also use the output of the "min" and "max" number boxes to set each other's minimum and maximum values, so that the minimum will always be less than or equal to the maximum.)

The visual display object on the lower right is a **radiogroup** object. It's normally used as a user interface object that allows a user to choose one of several items, but in this case we're just using it as a handy way to display which stage of the sequence is currently playing.

Turn on the **metro**, experiment with different rates, change the pitch content, and experiment with different "min" and "max" limits for the **counter**.

## Objects used

`table` ×2, `pgmout`, `radiogroup`, `loadbang`, `noteout`, `makenote`, `metro`, `counter`, `prepend`

*Patch contains 32 boxes, 31 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/sequencer16stage.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/sequencer16stage.png`
