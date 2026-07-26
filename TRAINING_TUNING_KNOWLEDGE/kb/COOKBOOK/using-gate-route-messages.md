---
type: cookbook
name: "Using gate to route messages"
summary: "You can assign input data to have a different function at different times, simply by sending it to different parts of your program."
chapter: "Max"
keywords: ["change", "flush", "gate", "key", "notein", "pack", "split", "trigger", "-"]
objects: ["-", "change", "flush", "gate", "key", "notein", "pack", "split", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/gateexample.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/gateexample.png"
---

# Using gate to route messages

You can assign input data to have a different function at different times, simply by sending it to different parts of your program. For example, if you have a control device such as a MIDI keyboard or other MIDI controller with a limited number of keys, buttons, knobs, or faders, you can assign one control element to be the mode selector that changes the functionality of all the other elements. This program demonstrates one easy way to direct incoming MIDI note data to different destinations (where the data could have a different effect) using the **gate** object.

The argument to **gate** specifies how many outlets it should have. Messages that come in the right inlet are passed out the outlet specified by the most recent number received in the left inlet. (An optional second argument can specify which outlet should be open initially.) The outlets are numbered starting with 1. If the most recently received number in the left inlet is 0, or no open outlet has been specified, all outlets are closed.

In this patch, you can specify the open outlet via the **number box**, or by typing a number on the computer keyboard. Since the keys 0 to 9 on the keyboard have the ASCII values 48-57, it's easy to turn the ASCII values into the numbers 0 to 9 just by subtracting 48 from them. In the upper-left portion of the patch, we get the ASCII values with the **key** object, look only for ASCII values in the range 48 to 56 (keys 0 to 8), and subtract 48.

In the upper-right portion of the patch, we get MIDI note data (pitches and velocities) with the **notein** object, pass the pitches and velocities through a **flush** object, and pack them together as a two-item *list* with the **pack** object so that they can go into the right inlet of **gate** as a single message (thus keeping the pitch and velocity linked together).

Because the data that we're redirecting with **gate** is MIDI note data it's important that we not switch outlets while a MIDI note is being held, because that would likely result in a stuck note (a note-on message without a corresponding note-off message) somewhere in the program. For that reason, each time that we detect a change in the specified outlet number (with the **change** object), we first send a *bang* to the left inlet of **flush**, which causes it to sent out note-off messages for each held note-on, before we pass the new outlet number to the left inlet of **gate**. That ensures that the note-off messages go out the previously open outlet before we switch to a new outlet for subsequent notes. (This practice of making sure you neatly close down one process when switching to another is a good habit to develop in your programming.)

## Objects used

`-`, `split`, `key`, `t`, `flush`, `change`, `gate`, `pack`, `notein`

*Patch contains 15 boxes, 12 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/gateexample.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/gateexample.png`
