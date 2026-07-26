---
type: cookbook
name: "Counting and stopping"
summary: "How do you do something x number of times, then stop?"
chapter: "MSP"
keywords: ["counter", "metro", "counting"]
objects: ["!/", "counter", "ezdac~", "loadmess", "metro", "select", "sfplay~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/metronomiccounting.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/metronomiccounting.png"
---

# Counting and stopping

How do you do something x number of times, then stop?

The question is discussed in detail in [a post titled “Timed counting”](http://algocomp.blogspot.com/2008/08/timed-counting.html) on the [Algorithmic Composition blog](http://algocomp.blogspot.com/).

The example shown here counts and performs 8 snare drum notes, then stops. The tempo of the snare drum notes can be specified by the user in terms of beats per minute, which the program converts into a number of milliseconds per interval between note onsets, because that’s the form of information that the Max **metro** objects needs to determine the rate at which it sends out the message *bang*.

The **counter** object with no arguments starts counting from 0, and has no specified maximum. If the **counter** has one argument, that number is considered its maximum; it still starts counting from 0, but once it reaches its maximum, the next count will go back to 0. If the **counter** has two arguments, as in this example, the first argument is the minimum and the second argument is the maximum. The goal in this case is to count eight things, from 1 to 8, and detect when the eighth event has occurred; thus, the two arguments 1 and 8 produce the desired behavior.

## Objects used

`loadmess` ×2, `select` ×2, `counter`, `!/`, `ezdac~`, `sfplay~`, `metro`

*Patch contains 29 boxes, 19 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/metronomiccounting.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/metronomiccounting.png`
