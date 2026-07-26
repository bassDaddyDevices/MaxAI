---
type: cookbook
name: "Use function to control line segments"
summary: "This patch only work correctly in Max version 8 or later."
chapter: "Max"
keywords: ["line", "function"]
objects: ["ctlout", "function", "line", "loadmess"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/functiontolineinMax8.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/functiontolineinMax8.png"
---

# Use function to control line segments

This patch only work correctly in Max version 8 or later. In Max 8 the behavior of the **line** object was changed significantly. The most important change is that **line** can now accept *list* messages of four or more items, describing multiple line segments, as for the **line~** object. That means that you can use the **function** object to draw a breakpoint line segment function, and then you can use the *bang* message to **function** to send a *list* out of the second outlet, which will give instructions to **line** to draw that function with a series of messages.

This example shows how you could use a shape in the **function** object to control the **line** object to send out a timed series of MIDI control messages.

## Objects used

`loadmess` ×2, `ctlout`, `function`, `line`

*Patch contains 12 boxes, 8 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/functiontolineinMax8.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/functiontolineinMax8.png`
