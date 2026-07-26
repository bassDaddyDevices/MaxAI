---
type: cookbook
name: "Mixing sound of two videos"
summary: "The volume of two movies can be crossfaded between by sending each jit.qt.movie a vol $1 message with one being an inversion of the other."
chapter: "Jitter"
keywords: ["jit.qt.movie"]
objects: ["!-", "==", "jit.qt.movie", "slider"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/mixingSoundOf2Videos.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/mixingSoundOf2Videos.png"
---

# Mixing sound of two videos

The volume of two movies can be crossfaded between by sending each **jit.qt.movie** a *vol $1* message with one being an inversion of the other. The left setup uses a **toggle** connected to a **== 0** – so that the *vol $1* on the left receives a *1* when the **toggle** sends out a *0* – and the right setup uses a **slider** – set to output floats between 0 and 1 – connected to a **!- 1**.

## Objects used

`jit.qt.movie` ×4, `!-`, `slider`, `==`

*Patch contains 13 boxes, 11 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/mixingSoundOf2Videos.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/mixingSoundOf2Videos.png`
