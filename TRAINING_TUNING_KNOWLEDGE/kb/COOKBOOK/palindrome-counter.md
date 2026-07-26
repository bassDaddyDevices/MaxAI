---
type: cookbook
name: "Palindrome Counter"
summary: "What if I want to use a counter to drive a step sequencer and add a palindrome, always counting from 1 to 16, and from 16 to 1 again so that it will be kept in sync."
chapter: "MSP"
keywords: ["counter", "select", "trigger", "palindrome", "gswitch2"]
objects: ["counter", "gswitch2", "sel", "t"]
patch: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/palindromecounter.maxpat"
image: "/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0464 Palindrome Counter.png"
---

# Palindrome Counter

What if I want to use a counter to drive a step sequencer and add a palindrome, always counting from 1 to 16, and from 16 to 1 again so that it will be kept in sync. 

Solution 1: Run a **counter** object from 0 to 17. Use the number 0 and 17 to trigger a *bang* to change the direction. The output values from the right most outlet of **select** object will be counting 1 through 16, and 16 through 1.

Solution 2: Send a *bang* to two **counter** objects: one counting upwards from 1 to 16, and another one counting backwards from 16 to 1, via **gswitch2** object. Trigger a *bang* every time the **counter** objects hit 16 or 1, and send it to the gswitch2 object. It will then switch the gate between upward and downward **counter** objects.

## Objects used

`sel` ×3, `counter` ×3, `t` ×2, `gswitch2`

*Patch contains 15 boxes, 18 connections.*

## Files

- Patch: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/patches/palindromecounter.maxpat`
- Signal flow diagram: `/Volumes/DEV/Ableton Projects/MAX-LEARNOTRON/max-cookbook-archive/images/0464 Palindrome Counter.png`
