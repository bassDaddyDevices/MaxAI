---
type: cookbook
name: "Mouseclick Up/Down solutions"
summary: "This example shows 2 approaches, using 2 different objects, to send a 0 value when mouse is pressed and a 255 value when mouse button is released."
chapter: "Max"
keywords: ["lcd", "mousestate"]
objects: ["b", "lcd", "mousestate", "print", "sel", "select"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/MouseclickUpDown.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/MouseclickUpDown.PNG"
---

# Mouseclick Up/Down solutions

This example shows 2 approaches, using 2 different objects, to send a *0* value when mouse is pressed and a *255* value when mouse button is released. One object that does respond to both mousedown and mouseup events is **lcd**. Another is **mousestate**.

## Objects used

`print` ×4, `select`, `lcd`, `b`, `sel`, `mousestate`

*Patch contains 18 boxes, 15 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/MouseclickUpDown.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/MouseclickUpDown.PNG`
