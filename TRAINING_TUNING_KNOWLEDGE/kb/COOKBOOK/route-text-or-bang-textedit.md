---
type: cookbook
name: "Route Text or Bang from textedit"
summary: "A max user was having trouble with the textedit object, and asked:  I’m using the textedit object and sometimes it will be empty."
chapter: "Max"
keywords: ["textedit", "route"]
objects: ["route", "textedit"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/RouteTextBangFromTextedit.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/RouteTextBangFromTextedit.PNG"
---

# Route Text or Bang from textedit

A max user was having trouble with the **textedit** object, and asked:

I’m using the **textedit** object and sometimes it will be empty. When it does this it only outputs *text*. Is there a way I can identify when its output is only *text* so I can do 2 different tasks?

This example shows how to detect an empty text output using 2 **route** objects. A **route** object, as the name indicates, routes the information it receives based on the first element of its list input. However, if the list is limited to a single element that **route** is expecting, then **route** will behave much like a **select** object, that is sending out a *bang* on the corresponding outlet. In this example we take advantage of that in order to detect an empty text ouput.

## Objects used

`route` ×2, `textedit`

*Patch contains 6 boxes, 5 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/RouteTextBangFromTextedit.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/RouteTextBangFromTextedit.PNG`
