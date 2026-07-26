---
type: cookbook
name: "Formatting messages to use in \"forward\""
summary: "A max user had the following problem:  I have a number and a list."
chapter: "Max"
keywords: ["forward", "sprintf", "receive"]
objects: ["forward", "r", "sprintf"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/FormattingMessagesForward.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/FormattingMessagesForward.PNG"
---

# Formatting messages to use in "forward"

A max user had the following problem:

I have a number and a list.  
Lets say the number is *4* and the list is *1 2 3 4*  
I want to format this for use with **forward** so I need it to read:  
*send actor4, 1 2 3 4*

The example provided shows just that: how to format the number with a **sprintf** object in order to tell **forward** which **receive** object to connect to.

## Objects used

`r`, `forward`, `sprintf`

*Patch contains 6 boxes, 4 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/FormattingMessagesForward.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/FormattingMessagesForward.PNG`
