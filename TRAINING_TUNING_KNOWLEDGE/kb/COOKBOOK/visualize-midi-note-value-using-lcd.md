---
type: cookbook
name: "Visualize MIDI note value using lcd"
summary: "This example shows a way to visualize the pitch of a MIDI note on the x axis of a lcd object."
chapter: "Max"
keywords: ["MIDI", "notein", "stripnote", "zmap", "split", "pack", "lcd"]
objects: ["*", "+", "-", "lcd", "notein", "pack", "split", "stripnote", "zmap"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/drawnotes.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/drawnotes.png"
---

# Visualize MIDI note value using lcd

This example shows a way to visualize the pitch of a MIDI note on the x axis of a **lcd** object. The same thing could be done in Jitter with **jit.lcd**. Whenever you're trying to visualize music or sound, some decisions have to be made about how parameters from one domain (music) will be mapped to the other domain (image). In this case, we've decided to visualize pitch in terms of a circle's left-to-right position.

The pitch information is received from the **notein** object. Both pitch and velocity are passed to a **stripnote** object to suppress note-off pitches. The note-on pitches are then passed through a **split** object to suppress numbers that exceed the normal range of a 61-key MIDI keyboard, 36 to 96.

Then the pitch numbers 36 to 96 are mapped into a range of x coordinates in the **lcd** ranging from 0 to 240. Mapping one range of numbers to another usually can be done with just one multiplication and one addition, as demonstrated here. First we subtract 36, to change the range from 36-96 to 0-60, then we multiply by 4 to change the range 0-60 to 0-240. (Equivalently, we could have multiplied by 4 to change the range from 36-96 to 144-384, then subtracted 144 to change the range from 144-384 to 0-240.)

The resulting numbers are then used in a message to **lcd**. First we use **pack** to make each number into a two-item list: the number and the number+16 (the desired diameter of the circle we plan to draw). We trigger the *clear* message to erase the previous contents of **lcd**, then we use the *$1* and *$2* arguments in a **message** box to form a complete message to **lcd**: *paintoval $1 120 $2 136* (which draws a circle of diameter 16 with a fixed height and with a left-to-right location that depends on the pitch number (which has been converted to an x coordinate).

## Objects used

`zmap`, `stripnote`, `pack`, `+`, `*`, `-`, `split`, `notein`, `lcd`

*Patch contains 28 boxes, 16 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/drawnotes.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/drawnotes.png`
