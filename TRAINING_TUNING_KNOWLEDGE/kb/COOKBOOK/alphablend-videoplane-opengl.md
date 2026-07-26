---
type: cookbook
name: "Alphablend a videoplane in OpenGL"
summary: "A crossfade or blend between two videos is particularly easy to accomplish in Jitter using OpenGL."
chapter: "Jitter"
keywords: ["video", "alpha blending", "jit.gl.videoplane", "GL"]
objects: ["jit.gl.render", "jit.gl.videoplane", "jit.qt.movie", "jit.window", "loadbang", "pak", "qmetro", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/glalphablending.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/glalphablending_0.png"
---

# Alphablend a videoplane in OpenGL

A crossfade or blend between two videos is particularly easy to accomplish in Jitter using OpenGL. (One can also blend two videos without GL, using the **jit.alphablend** object. The GL implementation is more efficient, because the blending computation takes place on the computer's graphics card instead of its CPU.)

In this example we use the alpha value of the *color* attribute of a **jit.gl.videoplane** object to vary that plane's opacity in the rendered image. We use two **jit.gl.videoplane** objects, each displaying a different video, we put one plane directly over the other, and we vary the opacity of the foreground plane. We turn on the *blend\_enable* attribute of the objects to enable this alpha blending, and we turn on the *depth\_enable* attribute so that one plane can be considered to be in front of (and thus can occlude) the other in the render. Since they both occupy the same position in the virtual space, we use the *layer* attribute to specify that the plane generated in *layer 1* should be layered over the plane in *layer 0*.

Try varying the value in **number box** labeled "alpha" between 0 and 1 to change the opacity (the fourth argument of the *color* attribute) of the plane that's in layer 1.

## Objects used

`jit.qt.movie` ×2, `jit.gl.videoplane` ×2, `pak`, `loadbang`, `t`, `qmetro`, `jit.gl.render`, `jit.window`

*Patch contains 18 boxes, 14 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/glalphablending.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/glalphablending_0.png`
