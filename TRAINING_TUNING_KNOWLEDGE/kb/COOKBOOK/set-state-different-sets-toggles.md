---
type: cookbook
name: "Set the state of different sets of toggles"
summary: "This patch shows how you might use one set of four toggle objects to control the states of four on/off switches in each of eight different \"tracks\" or \"banks\" of four."
chapter: "Max"
keywords: ["join", "route", "toggle"]
objects: ["join", "loadmess", "route"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/armtracks.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/armtracks.png"
---

# Set the state of different sets of toggles

This patch shows how you might use one set of four **toggle** objects to control the states of four on/off switches in each of eight different "tracks" or "banks" of four. There are four **toggle**s to control the states in each track. The **toggle** states will be routed only to the selected track number. If you wanted to recall the state of each track's four states each time you select a track, you'd need to store the states of each track's settings somewhere and get them each time a new track number is selected.

The **route** object compares the first item of an incoming message to each of its arguments, and sends the rest of the incoming message out the corresponding outlet. So, in this case, the track number will be used to choose which outlet of **route** will send out the rest of the list (the *1* or *0* or each of the four **toggle** objects). The **join** object concatenates all its input messages (separated by spaces) into a single output message. It can be set to have multiple triggering outlets, by means of the *triggers* attibute. The inlets of **join** are numbered starting from 0, so this **join** object is set to be triggered by input to inlets 1, 2, 3, and 4, but not by inlet 0.

## Objects used

`loadmess`, `route`, `join`

*Patch contains 13 boxes, 7 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/armtracks.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/armtracks.png`
