---
type: cookbook
name: "Choose one of several sounds"
summary: "The matrix~ object is a multichannel audio mixer."
chapter: "Max"
keywords: ["key", "coll", "zl group", "cycle~", "matrix~"]
objects: ["coll", "cycle~", "dac~", "key", "loadbang", "matrix~", "prepend", "select", "zl"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/mix4way.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/mix4way.PNG"
---

# Choose one of several sounds

The **matrix~** object is a multichannel audio mixer. It’s useful as a mixer of sounds, and also as an audio switcher/router, because you can route any input to any output, with built-in interpolation for smooth, click-free amplitude changes.

In this example, we use **matrix~** as a 4-in/1-out mixer to choose one of four possible input sounds, with an adjustable crossfade time (the **matrix~** object’s ‘ramp’ attribute) between the old sound and the newly chosen one.

The messages to change amplitudes in **matrix~** might seem a little cumbersome, but the message format is necessary to allow the sort of versatility that **matrix~** provides, letting you set the gain level for the connection of any input to any output. The message format is: <inlet#> <outlet#> <gain> [ramptime]. If no ramptime value is included in the message, the timing of the ‘ramp’ attribute is used (as in this example). To manage the gain-setting messages for all the possible connections, we store full lists of settings in a **coll**, and then break that list up into individual message with **zl**. In this example we use keystrokes from four keys—a, s, d, and f—to choose which input sound we want to hear by looking up the necessary settings in the **coll**. The settings in the **coll** turn on the connection we want, and turn off all the other connections.

## Objects used

`cycle~` ×4, `loadbang`, `dac~`, `key`, `select`, `zl`, `coll`, `prepend`, `matrix~`

*Patch contains 24 boxes, 23 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/mix4way.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/mix4way.PNG`
