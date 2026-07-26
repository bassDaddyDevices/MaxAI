---
type: cookbook
name: "Other basic functionality of the transport object"
summary: "This patch does some of the same things as the \"GlobalTransport\" patch in the Extras menu, and shows what is likely going on behind the scenes in that patch."
chapter: "Max"
keywords: ["clip", "inlet", "loadbang", "metro", "outlet", "pak", "patcher", "timing", "transport", "unpack", "-"]
objects: ["-", "clip", "loadbang", "metro", "pak", "transport", "umenu", "unpack"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/transportbasics.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/transportbasics.png"
---

# Other basic functionality of the transport object

This patch does some of the same things as the "GlobalTransport" patch in the Extras menu, and shows what is likely going on behind the scenes in that patch. The **toggle** labeled "Start/Stop" starts the **transport** and immediately turns on the **metro** to begin triggering time reports. The **button** labeled "Rewind" sends a time position of bar 1, beat 1, 0 ticks to the **transport** to reset its time. You can enter any time you want in the **number box**es labeled "Bars", "Beats", and "Units". The *tempo <bpm>* message sets the transport's tempo attribute. The *timesig <numerator> <denominator>* message sets the time signature. Although it's not visually obvious, the denominator is actually specified in this patch with a **umenu** (in Scrolling mode so that it responds to dragging with the mouse) that contains only numbers that are powers of 2. The numerator and denominator both go to a **pak** object, and then become part of a *timesig* message. (**pak** differs from**pack** in that it sends its output whenever it receives input in any inlet, whereas **pack** sends its output only when it receives input in its left inlet.) When a numerator is specified, it also is used to set the maximum of the "Beats" **number box**. (Double-click on the **p *limitbeats*** object if you want to see how that's being done.)

## Objects used

`pak` ×2, `loadbang`, `clip`, `-`, `unpack`, `metro`, `umenu`, `transport`

*Patch contains 44 boxes, 33 connections, 1 subpatchers.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/transportbasics.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/transportbasics.png`
