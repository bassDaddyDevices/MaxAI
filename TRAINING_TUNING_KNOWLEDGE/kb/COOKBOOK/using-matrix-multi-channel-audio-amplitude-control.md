---
type: cookbook
name: "Using matrix~ for multi-channel audio amplitude control"
summary: "This example shows how to control the amplitude of multiple signals with the matrix~ object, instead of with line~ and \\~ objects."
chapter: "MSP"
keywords: ["matrix~", "amplitude control", "mixing"]
objects: ["cycle~", "ezdac~", "gain~", "matrix~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/matrix~demo.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/matrixdemo.png"
---

# Using matrix~ for multi-channel audio amplitude control

This example shows how to control the amplitude of multiple signals with the **matrix~** object, instead of with **line~** and **\*~** objects. In effect, **matrix~** has the linear interpolation and multiplication capabilities of those objects embedded within it.

The **matrix~** object can be thought of as a mixer/router of audio signals. The arguments to **matrix~** specify the number of audio inlets, the number of audio outlets (there's always one additional outlet on the right), and the initial gain for the connections of inlets to outlets. Each inlet is potentially connectable to each outlet with a unique gain setting; sending messages in the left inlet changes the gain of the connections.

The messages in the left inlet of **matrix~** specify an inlet number (numbered starting from 0), an outlet number, a gain factor for scaling the amplitude of that connection, and a ramp time in milliseconds to arrive at that amplitude. You can send as many such messages as needed to establish all the desired connections.

In this example we have a **matrix~** with two inlets and one outlet. A full-amplitude sinusoidal audio wave is coming in each inlet, but we don't hear anything initially because the third argument of the **matrix~** has set the initial gain of all connections to 0. When you click on the left **message** box, it sends two messages meaning, "Connect inlet 0 (the leftmost inlet) to outlet 0 (the leftmost outlet) with a gain factor of 0.5 getting there in 10 seconds, and also connect inlet 1 to outlet 0 with a gain of 0.5 getting there in 10 seconds as well." When **matrix~** receives those two messages, it begins the linear interpolation of those connections to 0.5 gain over 10 seconds. (We chose a gain of 0.5 so that the sum of the signals would not exceed 1.) When you click on the **message** box on the right, it will set the gain of both of those connections to 0 in 100 milliseconds.

This method of sending a message for each possible connection may seem a bit cumbersome when you're controlling a matrix with many inputs and outputs, but in fact it's about the most efficient way to control a large matrix (a virtual patchbay) of possible connections. With some clever message management, you can control or automate a great many constantly changing connections. You can re-route inlets to outlets as need be, and you can control the amplitude of all the connections.

For some slightly more elaborate examples of the use of **matrix~**, see the examples called "[Using matrix~ for audio routing and mixing](using-matrix-audio-routing-and-mixing.md)" and "[Mixing multiple audio processes](mixing-multiple-audio-processes.md)."

## Objects used

`cycle~` ×2, `matrix~`, `ezdac~`, `gain~`

*Patch contains 15 boxes, 7 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/matrix~demo.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/matrixdemo.png`
