---
type: cookbook
name: "Delay MIDI note messages"
summary: "To delay a single bang message by a certain amount of time, use the delay object."
chapter: "Max"
keywords: ["abstraction", "borax", "delay", "pipe", "swap", "table", "gate"]
objects: ["borax", "f", "gate", "pipe", "swap", "t", "table"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/delaynote.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/delaynote.png"
---

# Delay MIDI note messages

To delay a single *bang* message by a certain amount of time, use the **delay** object. But to delay any other sort of message—a number, a list, even a group of different messages—use **pipe**. The **pipe** object dynamically allocates memory as it stores more and more messages, so it can keep track of many messages at once, even if they arrived at different times and have different delay times (unlike the **delay** object, which can only hold one *bang* at a time).

This patch uses **pipe** to delay pitch and velocity values, so it functions as an adjustable delayer of MIDI notes. When delaying MIDI note messages like this, you need to take care that the note-off message gets the same delay as the note-on message did, in order to make sure that the note gets turned off properly. For example, imagine what would happen if the delay time were made considerably shorter before the note-off message arrived. The note-off might actually get sent out before the corresponding note-on, resulting in a stuck note. The most reliable way to ensure that the note-on and the note-off get the same delay time is to store the delay time that was applied to the note-on, and then look up that delay time when the note-off message arrives. The **table** object is good for storing indexed values and looking them up later, so that's what's used in this example.

The incoming pitch and velocity values go to a **borax** object, which generates a unique "voice number" for each note it receives. The voice number comes out after the pitch and velocity values, but the pitch value and the voice number both go to a **swap** object, which swaps the message order so that the voice numbers goes out the right outlet first, and then the pitch goes out the left outlet. In the case of a note-on message, the velocity value opens a **gate**, and the voice number goes through the **gate**, bangs the **f** object holding the delay time, and stores the delay time in the **table** using the voice number as the index. It then sends that delay time to the right inlet of **pipe**. The velocity and pitch values thus get delayed that amount of time by **pipe**. In the case of a note-off, nothing gets through the **gate**, but the voice number is still used to look up the delay time for that note, so that the note-off velocity and pitch will be delayed the same amount of time by **pipe**. The number of inlets the **pipe** object has is determined by the number of initializing arguments that are typed into it. It can delay any type of items (int, float, or symbol), depending on the argument. There should be one argument for each inlet, plus a final argument specifying the delay time. In this example, the delay time in the **f** object and in **pipe** is *#1*, which will be replaced by the typed-in argument when this patch is used inside another patch, or which will be 0 if nothing is typed in.

For a demonstration, see the example "[Try the delaynote abstraction](try-delaynote-abstraction.md)".

## Objects used

`t` ×2, `table`, `swap`, `gate`, `f`, `pipe`, `borax`

*Patch contains 20 boxes, 18 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/delaynote.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/delaynote.png`
