---
type: cookbook
name: "Trigger a bang when numbers increase or decrease"
summary: "This example shows three conditions to trigger a bang when incoming values either increase or decrease."
chapter: "Max"
keywords: ["<", "==", "past", "change", "slider", "integer", "number"]
objects: ["<", "==", "change", "past", "sel", "slider"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/Past for decreasing values.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/Past for decreasing values.png"
---

# Trigger a bang when numbers increase or decrease

This example shows three conditions to trigger a *bang* when incoming values either increase or decrease.

1. A single *bang* is sent whenever a value goes down below a specific number. In this case, when the value in the **slider** is below 96. 

2. A *bang* is sent when the value reaches a certain integer. 

3. A *bang* is sent when the value increases past a certain number.

## Objects used

`sel` ×2, `change` ×2, `slider`, `==`, `<`, `past`

*Patch contains 15 boxes, 11 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/Past for decreasing values.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/Past for decreasing values.png`
