---
type: cookbook
name: "Circular quad panning"
summary: "This patch demonstrates the use of the cycle~ object to control quadraphonic panning in such a way as to simulate circular movement of a sound."
chapter: "MSP"
keywords: ["quadpan~", "panLRFB~", "pan~", "panning", "adstatus"]
objects: ["*~", "+~", "adstatus", "cycle~", "panLRFB~", "select"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/circularquadpanning~.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/circularquadpanning~.png"
---

# Circular quad panning

This patch demonstrates the use of the **cycle~** object to control quadraphonic panning in such a way as to simulate circular movement of a sound. It's an abstraction that can be used inside another patch to provide 4-channel distribution of a sound source. This abstraction uses another abstraction, which in turn uses another abstraction. So, in order for this patch to work, you will also need [the **panLRFB~** abstraction](../patches/panLRFB~.maxpat) demonstrated in "[Abstraction for quad panning using x,y coordinates](abstraction-quad-panning-using-xy-coordinates.md)", and [the **pan~** abstraction](../patches/pan~.maxpat) demonstrated in "[Constant-intensity panning subpatch](constant-intensity-panning-subpatch.md)". You will need to ownload those two abstractions and save them with the correct names in your Max file search path.

The **panLRFB~** abstraction expects values in the range from 0 to 1 in its second and third inlets, to specify the left-to-right panning and the front-to-back panning of the sound coming in its first inlet. To simulate circular movement of the sound, we use two low-frequency sinusoidal waveforms that are 1/4 cycle out of phase with one another, one to control the left-to-right panning and the other to control the front-to-back panning. Because the range of the **cycle~** objects' output is from -1 to 1, we need to do a little math to convert that range to 0 to 1, by multiplying by 0.5 and adding 0.5, making the range suitable for input to the **panLRFB~** abstraction.

When MSP is turned on, the **cycle~** object is in cosine phase (i.e., starts at 1) by default. You can alter the phase of a **cycle~** by adding a phase offset amount in its right inlet. To ensure that our two **cycle~** objects are exactly 1/4 cycle out of phase with each other, their phase offset is triggered by a notification that MSP has been turned on, which comes from the **adstatus *switch*** object. The phase offset values 0.75 and 0.5 were chosen so that the sound will initially be panned to the center-front of the four speakers when MSP is turned on. The value in the right inlet of this patch will determine the rate of circular revolution of the sound. 0 Hz means no movement, a positive rate causes clockwise movement, and a negative rate causes counter-clockwise movement. For example, a rate of -0.05 Hz would cause the sound to circle the space counter-clockwise once every 20 seconds.

Because this panning method uses both left-right panning and front-back panning, for most locations on the circle all four speakers are diffusing sound. The combination of the two types of panning gives a fairly convincing constant-intensity circular panning effect. This is different from another method, shown in "[Quadraphonic panning based on radial angle](quadraphonic-panning-based-radial-angle.md)" and encapsulated in the **quadpan~** abstraction described there. In that case, a single value from 0 to 1 for radial angle is used, and the sound is panned only to the two speakers that are nearest to that angle.

## Objects used

`+~` ×2, `*~` ×2, `cycle~` ×2, `panLRFB~`, `select`, `adstatus`

*Patch contains 21 boxes, 18 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/circularquadpanning~.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/circularquadpanning~.png`
