---
type: cookbook
name: "Ganging sliders"
summary: "This example shows how you can create a gangable multislider-like object."
chapter: "Max"
keywords: ["pattr", "pattrhub", "modifiers", "slider"]
objects: ["+", "-", "clip", "gate", "i", "modifiers", "pattr", "pattrhub", "slider", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/GangSliders.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/GangSliders.PNG"
---

# Ganging sliders

This example shows how you can create a gangable **multislider**-like object. Although it is a common idea used in, for example, digital mixing consoles, there's no single object in Max yet to achieve this task of "ganging" multiple faders. In this example, inside the **patcher** **retainoffsets** object, we keep track of the differences between the values of the four sliders, and whenever the shift key is held down we change the values of all four of the **slider** objects commensurately with the change of the **slider** currently being moved. We use the **pattrhub** object in the subpatch, and a set of four **pattr** objects in the main patch, to communicate the calculated position for each **slider** from the subpatch back to the main patch to achieve the effect.

## Objects used

`t` ×12, `slider` ×8, `pattr` ×4, `clip` ×4, `+` ×4, `-` ×4, `i` ×4, `gate` ×4, `pattrhub`, `modifiers`

*Patch contains 66 boxes, 101 connections, 1 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/GangSliders.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/GangSliders.PNG`
