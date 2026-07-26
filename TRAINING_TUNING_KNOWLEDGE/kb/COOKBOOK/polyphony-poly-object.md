---
type: cookbook
name: "Polyphony with the poly~ object"
summary: "This example shows the patch from “A subpatch suitable for use in poly~(subpatch-suitable-use-poly.md)” being used as a subpatch inside the poly~ object."
chapter: "MSP"
keywords: ["expr", "ezdac~", "FMsynth~", "mtof", "notein", "pack", "poly~", "polyphony", "swap", "*~"]
objects: ["*~", "expr", "ezdac~", "mtof", "notein", "pack", "poly", "poly~", "swap"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/polysynthFM.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/polysynthFM.png"
---

# Polyphony with the poly~ object

This example shows the patch from “[A subpatch suitable for use in poly~](subpatch-suitable-use-poly.md)” being used as a subpatch inside the **poly~** object. You will need to download the patch from that example and save it with the name "FMsynth~" in order for this example to work.

The **poly~** object is a way of managing multiple copies of the same subpatch, primarily as a way of achieving polyphony in MSP. To do polyphonic audio with **poly~**, you must first design a subpatch that either generates or processes MSP audio and sends it out, and you'll design it in such a way that it can respond to control input from a parent patch, and you'll include **in**, **in~**, **out**, and **out~** objects (in place of, or in addition to, **inlet** and **outlet** objects) so that it will work inside **poly**, as demonstrated in “[A subpatch suitable for use in poly~](subpatch-suitable-use-poly.md)” .

This example demonstrates one common way to address the individual voices in a **poly~**: using the *target* message. Think of **poly~** as containing multiple copies of the same patch, with the ability to control each of those copies independently. In this example, the **poly~** contains eight instances of the **FMsynth~** subpatch. As you know from the discussion of that patch, it can receive frequency and amplitude information as a list in its left inlet, and when it does, it will play a note with FM synthesis. To address each one of those eight copies individually, you need to precede the frequency and amplitude information with a *target* message that specifies which voice (which copy of the subpatch) will receive subsequent messages. For example, if **poly~** receives the message *target 1*, it will then direct all subsequent messages to copy 1 of its subpatch.

Here we use the **poly** object (no tilde!) to ascribe a unique voice number to each incoming MIDI note-on message. However, the voice number comes out of the left outlet of the **poly** object after the velocity and pitch information, so if we want to use the voice number as part of the *target* message, we need to do some message reordering. The velocity comes out the right outlet of **poly**, gets turned into an appropriate amplitude by the **expr** object, and is held in the right inlet of the **pack** object. The pitch comes out the middle outlet of **poly** and gets held in the right inlet of the **swap** object. Finally, the assigned voice number comes out the left outlet of **poly** and goes to the left inlet of **swap**. (The function of the **swap** object is to swap the message order of its messages. What comes in the left inlet goes out the right outlet first, and then whatever had come in the right inlet is sent out the left outlet.) The voice number thus goes out the right outlet of **swap** and becomes part of the *target* message, telling **poly~** which voice to address. Then the MIDI pitch number comes out the left outlet of **swap**, gets converted to frequency by the **mtof** object, gets packed together with the amplitude information in **pack**, and gets sent to the left inlet of **poly~** which directs it to whichever voice is currently targeted. The same process applies for every MIDI note that comes in, but each note will be targeted at a different voice of the **poly~** (because **poly** will have assigned and targeted a unique voice number from 1 to 8). Because it's conceivable that we might receive eight nearly simultaneous loud notes at the same time, we've chosen to scale the overall amplitude of the output of **poly~** by a factor of 1/8.

Regardless of whether the control information is actually coming from MIDI input, and regardless of how the control information will be used inside the subpatch of **poly~**, the *target* message is the standard way to send any information into a specific voice of the **poly~**. It tells **poly~** in advance which voice you wish to apply the information to, and all subsequent messages will be sent to that voice. If you wish to send the same message to all voices at once, precede the message with a *target 0* message, which targets all voices.

## Objects used

`*~`, `ezdac~`, `expr`, `mtof`, `pack`, `swap`, `poly`, `notein`, `poly~`

*Patch contains 11 boxes, 14 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/polysynthFM.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/polysynthFM.png`
