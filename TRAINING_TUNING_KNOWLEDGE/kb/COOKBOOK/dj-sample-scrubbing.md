---
type: cookbook
name: "DJ-like sample scrubbing"
summary: "Although playback is normally achieved by progressing linearly through a stored sound, other ways of traversing the sound can give interesting results."
chapter: "MSP"
keywords: ["buffer~", "play~", "cycle~", "sampling"]
objects: ["*~", "+~", "buffer~", "cycle~", "dac~", "play~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/scrubsample.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/scrubsample.png"
---

# DJ-like sample scrubbing

Although playback is normally achieved by progressing linearly through a stored sound, other ways of traversing the sound can give interesting results. Moving quickly back and forth in the sound is analogous to the type of "scrubbing" achieved by rocking the reels of a tape recorder back and forth by hand, or by "scratching" an LP back and forth by hand. In this example, we use a **cycle~** object to simulate this sort of scrubbing. The output of **cycle~** is normally in the range -1 to 1, so if we want its output to be used as the playback position in milliseconds, we need to scale its output with a **\*~** object and offset it with a **+~**; the multiplication will determine the depth (range) of the scrubbing, and the addition will determine the center time around which the scrubbing takes place. Initially the patch is set to scrub the entire range of the **buffer~** in a time span (period) of 40 seconds. You can get different results by changing, in particular, the rate and depth values. For example, with a depth of about 250 milliseconds and a rate of about 3 Hz, you can get a sound that's much more like tape reel scrubbing or LP scratching.

## Objects used

`dac~`, `play~`, `+~`, `*~`, `cycle~`, `buffer~`

*Patch contains 14 boxes, 10 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/scrubsample.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/scrubsample.png`
