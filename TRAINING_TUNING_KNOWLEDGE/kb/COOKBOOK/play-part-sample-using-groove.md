---
type: cookbook
name: "Play part of a sample using groove~"
summary: "This example shows how to play part of a sample in Max."
chapter: "MSP"
keywords: ["groove~", "play~"]
objects: ["*~", "<~", "buffer~", "delay", "ezdac~", "groove~", "loadbang", "play~", "receive~", "send~", "sig~"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/PlayPartOfSampleUsingGroove.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/PlayPartOfSampleUsingGroove.PNG"
---

# Play part of a sample using groove~

This example shows how to play part of a sample in Max. Simply put, to play a sound from point A to point B, nothing beats **play~**, you just tell it "start ". However, if you must use **groove~**, then you need to provide a stopping command at the right moment somehow. And as you may notice, the ‘loopend’ attribute of **groove~** causes the sound to loop back to the ‘loopstart’ point if ‘looping’ is on, but lets the sound continue if ‘looping’ is off, so it’s not really of that much use to us. We can send **groove~** a start time, then send it a "stop" message some amount of time later. Or we can set its rate signal to 0 to stop it. Or we can use the sync signal (the signal coming out of the right outlet of **groove~**) to know when the 'loopend' point has been reached, and use that to stop listening to **groove~** (set its amplitude to 0). The last solution is the worst, since it delays the playback and end time by one signal vector, which may or may not be noticeable.

Also, these examples might be of interest: “[Playing a sample from RAM](playing-sample-ram.md)”, “[Sample playback driven by a signal](sample-playback-driven-signal.md)”, “[DJ-like sample scrubbing](dj-sample-scrubbing.md)”, “[Playing a sample with groove~](playing-sample-groove.md)”, and “[Random access of a sound sample](random-access-sound-sample.md)”.

## Objects used

`groove~` ×5, `sig~` ×4, `delay` ×3, `<~` ×2, `*~` ×2, `receive~`, `send~`, `play~`, `loadbang`, `buffer~`, `ezdac~`

*Patch contains 39 boxes, 49 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/PlayPartOfSampleUsingGroove.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/PlayPartOfSampleUsingGroove.PNG`
