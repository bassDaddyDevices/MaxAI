---
type: cookbook
name: "Change number box with key"
summary: "This example shows how you can increase or decrease the number in a number box each time the up or down arrow keys are pressed."
chapter: "Max"
keywords: ["key", "sel", "number", "incdec"]
objects: ["incdec", "key", "sel"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/changenumboxwithkey.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0626 Change number box with key.png"
---

# Change number box with key

This example shows how you can increase or decrease the number in a **number** box each time the up or down arrow keys are pressed. The **incdec** object is made to be connected to the integer **number** box in the manner shown here. The messages *inc* and *dec* to **incdec** will increment and decrement the attached **number** box. So, here we detect the press of the up and down arrow keys, and trigger the *inc* and *dec* messages in response.

## Objects used

`incdec`, `sel`, `key`

*Patch contains 6 boxes, 7 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/changenumboxwithkey.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0626 Change number box with key.png`
