---
type: cookbook
name: "Live capture in buffer~"
summary: "This shows how to record into a RAM (random-access memory) buffer, and how to play back the contents of the buffer at any rate (even backward by using a negativ"
chapter: "MSP"
keywords: ["adc~", "buffer~", "groove~", "record~", "line~", "sampling", "timer"]
objects: ["*~", "adc~", "buffer~", "dac~", "delay", "groove~", "line~", "loadmess", "meter~", "number~", "pack", "record~", "select", "sig~", "timer"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/livecaptureinbuffer.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/livecaptureinbuffer.png"
---

# Live capture in buffer~

This shows how to record into a RAM (random-access memory) buffer, and how to play back the contents of the buffer at any rate (even backward by using a negative rate) starting at any point in the buffer. A **timer** is used to keep track of the duration of the recording. The example also demonstrates how one might use a quick fade-in and fade-out to avoid clicks when doing realtime capture during a performance.

## Objects used

`*~` ×6, `meter~` ×4, `number~` ×2, `select` ×2, `loadmess`, `sig~`, `dac~`, `groove~`, `timer`, `pack`, `line~`, `delay`, `record~`, `buffer~`, `adc~`

*Patch contains 54 boxes, 45 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/livecaptureinbuffer.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/livecaptureinbuffer.png`
