---
type: cookbook
name: "Automate file creation"
summary: "To automate file creation of similarly named stereo sound files (for example, soundbite1, soundbite 2, etc), this patch allows you to send the desired file name"
chapter: "Max"
keywords: ["route", "symbol", "tosymbol", "sprintf", "record", "sfrecord~"]
objects: ["+", "counter", "prepend", "route", "sfrecord~", "sprintf", "t", "tosymbol"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/AutomaticFileCreation.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/Automatic File Creation.png"
---

# Automate file creation

To automate file creation of similarly named stereo sound files (for example, soundbite1, soundbite 2, etc), this patch allows you to send the desired file name into the left inlet, then a *1*message to start recording into **sfrecord~** and a *0* to stop recording. The audio you want to record is expected in the second and third inlets.

Each time you send in the file name (a single word, which Max considers to be a message of type *symbol*), the patch increments the number, attaches it to the end of the file along with the *.aif* suffix, and prepends the word *open*, so that the **sfrecord~** object opens a file of that name. When you stop recording with a *0* message, the file is automatically closed.

## Objects used

`prepend`, `tosymbol`, `t`, `+`, `counter`, `sprintf`, `route`, `sfrecord~`

*Patch contains 12 boxes, 13 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/AutomaticFileCreation.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/Automatic File Creation.png`
