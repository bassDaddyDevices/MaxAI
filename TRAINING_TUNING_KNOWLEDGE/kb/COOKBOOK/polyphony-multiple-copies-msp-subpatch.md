---
type: cookbook
name: "Polyphony with multiple copies of a MSP subpatch"
summary: "This example shows the patch from another example being used as a subpatch in a larger patch."
chapter: "MSP"
keywords: ["borax", "FMtone~", "polyphony", "poly", "poly~"]
objects: ["*~", "+~", "/", "FMtone~", "borax", "dac~", "loadmess", "mtof", "notein", "pack", "pow", "route", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/polyphony2.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/polyphony2.png"
---

# Polyphony with multiple copies of a MSP subpatch

This example shows the patch from another example being used as a subpatch in a larger patch. You will need to download the patch from “[Generating a simple 2-operator FM tone](generating-simple-2-operator-fm-tone.md)” and save it with the name "FMtone~" in order for this example to work.

Once you have made a subpatch that reliably generates or processes audio, you can use it as many times as you'd like in other patches. The method shown in this example—using many copies of the same subpatch—is not really the preferred way to achieve polyphony. Compare this example to “[Polyphony with the poly~ object](polyphony-poly-object.md)” which the preferred **poly~** object is used to load multiple copies of the same audio subpatch. However, this example does explicitly show how command messages can be routed to multiple copies (voices) of a polyphonic synthesis process, and how those independent voices can be remixed as a single signal. That's effectively what must happen in any polyphonic synthesizer, and it's essentially the way that the **poly~** object works internally, so it's worth understanding this example before looking at **poly~**.

In this example, the **borax** object generates and assigns a unique voice number for every MIDI note-on message that comes in, and assigns the same voice number to the corresponding note-off message. In this sense it's very similar to the **poly** object used in “Polyphony requires multiple objects”. (The **borax** object also provides other data about incoming note messages, which are not used in this example.) The pitch and velocity information from the MIDI note messages gets translated into frequency and amplitude information suitable for the **FMtone~** subpatch, those numbers get packed as a list along with their corresponding voice number, and the voice number is then used to route that frequency and amplitude information to one of eight copies of the **FMtone~** object. The sound from those **FMtone~** objects is mixed together in the **+~** objects, scaled by a factor of 1/8 to prevent the output signal from clipping, and sent to the **dac~**.

## Objects used

`unpack` ×8, `FMtone~` ×8, `+~` ×7, `loadmess`, `dac~`, `*~`, `borax`, `route`, `/`, `mtof`, `pow`, `pack`, `notein`

*Patch contains 46 boxes, 55 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/polyphony2.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/polyphony2.png`
