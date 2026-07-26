---
type: cookbook
name: "Synchronize live events to the Max transport"
summary: "If you want to synchronize realtime performed events to the Max transport, or to the Live transport in Max for Live, you need to hold onto the vital information"
chapter: "Max"
keywords: ["synchronize", "quantize", "transport", "onebang"]
objects: ["i", "kslider", "loadbang", "makenote", "metro", "noteout", "onebang", "t", "transport"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/triggersomethingonthenextdownbeat.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/triggersomethingonthenextdownbeat1.png"
---

# Synchronize live events to the Max transport

If you want to synchronize realtime performed events to the Max transport, or to the Live transport in Max for Live, you need to hold onto the vital information about the performed event until the next beat (or downbeat, or whatever your unit of quantization is), then trigger it. For example, in Live, when you trigger a new audio clip, if the launch quantization is set to 1 Bar, your clip will not be launched until the next downbeat. Live holds onto your request to launch the clip, then enacts it when the downbeat of the next bar arrives.

In Max you can use timing objects (**metro**, **delay**, **pipe**, etc.) that are governed by the transport (i.e., that use the transport’s note values for their timing instead of milliseconds), and use the *quantize* attribute of those objects to snap events to a particular unit of quantization. In this example, we want to look for a performed event and hold onto it so that it will occur exactly in sync with the downbeat of the next measure.

The **metro** at the top of this patch is there to trigger the **transport** object in order to show the bars and beats as they occur, and it also plays a high C every quarter note to serve as a metronome for you to hear where the beat is. When you play a note on the **kslider**, the pitch of the note is store in an **int** object (or **i**, for short) and it resets the **onebang** object to let the next *bang* in its left inlet go through. A **metro** *1n @quantize 1n @active 1* object is banging on every downbeat, and because the **onebang** has been reset by you playing a note, the *bang* on the next downbeat will trigger the **i** object to send out the pitch that you just played.

## Objects used

`t` ×2, `metro` ×2, `i`, `kslider`, `makenote`, `noteout`, `transport`, `loadbang`, `onebang`

*Patch contains 21 boxes, 20 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/triggersomethingonthenextdownbeat.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/triggersomethingonthenextdownbeat1.png`
