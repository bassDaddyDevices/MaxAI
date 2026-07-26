---
type: cookbook
name: "Simplest way to draw a line across a screen"
summary: "This patch uses a jit.matrix to move a line across the screen by first using the setall message to set all the cells of the jit.matrix to 255 which causes all p"
chapter: "Jitter"
keywords: ["jit.window", "counter", "qmetro"]
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/simplestDrawLineAcrossScreen.png"
---

# Simplest way to draw a line across a screen

This patch uses a **jit.matrix** to move a line across the screen by first using the *setall* message to set all the cells of the **jit.matrix** to 255 which causes all pixels in the display window to be set to white. Next the **counter** object sets a cell of the **jit.matrix** determined by the **counter** object to *0* which causes the corresponding column of pixels in the display window to turn black.

## Files

- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/simplestDrawLineAcrossScreen.png`
