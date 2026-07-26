---
type: cookbook
name: "3D animation of a MIDI note"
summary: "To do animation in 3D, you need to learn about the jit.gl.\\ family of Jitter objects."
chapter: "Jitter"
keywords: ["3D", "OpenGL", "sphere", "animation"]
objects: ["*", "-", "jit.gl.gridshape", "jit.world", "kslider", "notein", "stripnote"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/sphereplayer.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/sphereplayer2.png"
---

# 3D animation of a MIDI note

To do animation in 3D, you need to learn about the **jit.gl.\*** family of Jitter objects. To animate MIDI notes as 3D objects, you’ll need to decide what aspect of the note data you want to map to what aspect of the 3D objects. Here's about the simplest possible patch one could make for visualizing a MIDI note; the pitch of the most recently played note is used to determine the horizontal location of a sphere.

## Objects used

`notein`, `*`, `stripnote`, `-`, `jit.gl.gridshape`, `kslider`, `jit.world`

*Patch contains 14 boxes, 9 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/sphereplayer.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/sphereplayer2.png`
