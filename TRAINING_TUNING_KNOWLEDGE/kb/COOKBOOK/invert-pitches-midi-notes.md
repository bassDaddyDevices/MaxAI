---
type: cookbook
name: "Invert the pitches of MIDI notes"
summary: "To invert a musical phrase around a particular axis of symmetry, multiply the axis pitch by 2, then subtract the played pitches from that."
chapter: "Max"
keywords: ["abstraction", "clip", "gate", "inlet", "outlet", "patcherargs", "table", "trigger", "*", "!-"]
objects: ["!-", "*", "clip", "gate", "patcherargs", "t", "table"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/invertpitch.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/invertpitch.png"
---

# Invert the pitches of MIDI notes

To invert a musical phrase around a particular axis of symmetry, multiply the axis pitch by 2, then subtract the played pitches from that. For example to invert all pitches around the axis of middle C (MIDI key 60), you would subtract the pitches from 120.

When modifying the pitch of MIDI notes like this, you need to take care that the note-off message gets the same modification as the note-on message did, in order to make sure that the note gets turned off properly. The most reliable way to do that is to store the modified pitch associated with the unmodified pitch, and then look up the modification when the note-off message arrives. The **table** object is good for storing indexed values and looking them up later, so that's what's used in this example. Another good example of this, with a detailed explanation, is provided on a [different course website](http://music.arts.uci.edu/dobrian/IAP2009/examples.htm#Ex21), which handles note transposition in a very similar way.

When the axis of pitch symmetry is specified, it is multiplied by 2.0 and stored in the right inlet of a **!-** object. (Notice that we use a float multiplication so as to permit the specification of pitch axes that are precisely between two notes by using a .5 fractional part. For example, to specify an axis between E and F above middle C, one would use 63.5. That also happens to be exactly in the middle of the range of possible MIDI pitches, so it's what we use as a default value if the user does not type in any argument in the parent patch.)

This patch shows the use of the **patcherargs** object instead of a #1 argument. This allows us to specify default values for arguments, which will be sent out the left outlet of **patcherargs** as soon as the patch is loaded, but which will be replaced by any arguments that the user types in when the patch is used as an object in another patch. If the user does not type in any argument, the specified default value will be used.

When a pitch and a velocity come in, the velocity (which should come in first) is used to determine whether to open a **gate** to pass the pitch to the inverter. If it's a note-on, the pitch will get inverted and also will get stored in the **table** with the incoming pitch as its index. If it's a note-off, nothing will get through the **gate**, but the pitch will still be used to look up the previously stored inverted pitch and send that out.

Finally, since this inversion process could potentially flip the pitch outside of the 0-127 range, we use a **clip** object to restrict the output pitches within that range.

## Objects used

`patcherargs`, `*`, `table`, `gate`, `t`, `!-`, `clip`

*Patch contains 26 boxes, 14 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/invertpitch.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/invertpitch.png`
