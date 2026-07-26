---
type: cookbook
name: "Using the Hénon attractor"
summary: "In order for this example to work correctly, you first need to download the patch called henon.maxpat(../patches/henon.maxpat) and place it in the Max file search path."
chapter: "Jitter"
keywords: ["Henon", "iterative", "jit.gl.multiple", "reson~"]
objects: ["*", "*~", "+", "+~", "attrui", "click~", "counter", "cycle~", "ezdac~", "henon", "jit.gl.gridshape", "jit.gl.multiple", "jit.gl.render", "jit.matrix", "jit.window", "live.gain~", "mtof", "pack", "qmetro", "reson~", "sig~", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/henontest.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/henontest.png"
---

# Using the Hénon attractor

In order for this example to work correctly, you first need to download the patch called [henon.maxpat](../patches/henon.maxpat) and place it in the Max file search path.

As explained in the example "[Abstraction for calculating the Hénon attractor](abstraction-calculating-hénon-attractor.md)", the "Hénon attractor" is an iterative function that produces a particular distinctive chaotic pattern of behavior. In this example we use the output of the Hénon attractor to produce a pattern of sounds (clicks passed through a resonant bandpass filter) and shapes (spheres in a 3D space), essentially sonfiying and visualizing the behavior of the function.

For the sonification, each *x* value provided by the **henon** abstraction is used to determine the pitch of the note—specifically the center frequency of a **reson~** bandpass filter—and the *y* value is used to determine the panning of the note. For the visualization, the 512 most recent *x* and *y* values are stored in a **jit.matrix** object, and that Jitter matrix is used to provide spatial coordinates to **jit.gl.multiple**, which manages 512 spheres in the OpenGL world. You can try experimenting with the *a* and *b* parameter variables to alter the behavior of **henon**, and you can change your view of the output by changing the *camera* position attribute of **jit.gl.render**.

## Objects used

`*` ×4, `*~` ×3, `cycle~` ×2, `live.gain~`, `+~`, `sig~`, `mtof`, `reson~`, `+`, `click~`, `ezdac~`, `attrui`, `t`, `pack`, `counter`, `jit.matrix`, `jit.gl.gridshape`, `jit.gl.multiple`, `jit.gl.render`, `jit.window`, `qmetro`, `henon`

*Patch contains 60 boxes, 53 connections, 2 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/henontest.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/henontest.png`
