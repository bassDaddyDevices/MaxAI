---
type: cookbook
name: "Automated blues \"improviser\""
summary: "This patch shows an idea for an automated improvising algorithm."
chapter: "Max"
keywords: ["change", "table", "line", "algorithmic composition"]
objects: ["*", "+", "change", "line", "makenote", "metro", "noteout", "pack", "random", "table"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/bluesscaleplayer.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/bluesscaleplayer2.png"
---

# Automated blues "improviser"

This patch shows an idea for an automated improvising algorithm. At regular intervals of time, which one might think of as the length of a musical phrase (every 1.6 seconds in this example), the **metro** object chooses a new random number from 0 to 35. That number will be considered a target number toward which the **line** object should go. The number is packed into a *list* along with a destination time of 1600 milliseconds and a grain of 80 milliseconds, to tell **line** to go to the target number in 1600 ms, outputting an intermediate number every 80 ms (roughly every 1/12 of a second). The numbers that come out of **line** are used to look up a MIDI pitch number in the **table**. The **table** has been filled with a configuration of pitches, saved in the patcher file, that outline a bluesy scale, essentially a Dorian mode with an added #4 degree. The number from **line** is also used to determine the velocity of each note, causing the melody to crescendo as it ascends, and diminuendo as it descends.

Crucially important to this algorithm, the **change** object is used to filter out repetitions that inevitably occur in the output of **line**. In the time of each 1600 ms phrase, **line** will output 20 numbers (1600/80); if the difference between the new target and the previous target is less than 20, as it frequently will be, some repetitions will occur. Since **change** filters those out, we get unpredictable pauses in the melody, resulting in syncopated rhythms. While not musically "intelligent", those unpredictable rhythms combined with the blues-inflected pitch choices evoke the impression of a (quite mediocre) jazz improviser.

## Objects used

`metro`, `noteout`, `+`, `*`, `pack`, `makenote`, `change`, `random`, `table`, `line`

*Patch contains 27 boxes, 20 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/bluesscaleplayer.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/bluesscaleplayer2.png`
