---
type: cookbook
name: "Using key presses and releases"
summary: "Using both the key and keyup objects, you can tell when a key was pressed and when it was released."
chapter: "Max"
keywords: ["interface", "key", "keyup", "outlet", "split", "trigger", "-"]
objects: ["-", "0", "1", "key", "keyup", "split", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/numkeysdownup_0.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/numkeydownup.png"
---

# Using key presses and releases

Using both the **key** and **keyup** objects, you can tell when a key was pressed and when it was released. The **split** object allows you to isolate a range of numbers; it passes only the specified range of numbers out its left outlet, and passes all other numbers out its right outlet. The numbered keys 0 to 9 correspond to ASCII codes 48 to 57, so it's easy to isolate those keys, and subtracting 48 brings those numbers down into the range 0 to 9. In this example, we trigger a 1 when the key is pressed and a 0 when it is released—in the manner of a MIDI key producing nonzero and zero velocities—and then pass on the 0-to-9 number. This seems like a potentially useful function for using the number keys as button presses (momentary toggles) to control your Max program. The **outlet** objects make this program useful as an object in some other patch. When used as an object in a parent patch, this program will first send the down/up status of the key out the right outlet, and it will then send the key number (0 to 9) out the left outlet.

## Objects used

`t` ×2, `-` ×2, `split` ×2, `0`, `1`, `keyup`, `key`

*Patch contains 15 boxes, 12 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/numkeysdownup_0.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/numkeydownup.png`
