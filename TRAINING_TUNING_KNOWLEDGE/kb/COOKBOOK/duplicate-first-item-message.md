---
type: cookbook
name: "Duplicate the first item in a message"
summary: "The prepend object allows you to concatenate two messages."
chapter: "Max"
keywords: ["prepend", "text", "set", "duplicate"]
objects: ["prepend", "text"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/Duplicate the first item in a message.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/Duplicate the first item in a message.png"
---

# Duplicate the first item in a message

The **prepend** object allows you to concatenate two messages. The argument(s) of **prepend** will be placed before whatever comes in the inlet (with a space separating the two), and the combined message is then sent out the outlet.

This example shows how you could duplicate the first item in any message. We use the *$1* argument of the **message** box to isolating the first item in a message, then we prepend it to the original message. The example also shows how a message can be placed in a text file using the **text** object.

## Objects used

`prepend` ×2, `text`

*Patch contains 12 boxes, 7 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/Duplicate the first item in a message.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/Duplicate the first item in a message.png`
