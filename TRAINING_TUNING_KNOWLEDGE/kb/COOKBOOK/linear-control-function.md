---
type: cookbook
name: "Linear control function"
summary: "The line~ object generates a signal that interpolates linearly from its current value to a new destination value in a specified amount of time."
chapter: "MSP"
keywords: ["cycle~", "ezdac~", "function", "line~", "*~"]
objects: ["*~", "cycle~", "ezdac~", "function", "line~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/linearcontrolfunction.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/linearcontrolfunction.png"
---

# Linear control function

The **line~** object generates a signal that interpolates linearly from its current value to a new destination value in a specified amount of time. It receives messages specifying a new value and the amount of time (in milliseconds) in which to get there. If it receives only a single number in its left inlet, it goes to that new value immediately.

We don’t listen to this signal directly (it’s not repetitive, so it’s not audible) but we perceive its effect when it’s used as a control function to change some parameter of a sound-generating algorithm.

Note that a comma (,) in a **message** box enables you to trigger a series of messages by a single event. In effect, the comma means “End this message and follow it immediately by the next message.” So the message *440, 880 2000* is actually two messages, *int 440* and *list 880 2000*. It causes the linear signal to leap immediately to 440 and then transition linearly to 880 in 2000 milliseconds.

When the **button** is clicked, it triggers messages to both **line~** objects. Over the course of 2 seconds, the amplitude is shaped by an ADSR envelope function, and the frequency sweeps from 440 Hz to 880 Hz, resulting in a 2-second note that glides from 440 Hz (the pitch A) to 880 Hz (the A above it).

## Objects used

`line~` ×2, `ezdac~`, `*~`, `cycle~`, `function`

*Patch contains 18 boxes, 9 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/linearcontrolfunction.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/linearcontrolfunction.png`
