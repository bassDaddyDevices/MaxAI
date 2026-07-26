---
type: cookbook
name: "A polyphonic phase distortion synthesizer using poly~"
summary: "This example shows the patch from “Phase distortion synthesis in a poly~ subpatch(phase-distortion-synthesis-poly-subpatch.md)” being used as a subpatch inside the poly~ object."
chapter: "MSP"
keywords: ["ezdac~", "kinkpoly~", "notein", "pack", "prepend", "poly~", "polyphony"]
objects: ["ezdac~", "notein", "pack", "poly~", "prepend"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/polysynthPD.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/polysynthPD.png"
---

# A polyphonic phase distortion synthesizer using poly~

This example shows the patch from “[Phase distortion synthesis in a poly~ subpatch](phase-distortion-synthesis-poly-subpatch.md)” being used as a subpatch inside the **poly~** object. You will need to download the patch from that example and save it with the name "kinkpoly~" in order for this example to work.

This shows how simple the use of **poly** can potentially be if the underlying synthesizer module is designed appropriately. The synth notes can be triggered by MIDI pitch and velocity information. Instead of using the *target* message, as shown in “[Polyphony with the poly~ object](polyphony-poly-object.md),” this patch uses the message *midinote* with pitch and velocity as arguments to that message (e.g., *midinote 60 127*). When the **poly~** object receives *midinote* messages, it allocates voices automatically by assigning that note information to whatever voice is not "busy". Each voice reports whether it's busy or not by sending its amplitude to its **thispoly~** object (see "[Phase distortion synthesis in a poly~ subpatch](phase-distortion-synthesis-poly-subpatch.md)"). So, by designing the subpatch to keep track of each voce's busy status in this way, we have permitted **poly~** to allocate voices on its own in response to *midinote* messages, resulting in a very simple way to trigger notes in the parent patch.

Note that although this example (and “Phase distortion synthesis in a poly~ subpatch") show **poly~** being used to implement simple polyphonic synthesizers that respond to pitch and velocity information, the contents of a **poly~** can be anything—soundfile playback, etc.—and can have any number of inlets and outlets.

## Objects used

`pack`, `prepend`, `ezdac~`, `poly~`, `notein`

*Patch contains 6 boxes, 6 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/polysynthPD.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/polysynthPD.png`
