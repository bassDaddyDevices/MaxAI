---
type: cookbook
name: "Adjust image brightness, contrast and saturation"
summary: "This patch demonstrates two ways to adjust the color balance in a video."
chapter: "Jitter"
keywords: ["jit.qt.movie", "jit.op", "jit.brcosa"]
objects: ["jit.brcosa", "jit.op", "jit.pwindow", "jit.qt.movie", "loadbang", "metro"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/brcosa.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/bcrosa.png"
---

# Adjust image brightness, contrast and saturation

This patch demonstrates two ways to adjust the color balance in a video. One is the use the **jit.brcosa** object. The name "brcosa" is an abbreviation of three attributes of a video: brightness, contrast, and saturation. Definitions and explanations of those three terms can be found in Jitter Tutorial 7: Image Level Adjustment. The three terms are exactly the three attributes of the **jit.brcosa** object that one is expected to adjust to change the incoming video.

Another way to change those traits of a video is by doing the math yourself, with an object such as **jit.op**, which allows you to apply specific mathematical operations on a video. For example, you can change the brightness of a video by multiplying all the color planes by a constant value. A multiplier greater than 1 will increase brightness, while a multiplier less than 1 will decrease the brightness. In this example, a very particular kind of effect is achieved by passing all planes of the *blading.mov* video through **jit.op** unchanged except for the red plane which has added to it the red plane of the *dishes.mov* video. In **jit.op** in this example, the arguments specify what operator should be used for each plane. The "pass" operator for the alpha, green, and blue planes means to send them through unaltered, and the "+" operator applies only to the red plane, so that the red values of the two videos are added. This naturally increases the red wherever there is a reddish hue in the dishes.mov video.

## Objects used

`metro` ×2, `jit.qt.movie` ×2, `loadbang`, `jit.op`, `jit.brcosa`, `jit.pwindow`

*Patch contains 20 boxes, 20 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/brcosa.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/bcrosa.png`
