---
type: cookbook
name: "Controlling sfplay~ speed with line~"
summary: "You can use the line~ object to supply a changing speed value to the right inlet of the sfplay~ object."
chapter: "Max"
keywords: ["sfinfo~", "line~", "function", "sfplay~"]
objects: ["b", "ezdac~", "function", "line~", "sfinfo~", "sfplay~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/controlSfplayWithEnvelope.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/controlSfplayWithEnvelope.png"
---

# Controlling sfplay~ speed with line~

You can use the **line**~ object to supply a changing speed value to the right inlet of the **sfplay**~ object. The second outlet of the **function** object sends out a *list* message intended to describe the function to a **line**~ object.

## Objects used

`b`, `ezdac~`, `function`, `line~`, `sfinfo~`, `sfplay~`

*Patch contains 13 boxes, 12 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/controlSfplayWithEnvelope.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/controlSfplayWithEnvelope.png`
