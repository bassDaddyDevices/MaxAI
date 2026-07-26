---
type: cookbook
name: "Autostart"
summary: "The object loadbang sends a bang when a patcher is opened."
chapter: "Max"
keywords: ["loadbang", "key", "read"]
objects: ["jit.pwindow", "jit.qt.movie", "key", "loadbang", "metro", "select"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/autostart.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/autostart.png"
---

# Autostart

The object **loadbang** sends a *bang* when a patcher is opened. This object is very useful if you want to automate the start of some objects or messages in your patch. In this example, the movie starts automatically by sending **loadbang** to *read* the movie file and the **toggle** when the patch is loaded.

## Objects used

`loadbang`, `select`, `key`, `jit.pwindow`, `metro`, `jit.qt.movie`

*Patch contains 9 boxes, 10 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/autostart.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/autostart.png`
