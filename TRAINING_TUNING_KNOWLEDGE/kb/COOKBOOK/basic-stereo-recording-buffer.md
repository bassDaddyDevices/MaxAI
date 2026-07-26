---
type: cookbook
name: "Basic stereo recording into buffer~"
summary: "This example is essentially the same as \"Basic RAM recording into buffer~(basic-ram-recording-buffer.md)\", except that it's designed for recording and playing b"
chapter: "MSP"
keywords: ["adc~", "buffer~", "dac~", "play~", "record~", "record", "stereo"]
objects: ["adc~", "buffer~", "dac~", "play~", "record~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/basicstereorecording.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/basicstereorecording.png"
---

# Basic stereo recording into buffer~

This example is essentially the same as "[Basic RAM recording into buffer~](basic-ram-recording-buffer.md)", except that it's designed for recording and playing back a stereo signal instead of a single channel of audio. The **buffer~** object has an additional argument to specify 2 channels of storage. The **record~** object has an additional argument to specify 2 channels of recording, for which the object now provides a second signal inlet. The **play~** object has an additional argument to specify 2 channels of playback, for which the object now provides a second signal outlet.

## Objects used

`play~`, `dac~`, `buffer~`, `record~`, `adc~`

*Patch contains 18 boxes, 10 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/basicstereorecording.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/basicstereorecording.png`
