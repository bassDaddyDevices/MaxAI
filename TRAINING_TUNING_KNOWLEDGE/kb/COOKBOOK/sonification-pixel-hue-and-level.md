---
type: cookbook
name: "Sonification of pixel hue and level"
summary: "There’s a wide variety of ways that one can try to make direct correspondences between 2D or 3D visual images and sound."
chapter: "Jitter"
keywords: ["pixel", "hue", "sonification", "ioscbank~", "HSL"]
objects: ["*~", "+~", "counter", "ezdac~", "ioscbank~", "iter", "jit.expr", "jit.matrix", "jit.movie", "jit.pwindow", "jit.rgb2hsl", "jit.spill", "jit.submatrix", "jit.unpack", "live.gain~", "qmetro", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/pixelstotones.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/pixelstotones_0.png"
---

# Sonification of pixel hue and level

There’s a wide variety of ways that one can try to make direct correspondences between 2D or 3D visual images and sound. (Any process that represents data as sound falls in the general category of “sonification”.) Here’s an example.

In this patch, a video image is reduced to a size of 40x30 pixels, which is a total of 1200 pixels per frame. The color representation of the video is converted from RGB to HSL (hue, saturation, and level) using the **jit.rgb2hsl** object. Hue values from 0-255 are mapped onto equidistant pitches (not equidistant frequencies) from A-110 Hz to A-1760 Hz. Level values from 0-255 are mapped onto linearly-spaced intensities (not linear amplitudes) from -80 dB to 0 dB. Those just seem intuitively like fairly useful ranges, but they're essentially arbitrary mappings.

Inside the five **patcher** objects, the frame is divided into one of five 8x30 columns, 240 pixels each, using the **jit.submatrix** object. The combination of **jit.spill** and **iter** is pretty much the same as using **jit.iter** by itself; either way, it unfolds the matrix and sends the contents out as individual values. Those 240 values are used to set the amplitude and frequency of each of the 240 oscillators in the **ioscbank~** object (interpolating to the new values over 256 samples, which is about 6 milliseconds, just enough to avoid clicks). The signal produced by each of those five **ioscbank~** objects is panned to one of five left-to-right locations in the stereo field, corresponding to the column’s location left-to-right in the video image. (Five locations in a sound mass of 1200 constantly-changing sine oscillators, which are inherently difficult to localize, seems like as many different locations as one would be able to distinguish.) The overall volume of all of those oscillators is reduced in the **live.gain~** object to avoid clipping.

Although the sonic result of this process Is practically impossible to predict precisely, it will be somewhat different for each frame of any video, and will change according to whatever rhythms are inherent in the changing video image.

## Objects used

`counter` ×10, `t` ×10, `iter` ×10, `jit.spill` ×10, `jit.submatrix` ×10, `+~` ×6, `ioscbank~` ×5, `*~` ×5, `jit.expr` ×2, `jit.matrix` ×2, `live.gain~`, `ezdac~`, `jit.unpack`, `jit.rgb2hsl`, `qmetro`, `jit.pwindow`, `jit.movie`

*Patch contains 103 boxes, 120 connections, 5 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/pixelstotones.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/pixelstotones_0.png`
