---
type: cookbook
name: "Turn files on and off"
summary: "This example shows how you can turn on and off audio files with a single toggle –– as in swapping between one and the other."
chapter: "Max"
keywords: ["toggle", "==", "sfplay~", "trigger", "delay", "number~"]
objects: ["*~", "0", "==", "del", "number~", "sel", "sfplay~", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/FilesOnOff.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/FilesOnOff.PNG"
---

# Turn files on and off

This example shows how you can turn on and off audio files with a single toggle –– as in swapping between one and the other. Since *1* is on and *0* is off, you can use a **== 0** object to produce the opposite (to turn one thing off when you turn the other on and vice versa). This can be seen in action in the example on the left. But because a click will occur when you turn a sound off abruptly, you probably want to fade it out before you stop it, and fade the other sound in over the same amount of time, as in the example on the right.

## Objects used

`sfplay~` ×4, `t` ×2, `number~` ×2, `*~` ×2, `0` ×2, `del` ×2, `sel` ×2, `==` ×2

*Patch contains 24 boxes, 28 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/FilesOnOff.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/FilesOnOff.PNG`
