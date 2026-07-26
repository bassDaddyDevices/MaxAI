---
type: cookbook
name: "The tempo object"
summary: "In the tempo object, the first argument specifies the initial quarter-note tempo in quarter-notes per minute."
chapter: "Max"
keywords: ["tempo"]
objects: ["b", "tempo", "timer"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/tempoobject.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/tempoobject_0.png"
---

# The tempo object

In the **tempo** object, the first argument specifies the initial quarter-note tempo in quarter-notes per minute. You can also specify the tempo with a number in the second inlet, or with a *tempo* message in the first inlet. The second and third arguments (and the third and fourth inlets) allow you to specify the numerator and denominator (multiplier and divisor) of the rhythmic value that the object will produce, relative to a whole note. The **tempo** object always assumes a 4/4 measure (one whole note), with the quarter note at the given. The output of **tempo** is thus determined by its *tempo*, which implies the duration of one whole note, and by the numerator and denominator.

The object always sends out numbers 0 through one-less-than-divisions. For example, with tempo=60, multiplier=1, and divisions=4, the object will send out numbers 0-3 at the 1/4-note interval of 1000 ms. With tempo=120, multiplier=1, divisions=16 (the object’s default values), a whole note will last 2000 ms, and **tempo** will send out numbers 0-15 at the 16th-note interval of 125 ms. With tempo=60, multiplier=2, divisions=32, the object will send out numbers 0-31 at the 16th-note interval of 250 ms (because 2/32 = 1/16). With tempo=60, multiplier=3, divisions=8, the object will send out numbers 0-7 at the dotted-quarter-note (3/8 of a whole note) interval of 1500 ms. Want triplet quarter notes? Well, there are six of those in a whole note, so multiplier=1 and divisions=6 will do the trick. And so on. Experiment with the input values in this example, and you’ll come to understand how **tempo** works.

## Objects used

`timer`, `b`, `tempo`

*Patch contains 15 boxes, 9 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/tempoobject.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/tempoobject_0.png`
