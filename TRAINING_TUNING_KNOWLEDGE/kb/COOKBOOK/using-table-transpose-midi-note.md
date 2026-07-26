---
type: cookbook
name: "Using table to transpose a MIDI note"
summary: "Pitch transposition of MIDI notes is easy; you simply add (or subtract) some number of semitones to the pitch value."
chapter: "Max"
keywords: ["MIDI", "table", "gate"]
objects: ["+", "gate", "table"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/transpose.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/transpose.png"
---

# Using table to transpose a MIDI note

Pitch transposition of MIDI notes is easy; you simply add (or subtract) some number of semitones to the pitch value. However, whenever you transpose a MIDI note-on message you have to make sure to transpose the corresponding note-off message by the same amount. Otherwise, the note will not get turned off and you'll get a "stuck" note that never ends. This can particularly be an issue when you're using an algorithmic process to transpose MIDI pitches; if the transposition value is changing, there's a risk that the note-off message will be transposed differently from the note-on.

This example provides an abstraction that takes care of that problem. It uses a **table** to store the transposed value of a midi note-on pitch, and then looks up that transposed pitch when the corresponding note-off message occurs. Notice the use of the **gate** obejct to direct traffic. It is opened and closed by the MIDI velocity value from the second **inlet**, which should (and normally will) arrive just before the pitch value. Because all note-ons have a positive velocity and all note-offs have a zero velocity, the **gate** will be open for note-ons and closed for note-offs. Thus, for each note-on, the pitch passes through the **gate**, gets transposed, and the transposed pitch is stored in the **table**, and then the original pitch value reads that transposition from the **table** and sends it out the **outlet**. For note-offs, though, the pitch does not go through the **gate**, so the previous transposed pitch is simply read out of the **table** again, turning off the transposed note.

You can use this abstraction in any patch, instead of simply using a **+** object. Notice that the **+ *#1*** argument will be replaced by whatever argument is typed in the **transpose** object box in the main patch, allowing you to specify an initial transposition value.

## Objects used

`+`, `gate`, `table`

*Patch contains 16 boxes, 9 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/transpose.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/transpose.png`
