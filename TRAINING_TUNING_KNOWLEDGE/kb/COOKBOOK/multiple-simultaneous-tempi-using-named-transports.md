---
type: cookbook
name: "Multiple simultaneous tempi using named transports"
summary: "One of the most intriguing features of the transport object is that there can be multiple independent transports in action at the same time."
chapter: "Max"
keywords: ["metro", "timer", "transport", "tempo"]
objects: ["counter", "loadbang", "makenote", "metro", "noteout", "timer", "transport"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/multitempo2.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/multitempo2.png"
---

# Multiple simultaneous tempi using named transports

One of the most intriguing features of the **transport** object is that there can be multiple independent transports in action at the same time. If a **transport** object has not had its *name* attribute set, it refers to the one global transport. However, you can create an independent transport by giving the **transport** object a name (i.e., by setting its *name* attribute to some name of your choice). You can then cause any other timing object to refer to that transport by setting the object's *transport* attribute to be the same as the name of the named **transport**.

For example, in this patch there are two **transport** objects, one named *slowtempo* and one named *fasttempo*, and their tempos have been set to be 56 bpm and 96 bpm respectively. The two **metro** objects on the left refer to the "slowtempo" transport for their timings, and the two **metro** objects on the right refer to the "fasttempo" transport. To further complicate matters, each **metro** is using a different rhythmic value as its time interval. From this example it should be clear that named **transport**s make it easy to create music that is polymetric, polyrhythmic, and that even has multiple simultaneous tempi governing different streams of rhythmic activity.

## Objects used

`counter` ×4, `timer` ×4, `makenote` ×4, `metro` ×4, `transport` ×2, `loadbang`, `noteout`

*Patch contains 35 boxes, 42 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/multitempo2.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/multitempo2.png`
