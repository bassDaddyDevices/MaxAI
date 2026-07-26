---
type: cookbook
name: "Live capture in sound file"
summary: "This shows how to record into a sound file, and how to play back the contents of the file."
chapter: "MSP"
keywords: ["sound file", "adc~", "dac~", "dbtoa", "delay", "dial", "filepath", "line~", "meter~", "pack", "select", "sfinfo~", "sfplay~", "sfrecord~", "*~"]
objects: ["*~", "adc~", "dac~", "dbtoA", "delay", "dial", "filepath", "line~", "loadbang", "meter~", "pack", "select", "sfinfo~", "sfplay~", "sfrecord~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/livecaptureinsoundfile.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/livecaptureinsoundfile.png"
---

# Live capture in sound file

This shows how to record into a sound file, and how to play back the contents of the file. The example also demonstrates how you can use a quick fade-in and fade-out to avoid clicks when doing realtime capture during a performance. To play the file back in reverse, you have to create a rather complicated *preload* cue in which you specify the name of the file, the cue number, the start point and end point (put the point that occurs earlier in the file first, even though you intend to play backward from end point to start point), then the number 1 (that's a flag to tell **sfplay~** that it should also preload some data at the end of the cue because you intend to play backward), and then the rate (-1 for backward at normal speed). So, for example, to make a cue #2 that will play starting 10 seconds into the file and reading backward to the beginning of the file, you would send the message *preload 2 capture.aif 0 10000 1 -1*.

## Objects used

`*~` ×4, `line~` ×2, `meter~` ×2, `dac~`, `sfplay~`, `delay`, `select`, `sfinfo~`, `filepath`, `sfrecord~`, `adc~`, `loadbang`, `pack`, `dbtoA`, `dial`

*Patch contains 58 boxes, 41 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/livecaptureinsoundfile.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/livecaptureinsoundfile.png`
