---
type: cookbook
name: "Bend image brightness"
summary: "In this example, output of the MIDI pitch bend values from bendin are sent to the object jit.brcosa to adjust the brightness of the image."
chapter: "Jitter"
keywords: ["jit.qt.movie", "jit.brcosa", "jit.window", "bendin"]
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/bendbrightness.png"
---

# Bend image brightness

In this example, output of the MIDI pitch bend values from **bendin** are sent to the object **jit.brcosa** to adjust the brightness of the image.

The default pitchbend value of 64, meaning no bend, will yield a brightness value of 1., meaning no change in the video. Maximum downward pitchbend to a value of 0 will reduce all pixel values to 0, and maximum upward pitchbend to 127 will increase all the color values to nearly twice their original value.

## Files

- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/bendbrightness.png`
