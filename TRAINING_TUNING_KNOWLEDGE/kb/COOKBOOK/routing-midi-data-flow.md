---
type: cookbook
name: "Routing MIDI data flow"
summary: "Managing the flow of data in a program is a common issue."
chapter: "Max"
keywords: ["switch", "gate", "seq", "patcher", "MIDI"]
objects: ["change", "gate", "midiflush", "midiin", "midiout", "seq", "switch", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/switchMIDIinput_output.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/switchMIDIinput_output.png"
---

# Routing MIDI data flow

Managing the flow of data in a program is a common issue. Often you'll want to receive data from different sources, or send it to different destinations.

To receive data from one of multiple sources, the **switch** object can be used to pass out the messages that come in just one (and only one) of its inlets at a time, ignoring any messages that may be coming in other inlets in the meantime. The leftmost inlet is the control inlet, used to determine which of the other inlets will be "open" and will pass its messages out the outlet. *0* in the control inlet means all inlets are closed; *1* means that the 1st of the other inlets is "open", and so on.

The **gate** object is a counterpart of **switch**. Its left inlet is the control inlet, just as with **switch**. The number received in the left inlet determines which outlet will be "open", and **gate** will pass messages from its right inlet to that open outlet.

These patches demonstrate how **switch** and **gate** can be used to manage the flow of MIDI data in a patch. In the upper left, the **switch** object allows us to choose which source of MIDI data we want to pay attention to––the data coming from the **midiin** object or the data coming from the **seq** object. In the upper right, a **gate** object allows us to direct the data from **midiin** to one of three different subpatches. This potentially allows a single program to process incoming MIDI data in one of several different ways (in different subprograms).

The principle, in each case, is for a single program to be able to do different things, to process information differently, at the flip of a switch.

Notice one little potential problem. If we cut off a flow of MIDI messages, there is always the chance that we might interrupt the flow of data between a *note-on* message and its corresponding *note-off* message, resulting in a stuck note. The patches in the lower part of the example demonstrate reasonable precautions to protect against such stuck notes occurring.

The **midiflush** object is designed to turn off held notes. It keeps track of each MIDI *note-on* message that passes through it until it receives a corresponding *note-off* message. Thus, it always has in its memory all the held notes that have not yet been turned off. When it receives a *bang*, it sends out a *note-off* message for any remaining note-ons.

In each of the two lower patches, we check to see when the control inlet of the **switch** or **gate** object is changed, by using the **change** object. (There will only be output from the **change** object when its input actually changes.) When it does change, we send a *bang* to **midiflush** to turn off any notes that are held at the moment. Notice that in the patch on the right it's important to send the *bang* to **midiflush** before switching the outlet of gate, to make sure that the note-offs go out the proper outlet.

## Objects used

`midiin` ×4, `midiout` ×4, `seq` ×2, `gate` ×2, `t` ×2, `midiflush` ×2, `change` ×2, `switch` ×2

*Patch contains 66 boxes, 54 connections, 6 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/switchMIDIinput_output.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/switchMIDIinput_output.png`
