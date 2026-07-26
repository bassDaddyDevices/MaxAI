---
type: cookbook
name: "Count with incdec"
summary: "The incdec object is a user interface object with an up arrow and a down arrow."
chapter: "Max"
keywords: ["incdec", "number"]
objects: ["incdec", "sel"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/incdecCounter.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/incdecCounter.png"
---

# Count with incdec

The **incdec** object is a user interface object with an up arrow and a down arrow. It stores a number, and it also has an internal step size (*increment* attribute), which is 1 by default. When you click on the up or down arrow, **incdec** will increase or decrease its internal value by the increment, and send out the number. You can link it to a **number** box with a patch cord going to and from the **number** box, so that the **number** box always shows the current value of the **incdec** and the **incdec** will be updated if the user changes the **number** box, as shown in this example. You can also use the messages *inc* and *dec* to simulate the behavior of a mouse click on the up or down arrow.

## Objects used

`sel`, `incdec`

*Patch contains 9 boxes, 9 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/incdecCounter.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/incdecCounter.png`
