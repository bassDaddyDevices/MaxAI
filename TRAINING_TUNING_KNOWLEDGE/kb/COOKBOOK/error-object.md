---
type: cookbook
name: "The error object"
summary: "When Max detects a bug or a problem in your patch, it posts an error message in the Max window, such as “sfplay~: cant find file <filename>”."
chapter: "Max"
keywords: ["error", "sfplay~", "AIFF file", "WAVE file"]
objects: ["error", "sfplay~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/errorobjectbasics_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/errorobjectbasics1.png"
---

# The error object

When Max detects a bug or a problem in your patch, it posts an error message in the Max window, such as “sfplay~: cant find file <filename>”. If you want to handle that error in your patch somehow, you can use the **error** object, which can sends those error messages out its outlet, and you can then use that message however you want (show it to the user, trigger other actions, etc.).

You can turn error watching on or off for each **error** object, and you can use the **route** object to detect certain kinds of errors. For simplicity, this example does nothing more than display the error message by sending it in the right inlet of a **message** box, but it does show the basic usage of the object.

## Objects used

`error`, `sfplay~`

*Patch contains 14 boxes, 7 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/errorobjectbasics_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/errorobjectbasics1.png`
