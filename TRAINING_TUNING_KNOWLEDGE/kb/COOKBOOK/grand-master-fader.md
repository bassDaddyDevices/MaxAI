---
type: cookbook
name: "Grand Master Fader"
summary: "Given a hypothetical grand master fader that can be controller with the continuous controller 13 (assuming for the sake of this example that your device is also"
chapter: "Max"
keywords: ["midiout", "ctlout", "slider", "fade", "fader"]
objects: ["ctlout", "midiformat", "midiout", "pack", "slider"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/GrandMasterFader.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/GrandMasterFader.PNG"
---

# Grand Master Fader

Given a hypothetical grand master fader that can be controller with the continuous controller 13 (assuming for the sake of this example that your device is also set to receive on MIDI channel 1), you can send the message *176 13 127* to a **midiout** object to turn the fader up to full. Another way to do this would be to use a **ctlout** object, send the number 1 in the right inlet, the number 13 in the middle inlet, and then send 127 in the left inlet. To create a continuous fade, send successive messages with gradually changing **slider** position values.

(Double-click on the **midiout** or **ctlout** object and make sure that it’s addressing the correct device, then set the correct MIDI channel, then move the **slider**.)

## Objects used

`slider` ×2, `pack`, `midiformat`, `midiout`, `ctlout`

*Patch contains 15 boxes, 8 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/GrandMasterFader.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/GrandMasterFader.PNG`
