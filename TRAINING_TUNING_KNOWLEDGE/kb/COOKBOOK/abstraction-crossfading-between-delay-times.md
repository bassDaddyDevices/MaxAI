---
type: cookbook
name: "Abstraction for crossfading between delay times"
summary: "This example shows my preferred method for changing between different fixed delay times."
chapter: "MSP"
keywords: ["abstraction", "delay", "tapin~", "tapout~", "crossfade"]
objects: ["!-~", "*~", "+", "+~", "f", "gate", "line~", "pass~", "t", "tapin~", "tapout~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/delayxfade~_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/delayxfade~.png"
---

# Abstraction for crossfading between delay times

This example shows my preferred method for changing between different fixed delay times. It's an abstraction that I regularly use when I want a simple delay, and want the ability to change the delay time with no clicks or pitch changes. It's designed as an abstraction so that it can be used as an object (a subpatch) within any other patch.

It works by using two different delays of the same buffered sound, and crossfading between the two. The signal we want to delay comes in the left inlet and is saved in a **tapin~** ring buffer that's connected to a **tapout~** object with two delay taps (but we're initially only hearing the left output of **tapout~**, because the **mix~** subpatch has the other signal of **tapout~** faded down to 0). When a new delay time comes in the second inlet, it's directed to the inlet of **tapout~** that's associated with the delay tap that's currently faded to 0, then fades up that signal while fading down the other. The third inlet allows for changing the crossfade time, so we can have quite sudden (nearly instantaneous, like 10 ms) changes of delay time that are nevertheless click-free, or we can have slower crossfades between delay times, even lasting several seconds (in which case we'll actually hear both delayed signals while we're crossfading between the two). By flipping back and forth between the two outlets of the gate object, and also fading back and forth between the two outputs of **tapout~**, we're always changing the delay time on the tap that is currently silenced. Try mentally stepping through the sequence of messages to understand exactly how this is accomplished.

Notice that this abstraction has been designed with the ability to accept typed-in arguments, so that its characteristics can be specified in its parent patch. The first argument in the parent patch will replace the "#1" in this abstraction, so that the user can (indeed, must) specify the size of the **tapin~** buffer. The second argument in the parent patch replaces the "#2" to set the initial delay time of the object, and the third argument replaces the "#3" to set the crossfade time that will be used for subsequent delay time changes.

N.B. There is actually a "screw case"—a way that this patch can fail to do its job correctly. If a new delay time comes in before the previous crossfade has finished, the tap that's being changed will still be audible, and we might hear a click. I haven't bothered to protect against this because I expect the user to know not to set a crossfade time that's longer than the expected minimum interval between changes of delay time. If we wanted to make this patch more "robust"—invulnerable to the screw case—we could refuse to accept a new delay time (or hold onto any new delay time) till the crossfade of the previous one has finished.

You can save this abstraction with a name such as **delayxfade~** and try it out. (I try to use the convention of putting a ~ at the end of audio processing abstractions to remind myself that the abstraction involves MSP.)

## Objects used

`f` ×2, `t` ×2, `+~` ×2, `*~` ×2, `pass~`, `gate`, `+`, `line~`, `!-~`, `tapout~`, `tapin~`

*Patch contains 39 boxes, 31 connections, 1 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/delayxfade~_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/delayxfade~.png`
