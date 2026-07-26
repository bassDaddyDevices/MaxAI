---
type: cookbook
name: "MIDI note off messages"
summary: "Every MIDI note-on message must be turned off at some time by a subsequent corresponding note-off message for the same pitch (or note-on message with velocity 0)."
chapter: "Max"
keywords: ["MIDI", "metro", "makenote", "noteout"]
objects: ["*", "delay", "i", "makenote", "metro", "noteout"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/Providing MIDI note-off messages  .maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/midi note off messages.png"
---

# MIDI note off messages

Every MIDI note-on message *must* be turned off at some time by a subsequent corresponding note-off message for the same pitch (or note-on message with velocity 0). This patch shows two ways to ensure that. One is a very simple way that's illustrative but not ideal; the second way is much more versatile and is the preferred way.

In the left side of the patch, a triggering *bang* from **metro** triggers a note-on message on key 60 with velocity 120, and also is delayed for 250 ms before triggering the corresponding note-off to end the note. This is fine, but the **delay** object can only delay one *bang* at a time, so it's not useful in more complicated cases, such as in the case of polyphony.

On the right side of the patch you can see a more versatile and more common method, using the **makenote** object. The purpose of **makenote** is specifically to provide note-offs to make notes of a specified duration. It can keep track of any number of note-on messages, their pitch and their desired duration, and will provide the corresponding note-off message (actually a note-on message with a velocity of 0) automatically at the correct moment. At each place where there is a **number box** in this patch, you could be providing changing numbers from some other part of your program, and **makenote** would keep track of all the appropriate pitches, velocities, and durations and send out the appropriate values to the **noteout** object to transmit the right MIDI note messages.

## Objects used

`noteout` ×2, `metro` ×2, `*`, `makenote`, `i`, `delay`

*Patch contains 22 boxes, 17 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/Providing MIDI note-off messages  .maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/midi note off messages.png`
