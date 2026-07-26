---
type: cookbook
name: "Choose new movie"
summary: "In this example, when you turn on the two metro objects, one of the three movies are chosen randomly by the urm object every three seconds to be read by the jit.qt.movie object."
chapter: "Jitter"
keywords: ["metro", "jit.qt.movie", "jit.window", "urm", "select"]
objects: ["jit.qt.movie", "jit.window", "metro", "select", "urn"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/choosenewmovie.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/choosenewmovie.png"
---

# Choose new movie

In this example, when you turn on the two **metro** objects, one of the three movies are chosen randomly by the **urm** object every three seconds to be read by the **jit.qt.movie** object. Since the **urm** generates random numbers without duplicate, it can be used to switch to a new movie at a certain interval while playing.

## Objects used

`metro` ×2, `urn`, `select`, `jit.window`, `jit.qt.movie`

*Patch contains 14 boxes, 16 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/choosenewmovie.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/choosenewmovie.png`
