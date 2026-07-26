---
type: cookbook
name: "Using timepoints for interactive sequencing"
summary: "The timepoint object sends out a bang when the transport reaches a specified time position."
chapter: "Max"
keywords: ["bangbang", "coll", "if", "inlet", "looping", "makenote", "metro", "notein", "noteout", "outlet", "patcher", "random", "route", "select", "stripnote", "timepoint", "translate", "transport", "+"]
objects: ["+", "b", "coll", "if", "makenote", "metro", "notein", "noteout", "random", "route", "select", "stripnote", "timepoint", "translate", "transport"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/onemeasurevamp.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/onemeasurevamp.png"
---

# Using timepoints for interactive sequencing

The **timepoint** object sends out a *bang* when the transport reaches a specified time position. This can be useful for causing something to happen—or for starting an entire process—at a particular instant during the transport's progress. A **timepoint** might, for example, even trigger a new time position value to be sent to the **transport** object itself, thus causing the transport to leap to a different time.

In this example, when the transport reaches the downbeat of measure 8, the **timepoint *8.1.0*** object triggers the number *1*, which gets stored in the right inlet of the **if** object and also turns on the note-playing algorithm encapsulated in the **p *eachtimedifferent*** object. When the transport reaches the downbeat of measure 9, the **timepoint *9.1.0*** object triggers the **if** object either to set the transport back to time position 8.1.0 (if the value in the right inlet of **if** is 1) or to turn off the note-playing algorithm instead and allow the transport to proceed (if the value in the inlet of **if** is 0). In effect, this creates a loop in the transport, cycling repeatedly through measure 8 until 0 comes in the right inlet of **if**, which will allow the transport to proceed beyond the downbeat of measure 9.

The *0* in the right inlet of **if** is triggered when the MIDI note 55 (G below middle C) is received (or, of course, by clicking on the **message** box or the **toggle**). This shows how the transport can actually be controlled interactively by a performer. You could think of this patch as telling the transport to repeat a 1-measure "vamp" in measure 8 until a G below middle C is played, at which point it can continue forward. And since the downbeat of measure 8 re-triggers the note-playing algorithm to choose a whole new set of random numbers—specifying rhythmic value, velocity, base pitch, and pitch range—each time, each pass through measure 8 sounds different.

## Objects used

`random` ×5, `+` ×3, `translate` ×2, `select` ×2, `metro` ×2, `timepoint` ×2, `stripnote`, `notein`, `noteout`, `if`, `route`, `coll`, `b`, `makenote`, `transport`

*Patch contains 43 boxes, 49 connections, 1 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/onemeasurevamp.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/onemeasurevamp.png`
