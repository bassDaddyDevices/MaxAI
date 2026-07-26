---
type: cookbook
name: "Change color of selected messages"
summary: "Utilizing the message box’s bgcolor attribute, it's possible to change a message’s color in when it is selected, so as to indicate which message is currently selected."
chapter: "Max"
keywords: ["message", "color", "bgcolor"]
objects: ["i", "pack", "route", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/ChangeUsedMessageColor.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/Changeusedmessagecolor.png"
---

# Change color of selected messages

Utilizing the **message** box’s *bgcolor* attribute, it's possible to change a **message**’s color in when it is selected, so as to indicate which message is currently selected.

Each time the user clicks on one of the four **message** boxes, the previously-selected **message** box is set to gray, the new number of the newly selected **message** box is stored (as the new "previously-selected" one), and the color of the newly selected **message** box is set to red. The **route** object routes the bgcolor messages to the desired objects.

## Objects used

`t` ×5, `pack` ×2, `i`, `route`

*Patch contains 15 boxes, 22 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/ChangeUsedMessageColor.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/Changeusedmessagecolor.png`
