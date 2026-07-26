---
type: cookbook
name: "Controlling the range of a set of numbers"
summary: "This patch is intended to show how to generate any desired range of numbers by some combination of the following operations: 1) generate a set of possible numbe"
chapter: "Max"
keywords: ["pictslider", "random", "slider", "table", "offset"]
objects: ["!/", "*", "+", "loadmess", "makenote", "metro", "noteout", "pictslider", "random", "slider", "table"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/rangecontrol.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/rangecontrol.png"
---

# Controlling the range of a set of numbers

This patch is intended to show how to generate any desired range of numbers by some combination of the following operations: 1) generate a set of possible numbers with one of the number-generating objects shown in the example "[Some objects for generating numbers](http://music.arts.uci.edu/dobrian/maxcookbook/some-objects-generating-numbers)", 2) optionally scale the size of the range by multiplying all the numbers by a common factor, 3) optionally offset the range by adding a certain amount to each of the numbers, 4) optionally use those numbers to look up a stored set of desired results.

In this case, we're accomplishing a specific task with that method. We're playing randomly chosen notes within one octave (8 notes) of a particular scale, at one of 8 randomly chosen possible loudnesses (within a certain dynamic range), and we're able to control the pitch and loudness ranges with the mouse.

The millisecond interval of the **metro** determines how often the notes are played, and we use the same number of milliseconds to control the duration of the notes. To express that note rate in terms of notes per second, we just divide the notes per second into 1000 to convert it to milliseconds per note.

For pitch, we generate random numbers 0 to 7, add some number (from 0 to 28) to that, and then use that as an “index” to read from a **table** (array) of 36 possible pitch values. We entered the desired pitch values into the array by typing them as text and pasting them into the **table**. So, the range of randomly chosen indices is always just 8 possibilities (the random numbers 0 to 7) but we can use those to access any part of the **table** by offsetting them; the offset can be anywhere from 0 to read from the lowest part of the array (indices 0 to 7) up to 28 to read from the highest part of the array (indices 28 to 35).

We want to do something similar for the note velocities. In this case, the precise velocities are not so important as that they be within a desired range — low velocities for softer notes and high velocities for louder notes. So the actual math we do for the velocities is somewhat arbitrary, but it does illustrate the control of range, scale, and offset. We choose a range of random numbers 0 to 7. We multiply that by 4 so that the numbers now go by fours from 0 to 28; thus there will always be 8 possible velocities, but always within a range that's constrained so that the difference between the maximum and the minimum is 28. We add an offset that's variable between 48 and 98; so when the offset is at its lowest we get velocities from 48 to 76, and when the offset it at its greatest we get velocities from 98 to 126.

The **slider** object is handy in this regard because you can do scaling and offsetting within the **slider** by setting its 'mult' (multiplier) and 'min' (minimum) attributes in the Inspector. The velocity slider actually just goes from 0 to 25, but internally that gets multiplied by 2 and has 48 added to it, so the output of the slider actually goes by twos from 48 to 98.

But what if we want to control both pitch and velocity with the mouse at the same time? The **pictslider** object is a two-dimensional user-interface slider, which sends out both x and y coordinates of the slider's position. Here we have set its x axis to go from 0 to 28 for the array index offset, and we have set its y axis to go from 0 to 25 for the velocity slider (which will translate that into a velocity offset from 48 to 98). Set the note rate you want, turn on the **metro** with the **toggle**, then drag on the **pictslider** to hear the change in pitch range and velocity range.

## Objects used

`slider` ×2, `+` ×2, `random` ×2, `pictslider`, `*`, `noteout`, `makenote`, `loadmess`, `!/`, `metro`, `table`

*Patch contains 36 boxes, 24 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/rangecontrol.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/rangecontrol.png`
