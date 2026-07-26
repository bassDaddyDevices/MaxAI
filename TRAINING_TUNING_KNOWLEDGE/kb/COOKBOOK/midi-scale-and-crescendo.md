---
type: cookbook
name: "MIDI Scale and Crescendo"
summary: "This patch uses a counter to send out MIDI pitch and velocity values using makenoteand noteout."
chapter: "Max"
keywords: ["metro", "counter", "makenote", "noteout", "select"]
objects: ["*", "+", "counter", "makenote", "metro", "noteout", "select"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/scaleandcrescendo.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/scaleandcrescendo.png"
---

# MIDI Scale and Crescendo

This patch uses a **counter** to send out MIDI pitch and velocity values using **makenote**and **noteout**. Once the **counter** reaches 12 a *0* message is sent to the **toggle** attached to the **metro** stopping it.

## Objects used

`+` ×2, `*`, `counter`, `select`, `makenote`, `metro`, `noteout`

*Patch contains 21 boxes, 14 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/scaleandcrescendo.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/scaleandcrescendo.png`
