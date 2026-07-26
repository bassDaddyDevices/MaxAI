---
type: cookbook
name: "Reference particular plane in matrix"
summary: "This example shows how you can make changes to only one plane of a matrix."
chapter: "Jitter"
keywords: ["jit.unpack", "jit.pack", "switch"]
objects: ["gate", "jit.matrix", "jit.noise", "jit.pack", "jit.pwindow", "jit.unpack", "switch", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/ReferenceParticularPlaneInMatrix.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/ReferenceParticularPlaneInMatrix.PNG"
---

# Reference particular plane in matrix

This example shows how you can make changes to only one plane of a matrix. In order to achieve this, we need to rely on **jit.unpack**, which by itself separates the planes on a matrix (actually creating a copy), and then add the modified plane (with some process to be included inside the **patcher oneplane** object) to the original matrix. For this last step we are using the **jit.pack** object with the ‘out\_name’ attribute set to the original matrix name.

## Objects used

`t` ×3, `jit.pwindow` ×2, `gate`, `switch`, `jit.unpack`, `jit.pack`, `jit.matrix`, `jit.noise`

*Patch contains 17 boxes, 24 connections, 1 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/ReferenceParticularPlaneInMatrix.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/ReferenceParticularPlaneInMatrix.PNG`
