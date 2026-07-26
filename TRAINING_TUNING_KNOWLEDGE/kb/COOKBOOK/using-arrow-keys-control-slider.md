---
type: cookbook
name: "Using arrow keys to control a slider"
summary: "The up-down arrow keys seem like reasonable keys to use for incrementing or decrementing a number box or a slider."
chapter: "Max"
keywords: ["interface", "key", "keyup", "incdec", "metro", "select", "slider", "trigger"]
objects: ["0", "incdec", "key", "keyup", "metro", "select", "slider", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/arrowkeyfader.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/arrowkeyfader.png"
---

# Using arrow keys to control a slider

The up-down arrow keys seem like reasonable keys to use for incrementing or decrementing a number box or a slider. But rather than require a new key press for each step up or down, you can use a fast **metro** to trigger messages continuously as long as the key is pressed. There are several ways one could implement this in Max; here's one example.

There's an object called **incdec** that is designed to be interconnected with a **number** box in the way that's shown here. It keeps track of the value in the **number** box and takes *inc* and *dec* messages to increment or decrement the **number** box. The **key** object first triggers the correct message—*inc* or *dec*—to set the contents of the **message** box, and then it turns on a **metro** to repeatedly send that message. When the key is released, it triggers a *0* to stop the **metro**. The **number** box has been set in the Inspector to have a minimum value of 0 and a maximum value of 127, so attempts to decrement it or increment it beyond those bounds will be limited (clipped) to those values.

## Objects used

`select` ×2, `t` ×2, `slider`, `0`, `keyup`, `metro`, `incdec`, `key`

*Patch contains 15 boxes, 17 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/arrowkeyfader.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/arrowkeyfader.png`
