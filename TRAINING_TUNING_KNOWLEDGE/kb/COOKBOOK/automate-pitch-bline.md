---
type: cookbook
name: "Automate pitch with bline"
summary: "This patch demonstrates the bline object, and also shows how it might be used to trigger a different transposition of a sound with every bang of a metro."
chapter: "MSP"
keywords: ["bline", "groove~", "transpose"]
objects: ["0", "0.666667", "1.333333", "bline", "buffer~", "ezdac~", "groove~", "loadbang", "metro", "prepend", "sel", "sig~", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/pitchAutomationWithBline.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/pitchAutomationWithBline.png"
---

# Automate pitch with bline

This patch demonstrates the [**bline**](http://docs.cycling74.com/max7/maxobject/bline) object, and also shows how it might be used to trigger a different transposition of a sound with every *bang* of a **metro**.

The **bline** object is comparable to **line**, in that it is intended to interpolate linearly from its current value to a new value, but instead of generating intermediate values at regular time intervals, it produces an intermediate value each time it receives a *bang* in its left inlet. Whereas **line** receives a destination value and an amount of time to get there, then begins to go toward that destination value, **bline** receives a destination value and a number of *bang*s to get there, but does nothing until it receives subsequent *bang*s. It was designed to work in Jitter as a way of synchronizing interpolated values with frames of a video or of a 3D GL render, but in fact it can be used in any situation where you want to interpolate over a specific number of events.

In this patch the **bline** is initialized to the value of *1* by its typed-in argument, and the **loadbang** object triggers a message of *1.333333 44* to go to bline, making it ready to receive *bang* messages. When you turn on the **metro**, **bline** will begin sending out values that go toward 1.333333 over the course of 44 *bang*s. When it reaches its destination after 44 values, **bline** sends a *bang* out its right outlet, flipping the **toggle** and thus sending a new message *0.666667 44* into **bline**, so that it will then begin to interpolate to that new value over the course of the next 44 *bang*s from the **metro**.

The output from **bline** sets the value of the **sig~** object, which provides a new playback rate to the **groove~** object each time it is triggered. The values 1.333333 and 0.666667 represent rates of 4/3 and 2/3, causing a transposition up a perfect fourth and a transposition down a perfect 5th, with microtonal transpositions in between.

## Objects used

`prepend` ×2, `0`, `ezdac~`, `groove~`, `buffer~`, `t`, `loadbang`, `sig~`, `metro`, `sel`, `0.666667`, `1.333333`, `bline`

*Patch contains 27 boxes, 26 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/pitchAutomationWithBline.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/pitchAutomationWithBline.png`
