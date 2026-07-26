---
type: cookbook
name: "Using audio to trigger the display of a frame of video"
summary: "One way to make video respond to audio in Max, is to detect some significant event in an MSP audio signal, and use that to trigger something in Jitter."
chapter: "MSP"
keywords: ["phasor~", "delta~", "edge~", "jit.qt.movie", "jit.movie"]
objects: ["!-~", "!/", "*~", "/", "<~", "cycle~", "delta~", "edge~", "ezdac~", "jit.qt.movie", "jit.window", "metro", "phasor~", "tempo"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/periodicity.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/periodicity.png"
---

# Using audio to trigger the display of a frame of video

One way to make video respond to audio in Max, is to detect some significant event in an MSP audio signal, and use that to trigger something in Jitter. This patch demonstrates one case of that. It uses an event in an audio stream to trigger the display of a frame of a movie. Every time the **phasor~** jumps down to 0, a *bang* is sent to the **jit.qt.movie** causing it to display the current frame of the movie loaded into it.

The math objects at the top of the patch demonstrate some ways to calculate the relationships between musical tempo in beats per minute and divisions per beat, clock time in milliseconds per beat division, and frequency in cycles per second (Hz).

## Objects used

`!/` ×2, `ezdac~`, `jit.window`, `jit.qt.movie`, `edge~`, `<~`, `delta~`, `tempo`, `cycle~`, `*~`, `!-~`, `/`, `metro`, `phasor~`

*Patch contains 40 boxes, 26 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/periodicity.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/periodicity.png`
