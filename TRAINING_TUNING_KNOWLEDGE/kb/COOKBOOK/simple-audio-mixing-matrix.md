---
type: cookbook
name: "Simple audio mixing with matrix~"
summary: "Mixing and crossfading are such common operations in audio and video that it makes sense to have an object dedicated to that purpose."
chapter: "MSP"
keywords: ["mixing", "crossfade", "matrix~"]
objects: ["!-", "cycle~", "dac~", "live.gain~", "loadbang", "matrix~", "slider"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/simplemixingwithmatrix~.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/simplemixingwithmatrix~_0.png"
---

# Simple audio mixing with matrix~

Mixing and crossfading are such common operations in audio and video that it makes sense to have an object dedicated to that purpose. In Jitter, the **jit.xfade** object gives easy control for mixing or crossfading two matrices (i.e., two images). In MSP, the **matrix~** object is a controllable multichannel audio mixer. For simply mixing or crossfading two audio signals, you can use **matrix~ 2 1 0.** as a 2-in/1-out mixer, as in the example patch here. (Or you can build a mixer yourself easily enough, save it as an abstraction, and reuse it in any patch as in the examples "[A useful subpatch for mixing and balancing two sounds](useful-subpatch-mixing-and-balancing-two-sounds.md)", "[Mix two signals (more efficiently)](mix-two-signals-more-efficiently.md)", and "[Mixing and crossfading](mixing-and-crossfading.md)".) This example allows the mixing/crossfading to be controlled by hand via a **slider**.

Note that the **matrix~** object demonstrated in this example implements *linear* mixing (a linear crossfade from one signal to another), which is very simple and direct and works for many situations, but may not always be the most desirable way to get from one sound to another in all circumstances. A straight line is one very special kind of curve—the most direct path possible between two points. One could use any curve of transition other than a straight line. The curve that’s used for mixing two signals is called the *law*; different laws are used for different effects. Commonly an exponential curve is used, to compensate for our tendency to perceive relative to the logarithm of the stimulus (known as [Fechner’s law](http://en.wikipedia.org/wiki/Weber%E2%80%93Fechner_law)).

The same principle described above applies when mixing two images or two videos; one image is faded down to 0 brightness while the other is being faded up to full brightness. The **jit.xfade** object is the video equivalent of the audio mixing shown above. The use of the **jit.xfade** object to mix/crossfade Jitter matrices is demonstrated in the example titled "[Video crossfade](video-crossfade.md)".

## Objects used

`cycle~` ×2, `live.gain~`, `loadbang`, `dac~`, `slider`, `!-`, `matrix~`

*Patch contains 23 boxes, 14 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/simplemixingwithmatrix~.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/simplemixingwithmatrix~_0.png`
