---
type: cookbook
name: "Turning a signal on or off"
summary: "To turn an audio signal on or off instantly, Max provides the gate~ object."
chapter: "MSP"
keywords: ["bypass", "control", "switch"]
objects: ["!=", "*~", "f", "line~", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/onoff~.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/onoff~.png"
---

# Turning a signal on or off

To turn an audio signal on or off instantly, Max provides the **gate~** object. However, if you use **gate~** to switch a signal on or off while MSP is on, you're likely to cause an unwanted click due to the sudden discontinuity in signal amplitude. To avoid such a click, you need to fade the sound in and out quickly by interpolating at signal rate between zero amplitude and full amplitude. [MSP Tutorial 2](https://docs.cycling74.com/max7/tutorials/05_mspbasicchapter02) demonstrates the use of the **line~** object and the **\*~** to fade from one amplitude to another instead of making an instantaneous switch.

This example provides a useful abstraction (subpatch) to turn a signal on or off by means of a linear fade-in or fade-out over a certain number of milliseconds. You can use this as an object in place of **gate~**, to avoid clicks when turning a signal on or off. Just download the patch and save it with the name **onoff~**. The fade time and the initial on/off setting of the object can be typed in as arguments when you create the object, and they will replace the #1 and #2 arguments in this subpatch. If you don't type in the second argument, the object will be off by default (the amplitude of the output will be 0). You should always type in a first argument for the fade time, otherwise the fade time would be 0 and the object would be no improvement over **gate~**.

The on/off message that comes in the right inlet goes to a **!= 0** object, so that no matter what number it is, it will get converted to a 0 or a 1. Since this patch is just intended as an on/off switch for audio, the only possible gain factors it uses are 0 (off) and 1 (on). It would also have been possible to design this patch to allow any amplitude value at all, so that the object would allow "on" to be specified by nonzero amplitude (such as 0.25, for example, which would turn on the sound and attenuate it by 12 dB), but we decided to make it be literally like an on/off switch, with only two states.

## Objects used

`*~`, `!=`, `t`, `f`, `line~`

*Patch contains 15 boxes, 9 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/onoff~.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/onoff~.png`
