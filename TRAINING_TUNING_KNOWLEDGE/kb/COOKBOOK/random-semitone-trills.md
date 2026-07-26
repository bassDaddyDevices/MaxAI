---
type: cookbook
name: "Random semitone trills"
summary: "A trill can be thought of as a fast back-and-forth alternation between two pitches—or more generally as fast back-and-forth alternation between any two things or states."
chapter: "Max"
keywords: ["MIDI", "random", "toggle", "trill"]
objects: ["*", "+", "counter", "delay", "makenote", "metro", "noteout", "random", "select"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/semitonetrill.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/semitonetrill.png"
---

# Random semitone trills

A trill can be thought of as a fast back-and-forth alternation between two pitches—or more generally as fast back-and-forth alternation between any two things or states. A back-and-forth or on-off switch can be implemented in any programming language by setting a boolean variable (a variable that's capable of having only one of two states) to its opposite state, with an expression in the form of "If it's 'X', set it to 'NOT X', otherwise, set it to 'X'."

In Max, the **toggle** object does that. Initially **toggle**'s internal variable is 0 by default and its user interface box is unchecked. When **toggle** receives a *bang* or a mouse click, it changes its internal variable to 1, sends *1* out its outlet, and shows an X in its box. The next time it gets a a *bang* or a mouse click, it changes its internal variable back to 0, sends *0* out its outlet, and hides (grays out) the X in its box. So, in reponse to repeated *bang* messages, **toggle** generates alternating *1* and *0* messages.

If you add 0 or 1 alternately to a pitch, you get a semitone trill. That's what this patch does. When the patch receives a message in its inlet, it chooses a MIDI pitch and velocity at random, chooses an even number of notes to play from 2 to 20, then turns on a fast **metro** to trigger a **toggle** to generate the trill on the chosen pitch. When it has played that number of notes, it stops the **metro** and—after waiting for the last note to finish, with the **delay *100*** object—sends a *bang* out its outlet to notify the parent patch that it's done playing the trill.

This is not a terribly exciting musical result in its own right, but it does show how you can generate a musical behavior algorithmically by thinking abstractly about how it's achieved. This particular abstraction, a patch meant to be used inside another patch, has a straightforward communication protocol: any message in its inlet gets converted to *bang* and starts the process, and when the process is done, it sends a *bang* out its outlet to indicate completion. This abstraction is used inside another example, titled "[Choose from among multiple processes](choose-among-multiple-processes.md)".

## Objects used

`+` ×4, `random` ×3, `noteout`, `makenote`, `counter`, `delay`, `select`, `*`, `metro`

*Patch contains 35 boxes, 27 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/semitonetrill.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/semitonetrill.png`
